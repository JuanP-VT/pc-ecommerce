/**
 * Home Page Component
 *
 * The homepage of the website showcasing various products with ImageContainers.
 *
 * @module
 * @returns {JSX.Element} - The JSX markup for the Home page.
 */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/app/components/ui/card";
import FeaturedProductCard from "./components/homepage/FeaturedProductCard";

export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative h-[500px] md:h-[700px]">
          <img
            alt="Gaming PC"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.ibb.co/2dGDfsJ/i9-13th.jpg"
          />
          <div className="absolute inset-0" />
          <div className="relative flex h-full items-center justify-center px-4 text-center md:px-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                Elevate Your Gaming Experience
              </h1>
              <p className="text-lg text-white md:text-2xl">
                Discover high-performance PC components for gamers, by gamers.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white hover:bg-blue-700"
                href="/store"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
        <section className="px-4 py-12 md:px-6">
          <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeaturedProductCard
              name="RTX 3090 TI"
              _id="64aaf97957f9bacaa0ee6e2e"
              imageUrl="https://m.media-amazon.com/images/I/81XY8ebwQML._AC_SL1500_.jpg"
              description="Experience the new generation of gaming"
            />
            <FeaturedProductCard
              name="Intel Core I9 12900K"
              _id="648bfa6efdcfaf871509ef80"
              imageUrl="https://m.media-amazon.com/images/I/61ZRFy6GZ4L._AC_SL1280_.jpg"
              description="Power engineering"
            />
            <FeaturedProductCard
              name="Radeon RX 6800 XT"
              _id="64b71ec59bda17032e528197"
              imageUrl="https://m.media-amazon.com/images/I/81-70VBUexL._AC_SL1500_.jpg"
              description="Unleash the beast"
            />
            <FeaturedProductCard
              name="AMD Ryzen 9 7900X"
              _id="649b41af307a225d6c794a3b"
              imageUrl="https://m.media-amazon.com/images/I/51xkaPM+p9L._AC_SL1500_.jpg"
              description="Quantum Computing... not yet"
            />
          </div>
        </section>
        <section className="bg-gray-100 px-4 py-12 dark:bg-gray-800 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Join our Discord
          </h2>
          <p className="mb-6 text-center text-lg">
            Get exclusive offers and updates on new products.
          </p>
          <div className="flex justify-center">
            <Link href="/store">
              <Button>Visit Store</Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="flex h-16 items-center justify-center bg-white px-4 dark:bg-gray-900 md:px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 PC HUB. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
