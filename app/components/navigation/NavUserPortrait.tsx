/**
 * NavUserPortrait Component
 *
 * The NavUserPortrait component renders a user portrait in the navigation bar.
 * It uses the useSession hook to check if the user is signed in.
 * If the user is signed in, the NavUserPortrait component renders the user's first name and a button to sign out.
 * If the user is not signed in, the NavUserPortrait component renders a button to sign in.
 *
 * @component
 *
 * @returns {JSX.Element} The JSX element representing the NavUserPortrait component.
 */
"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
function NavUserPortrait() {
  const { data: session } = useSession();
  if (session) {
    // I want to display only the users first name
    const nameAsArray = session?.user.name?.split(" ") as String[];
    const firstName = nameAsArray[0];
    return (
      <div className="flex h-14 justify-center py-2 sm:w-96 sm:justify-evenly">
        <div className=" items-center justify-between  sm:flex ">
          <Link href="user">
            <Image
              className=" mr-3 rounded-full object-contain sm:flex"
              width={40}
              height={40}
              alt="Your Profile Image"
              src={
                typeof session.user.image === "string" ? session.user.image : ""
              }
            />
          </Link>
        </div>
        <Link
          href="user"
          className="hidden items-center justify-center text-xs font-bold hover:text-blue-500 sm:flex lg:text-base"
        >
          {firstName}
        </Link>
        <Button size="sm" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <>
      <div className="sm:bg-slate-950-300 flex h-14 justify-center p-2 sm:w-96 sm:justify-evenly">
        <div className="hidden items-center justify-between whitespace-nowrap text-slate-500 underline sm:flex ">
          You are not Signed in
        </div>
        <Button size="sm" onClick={() => signIn()}>
          Sign In
        </Button>
      </div>
    </>
  );
}
export default NavUserPortrait;
