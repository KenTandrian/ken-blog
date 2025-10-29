import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import type { NavbarProps } from "sanity";

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div className="flex items-center justify-between p-4 pb-2">
        <Link
          className="text-[#F7AB0A] flex items-center hover:underline"
          href="/"
        >
          <ArrowUturnLeftIcon className="h-5 w-5 mr-2 text-[#F7AB0A]" />
          Go To Website
        </Link>

        <div className="hidden md:flex px-3 py-1.5 rounded-md justify-center border-[1px] border-[#F7AB0A]">
          <Link
            className="text-[#F7AB0A] font-bold"
            href="https://www.sanity.io"
          >
            www.sanity.io
          </Link>
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
