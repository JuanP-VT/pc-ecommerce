import Link from "next/link";

type Props = {};

function AdminSidebar({}: Props) {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-screen w-44 flex-col border bg-green-100 p-2">
      <Link
        href="/admin/addproduct"
        className="rounded border border-gray-400 bg-white px-4 py-2 text-center font-semibold text-gray-800 shadow hover:bg-gray-100"
      >
        Register Item
      </Link>
      <div className="flex flex-col">
        <div className="my-3">
          <label className="block text-sm font-bold text-gray-700">Name</label>
          <input
            className=" focus:shadow-outline w-full  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            placeholder="Name"
          ></input>
        </div>
        <div className="my-1">
          <label className="block text-sm font-bold text-gray-700">
            Category
          </label>
          <input
            className=" focus:shadow-outline w-full  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            placeholder="Category"
          ></input>
        </div>
        <div className="my-1">
          <label className="block text-sm font-bold text-gray-700">
            Price Range
          </label>
          <input
            className=" focus:shadow-outline w-full  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="number"
            placeholder="min price"
          ></input>
          <input
            className=" focus:shadow-outline w-full  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="number"
            placeholder="max price"
          ></input>
        </div>
        <div className="my-1">
          <label className="block text-sm font-bold text-gray-700">
            Stock Range
          </label>
          <input
            className=" focus:shadow-outline w-full  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="number"
            placeholder="min stock"
          ></input>
          <input
            className=" focus:shadow-outline w-full  appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="number"
            placeholder="max stock"
          ></input>
        </div>

        <div className="my-1 flex gap-4">
          <label className="block text-sm font-bold text-gray-700">
            On Discount
          </label>
          <input className="mr-2 leading-tight" type="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
