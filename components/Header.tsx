import Image from "next/image";
import logo from "../public/logo.webp";

import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-8 lg:px-16 text-sky-700 flex items-center justify-between shadow-lg sticky top-0 bg-white">
      <Link href="/">
        <Image src={logo} alt="logo" width={125} />
      </Link>
      <nav className="flex gap-4 uppercase text-sm pt-4">
        <Link href="/service">
          <span>Услуги</span>
        </Link>
        <Link href="/info">
          <span>Инфо</span>
        </Link>
        <Link href="/contacts">
          <span>Контакт</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
