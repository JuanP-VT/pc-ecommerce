import NewProductForm from "@/components/forms/NewProductForm";
import { getServerSession } from "next-auth";
type Props = {};

function Page({}: Props) {
  const session = getServerSession();
  return (
    <>
      <NewProductForm />
    </>
  );
}

export default Page;
