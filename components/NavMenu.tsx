import Link from "next/link";

const NavMenu = () => {
  return (
    <>
      <ul className="flex items-center gap-8 text-sm uppercase pt-2">
        <Link href="/services">
          <li>Услуги</li>
        </Link>
        <Link href="/info">
          <li>Инфо</li>
        </Link>
        <Link href="/contacts">
          <li>Контакты</li>
        </Link>
      </ul>
    </>
  );
};

export default NavMenu;
