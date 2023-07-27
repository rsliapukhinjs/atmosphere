import Link from "next/link";
import { FaEnvelope, FaPhoneSquare, FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-teal-50 flex flex-col items-center justify-center text-sm">
      <div className="w-full p-8 px-16 lg:px-32 bg-sky-800 flex lg:grid grid-cols-4">
        <div className="hidden lg:flex flex-col gap-4 items-start">
          <Link href="/services">
            <span>Услуги</span>
          </Link>
          <Link href="/lab">
            <span>Лаборатория</span>
          </Link>
        </div>
        <div className="hidden lg:flex flex-col gap-4 items-start">
          <Link href="/docs">
            <span>Документы</span>
          </Link>
          <Link href="/history">
            <span>История</span>
          </Link>
          <Link href="/clients">
            <span>Клиенты</span>
          </Link>
        </div>
        <div className="hidden lg:flex flex-col gap-4 items-start">
          <Link href="/team">
            <span>Команда</span>
          </Link>
          <Link href="/contacts">
            <span>Контакты</span>
          </Link>
        </div>
        <div className="w-full flex lg:flex-col gap-8 lg:gap-4 items-center lg:items-start justify-center text-sm md:text-lg lg:text-xl">
          <div className="flex items-center gap-4 cursor-pointer">
            <FaEnvelope className="inline" size="30" />
            <span className="hidden sm:inline">atmosfera_gomel@mail.ru</span>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <FaPhoneSquare className="inline" size="30" />
            <span className="hidden sm:inline">+375-(44)-702-30-93</span>
          </div>
        </div>
      </div>
      <div className="w-full p-4 border-t-2 flex items-center justify-center">
        <span>ОДО &laquo;Атмосфера&raquo; &copy; 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
