"use client";
import { data } from "autoprefixer";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
function NavUserPortrait() {
  const { data: session } = useSession();
  if (session) {
    const nameAsArray = session?.user.name?.split(" ") as String[];
    const firstName = nameAsArray[0];
    return (
      <div className="h-14 p-2 flex justify-center sm:bg-slate-950-300 sm:w-96 sm:justify-evenly">
        <div className="hidden items-center justify-between  sm:flex ">
          <Image
            className="hidden rounded-full sm:flex"
            width={40}
            height={40}
            alt="Your Profile Image"
            src={
              typeof session.user.image === "string" ? session.user.image : ""
            }
          />
        </div>
        <p className="hidden justify-center items-center text-white underline sm:flex">
          Hi {firstName}
        </p>
        <button
          role="button"
          onClick={() => signOut()}
          className="bg-transparent text-white hover:bg-slate-500 font-semibold
         py-2 px-4 border border-slate-500 hover:border-transparent rounded"
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="h-14 p-2 flex justify-center sm:bg-slate-950-300 sm:w-96 sm:justify-evenly">
        <div className="hidden whitespace-nowrap items-center justify-between text-slate-500 underline sm:flex ">
          You are not Signed in
        </div>
        <button
          name="Sign In "
          onClick={() => signIn()}
          className="bg-transparent text-white hover:bg-slate-500 font-semibold
               py-2 px-4 border border-slate-500 hover:border-transparent rounded"
        >
          Sign In
        </button>
      </div>
    </>
  );
}
export default NavUserPortrait;
