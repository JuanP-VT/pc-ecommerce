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
