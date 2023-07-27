import Link from "next/link";
import { FaEnvelope, FaPhone, FaPhoneAlt } from "react-icons/fa";

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
        <div className="w-full flex lg:flex-col gap-8 items-center lg:items-start justify-center lg:text-xl">
          <div className="flex items-center gap-4">
            <FaPhone className="inline" size="30" />
            +375-(44)-702-30-93
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="inline" size="30" />
            atmosfera_gomel@mail.ru
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
