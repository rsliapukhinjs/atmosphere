import Link from "next/link";

const NavMenu = () => {
  return (
    <>
      <ul className="flex items-stretch gap-8 text-xs uppercase pt-2">
        <Link href="/services">
          <li className="border-b-2 border-white hover:border-b-2 hover:border-emerald-600">
            Услуги
          </li>
        </Link>
        <Link href="/info">
          <li className="border-b-2 border-white hover:border-b-2 hover:border-emerald-600">
            Инфо
          </li>
        </Link>
        <Link href="/contacts">
          <li className="border-b-2 border-white hover:border-b-2 hover:border-emerald-600">
            Контакты
          </li>
        </Link>
      </ul>
    </>
  );
};

export default NavMenu;
