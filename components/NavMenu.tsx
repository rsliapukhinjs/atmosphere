"use client";

import { FaChevronDown } from "react-icons/fa";

import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import Link from "next/link";

const NavMenu = () => {
  return (
    <>
      <ul className="flex">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown className="text-sky-800" />}
          >
            <span className="uppercase text-sm text-sky-800">Услуги</span>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/services/inventar">Инвентаризация выбросов</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services/normativy">Нормативы ПДВ</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services/ventilacya">Вентиляционные системы</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services/gou">Газоочистные установки</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services/szz">Разработка СЗЗ</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services/othody">Обращение с отходами</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services/control">Контрольные замеры</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown className="text-sky-800" />}
          >
            <span className="uppercase text-sm text-sky-800">Инфо</span>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/info">О нас</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown className="text-sky-800" />}
          >
            <span className="uppercase text-sm text-sky-800">Контакты</span>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/contacts">Контакты</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </ul>
    </>
  );
};

export default NavMenu;
