"use client";

import { useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const DrawerUI = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FaBars
        className="text-2xl text-sly-800 cursor-pointer"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Что вас интересует?</DrawerHeader>

          <DrawerBody>
            <ul className="flex flex-col gap-8">
              <li className="flex flex-col gap-4">
                <h2 className="uppercase text-xl border-b-2">Услуги</h2>
                <Link href="/services">
                  <h3>Перечень услуг</h3>
                </Link>
                <Link href="/lab">
                  <h3>Лаборатория</h3>
                </Link>
              </li>
              <li className="flex flex-col gap-4">
                <h2 className="uppercase text-xl border-b-2">Инфо</h2>
                <Link href="/docs">
                  <h3>Документы</h3>
                </Link>
                <Link href="/history">
                  <h3>История</h3>
                </Link>
                <Link href="/clients">
                  <h3>Клиенты</h3>
                </Link>
              </li>
              <li className="flex flex-col gap-4">
                <h2 className="uppercase text-xl border-b-2">Контакты</h2>
                <Link href="/team">
                  <h3>Команда</h3>
                </Link>
                <Link href="/address">
                  <h3>Адрес</h3>
                </Link>
              </li>
            </ul>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerUI;
