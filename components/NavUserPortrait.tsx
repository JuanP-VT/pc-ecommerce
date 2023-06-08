"use client";
import { useSession, signIn } from "next-auth/react";

function NavUserPortrait() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <>
      <div className="h-14 p-2 flex justify-center sm:bg-slate-950-300 sm:w-96 sm:justify-evenly">
        <div className="hidden whitespace-nowrap items-center justify-between text-slate-500 underline sm:flex ">
          You are not signed in
        </div>
        <button
          onClick={() => signIn()}
          className="bg-transparent hover:bg-slate-500 text-black-700 font-semibold
         hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
        >
          Sign In
        </button>
      </div>
    </>
  );
}
export default NavUserPortrait;
