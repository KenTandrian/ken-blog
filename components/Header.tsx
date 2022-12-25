import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            alt="Logo"
            className="rounded-full"
            height={50}
            src="https://links.papareact.com/1m8"
            width={50}
          />
        </Link>
        <h1>My Blog</h1>
      </div>
      <div>
        <Link
          href="https://www.papareact.com/universityofcode"
          className="px-5 py-2 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Sign up to the University of Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
