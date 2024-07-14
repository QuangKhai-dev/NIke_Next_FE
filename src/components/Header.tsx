import IconCart from "@/assets/svg/IconCart";
import IconHeart from "@/assets/svg/IconHeart";
import IconNike from "@/assets/svg/IconNike";
import IconNikeMini from "@/assets/svg/IconNikeMini";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="container">
        <div className="py-2 flex items-center justify-between">
          {/* mini logo  */}
          <Link href="/">
            <IconNikeMini />
          </Link>
          <div>
            <ul className="flex items-center">
              <li className="px-2 text-xs border-r border-r-black">
                <Link href="/">Find a Store</Link>
              </li>
              <li className="px-2 text-xs border-r border-r-black">
                <Link href="/">Help</Link>
              </li>
              <li className="px-2 text-xs border-r border-r-black">
                <Link href="/">Join us</Link>
              </li>
              <li className="px-2 text-xs">
                <Link href="/">Sign in</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-3 flex items-center justify-between">
          <div className="flex-1">
            <Link href="/" className="w-max inline-block">
              <IconNike />
            </Link>
          </div>
          <nav>
            <ul className="flex items-center space-x-4 font-normal">
              <li>
                <Link href="/">New & Featured</Link>
              </li>
              <li>
                <Link href="/">Men</Link>
              </li>
              <li>
                <Link href="/">Women</Link>
              </li>
              <li>
                <Link href="/">Kids</Link>
              </li>
              <li>
                <Link href="/">Sale</Link>
              </li>
              <li>
                <Link href="/">Customise</Link>
              </li>
              <li>
                <Link href="/">SNKRS</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <form>
              <div>
                <button></button>
                <input type="text" />
              </div>
            </form>
            <Link href="/">
              <IconHeart />
            </Link>
            <Link href="/">
              <IconCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
