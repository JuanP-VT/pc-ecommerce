"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
function NavUserPortrait() {
  const { data: session } = useSession();
  if (session) {
    const nameAsArray = session?.user.name?.split(" ") as String[];
    const firstName = nameAsArray[0];
    return (
      <div className="sm:bg-slate-950-300 flex h-14 justify-center p-2 sm:w-96 sm:justify-evenly">
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
        <p className="hidden items-center justify-center text-white underline sm:flex">
          Hi {firstName}
        </p>
        <button
          role="button"
          onClick={() => signOut()}
          className="rounded border border-slate-500 bg-transparent
         px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-slate-500"
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="sm:bg-slate-950-300 flex h-14 justify-center p-2 sm:w-96 sm:justify-evenly">
        <div className="hidden items-center justify-between whitespace-nowrap text-slate-500 underline sm:flex ">
          You are not Signed in
        </div>
        <button
          name="Sign In "
          onClick={() => signIn()}
          className="rounded border border-slate-500 bg-transparent
               px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-slate-500"
        >
          Sign In
        </button>
      </div>
    </>
  );
}
export default NavUserPortrait;
