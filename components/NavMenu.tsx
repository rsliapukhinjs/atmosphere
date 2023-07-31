import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import Link from "next/link";

import { FaChevronDown } from "react-icons/fa";

const NavMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FaChevronDown />}
          className="text-sky-800 text-sm font-normal"
        >
          УСЛУГИ
        </MenuButton>
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
        <MenuButton
          as={Button}
          rightIcon={<FaChevronDown />}
          className="text-sky-800 text-sm font-normal"
        >
          ИНФО
        </MenuButton>
        <MenuList>
          <Link href="/docs">
            <MenuItem>Документы</MenuItem>
          </Link>
          <Link href="/history">
            <MenuItem>История</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FaChevronDown />}
          className="text-sky-800 text-sm font-normal"
        >
          КОНТАКТЫ
        </MenuButton>
        <MenuList>
          <Link href="/team">
            <MenuItem>Команда</MenuItem>
          </Link>
          <Link href="/address">
            <MenuItem>Адрес</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavMenu;
