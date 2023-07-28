"use client";

import Image from "next/image";
import logo from "../public/logo.webp";
import Link from "next/link";

import DrawerUI from "./DrawerUI";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="w-full p-4 lg:px-16 text-sky-800 flex items-center justify-between shadow-lg sticky top-0 bg-white z-50">
      <Link href="/">
        <Image src={logo} alt="logo" width={150} />
      </Link>
      <nav className="hidden lg:flex  text-sky-800 font-normal pt-2">
        <NavMenu />
      </nav>
      <nav className="lg:hidden">
        <DrawerUI />
      </nav>
    </header>
  );
};

export default Header;
