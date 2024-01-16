import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/app/components/ui/card";

type Props = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
};

function FeaturedProductCard({ _id, name, description, imageUrl }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          width={200}
          height={200}
          alt={name}
          className="h-48 w-48 rounded-sm object-cover"
          src={imageUrl}
        />
      </CardContent>
      <CardFooter>
        <Button className="flex w-full" size="sm" variant="outline">
          <Link
            className="flex h-full w-full items-center justify-center"
            href={`${_id}`}
          >
            Purchase
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default FeaturedProductCard;
