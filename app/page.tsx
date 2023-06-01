import Buttonx from "@/components/button";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  return (
    <>
      <div>
        <Buttonx />
      </div>
    </>
  );
}
