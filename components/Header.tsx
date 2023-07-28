"use client";

import Image from "next/image";
import logo from "../public/logo.webp";
import Link from "next/link";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Header = () => {
  return (
    <header className="w-full p-4 lg:px-16 text-sky-800 flex items-center justify-between shadow-lg sticky top-0 bg-white z-50">
      <Link href="/">
        <Image src={logo} alt="logo" width={125} />
      </Link>
      <nav className="flex gap-8 text-sm uppercase pt-2">
        <Menu>
          <MenuButton>УСЛУГИ</MenuButton>
          <MenuList>
            <Link href="/services">
              <MenuItem>Перечень услуг</MenuItem>
            </Link>
            <Link href="/lab">
              <MenuItem>Лаборатория</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>ИНФО</MenuButton>
          <MenuList>
            <Link href="/docs">
              <MenuItem>Документы</MenuItem>
            </Link>
            <Link href="/history">
              <MenuItem>История</MenuItem>
            </Link>
            <Link href="/clients">
              <MenuItem>Клиенты</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>КОНТАКТЫ</MenuButton>
          <MenuList>
            <Link href="/team">
              <MenuItem>Команда</MenuItem>
            </Link>
            <Link href="/address">
              <MenuItem>Адрес</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
