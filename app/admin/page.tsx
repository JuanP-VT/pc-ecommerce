import AdminProductCard from "@/components/product card/admin product card/AdminProductCard";
export const dynamic = "force-dynamic";
type Props = {};

async function Page({}: Props) {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return (
    <div>
      <AdminProductCard product={data} />
    </div>
  );
}

export default Page;
