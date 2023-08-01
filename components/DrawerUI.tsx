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
    <aside>
      <FaBars
        className="text-2xl text-sky-800 cursor-pointer"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="text-sky-800">
          <DrawerCloseButton />
          <DrawerHeader>Что вас интересует?</DrawerHeader>

          <DrawerBody>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/services">
                  <h3>Перечень услуг</h3>
                </Link>
              </li>
              <li>
                <Link href="/info">
                  <h3>Информация</h3>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <h3>Контакты</h3>
                </Link>
              </li>
            </ul>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </aside>
  );
};

export default DrawerUI;
