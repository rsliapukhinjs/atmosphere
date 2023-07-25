import Image from "next/image";
import logo from "../public/logo.webp";

const Header = () => {
  return (
    <header className="w-full p-8 lg:px-16 text-sky-700 flex items-center justify-between shadow-lg sticky top-0 bg-white">
      <Image src={logo} alt="logo" width={125} />
      <nav className="flex gap-4 uppercase font-bold text-sm pt-4">
        <span>Услуги</span>
        <span>Лицензии</span>
        <span>Контакты</span>
      </nav>
    </header>
  );
};

export default Header;
