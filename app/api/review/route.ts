/**
 * Handle the creation of a new review for a product.
 * Request body type @param {ReviewRequest}
 * @param {Request} request - The request object containing the review data in its body.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the NextResponse object containing the result of the review creation process.
 *
 * This function handles the creation of a new review for a product. It first retrieves the review data from the request body.
 * It then validates the authorization header using the validateAuthHeader function.
 * If the header is valid, it searches for the product in the database using the provided product ID from the review request.
 * If the product is found, it checks if the user has already reviewed the product.
 * If the user has already reviewed the product, it returns a NextResponse object with a message indicating that the user has already reviewed the item.
 * If the user has not reviewed the product, it adds the new review to the product's reviews array and updates the product in the database.
 * If the review is successfully added, it returns a NextResponse object with a success message.
 * If there is an error during the review creation process or if the authorization header is invalid, it returns a NextResponse object with a message of "invalid".
 */
import { NextResponse } from "next/server";
import { config } from "dotenv";
import { ProductWithId, Review, ReviewRequest } from "@/app/types/product";
import { headers } from "next/headers";
import validateAuthHeader from "@/app/lib/validateAuthHeader";
import { dbClient } from "@/app/lib/db";
import { ObjectId } from "mongodb";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  config();
  const req = (await request.json()) as ReviewRequest;
  //Get purchase order and auth header
  const authorization = headers().get("Authorization");
  //validate the auth header

  if (authorization) {
    const isValidAuthHeader = await validateAuthHeader({
      authorization,
    });
    try {
      const collection = dbClient.db("Cluster0").collection("products");
      const _id = new ObjectId(req.productId);
      const target = (await collection.findOne({
        _id,
      })) as ProductWithId | null;
      if (target) {
        const productReviews = target.reviews ?? [];
        //find user
        const userID = req.user._id;
        const findUser = productReviews.find(
          (review) => review.user._id === userID
        );
        //If user has already review, return response
        if (findUser) {
          return NextResponse.json("User has already review this item");
        }
        //Add review to item
        const updateReview = [...productReviews];
        const review: Review = {
          title: req.title,
          comment: req.comment,
          stars: req.stars,
          user: req.user,
        };
        updateReview.push(review);
        await collection.findOneAndUpdate(
          { _id },
          {
            $set: { reviews: updateReview },
          }
        );
        return NextResponse.json("success");
      }
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json("invalid");
  }
}
