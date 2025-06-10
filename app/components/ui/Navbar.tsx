import { auth, signIn, signOut } from "../../auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-raleway">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Vercel Logo" width={45} height={30} />{" "}
          <h4 className="text-lg font-bold text-black">The Next Thing</h4>
        </Link>

        <div className="flex items-center gap-5 text-black">
          <ul className="flex gap-3"></ul>
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
