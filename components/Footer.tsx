import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-sky-800 border-t-2 flex flex-col items-center justify-center text-sm bg-sky-50">
      <div className="hidden md:flex w-full p-8 justify-around text-xs uppercase">
        <div className="flex flex-col gap-4 items-start">
          <Link href="/services">
            <span>Услуги</span>
          </Link>
          <Link href="/lab">
            <span>Лаборатория</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <Link href="/docs">
            <span>Документы</span>
          </Link>
          <Link href="/history">
            <span>История</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <Link href="/team">
            <span>Команда</span>
          </Link>
          <Link href="/contacts">
            <span>Контакты</span>
          </Link>
        </div>
      </div>
      <div className="w-full p-4 border-t-2 flex items-center justify-center">
        <span>ОДО &laquo;Атмосфера&raquo; &copy; 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
