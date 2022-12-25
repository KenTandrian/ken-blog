import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link className="text-[#F7AB0A] flex items-center" href="/">
          <ArrowUturnLeftIcon className="h-5 w-5 mr-2 text-[#F7AB0A]" />
          Go To Website
        </Link>

        <div className="hidden md:flex px-5 py-3 rounded-lg justify-center border-2 border-[#F7AB0A]">
          <h1 className="font-bold text-white">
            Welcome to The Blog CMS! Brought to you by
          </h1>
          <Link
            className="text-[#F7AB0A] font-bold ml-2"
            href="https://www.sanity.io"
          >
            www.sanity.io
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
