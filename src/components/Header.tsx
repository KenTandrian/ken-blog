import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="object-cover"
            height={40}
            width={40}
            src="/kt-logo-light.webp"
            alt="logo"
          />
        </Link>
        <h1>My Blog</h1>
      </div>
      <div>
        <Link
          href="https://www.papareact.com/universityofcode"
          className="px-4 py-2 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center gap-2"
        >
          <Image
            className="rounded-full object-cover"
            height={20}
            width={20}
            src="https://links.papareact.com/1m8"
            alt="logo"
          />
          Tutorial by University of Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
