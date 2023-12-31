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
                  <h3 className="border-b-2 border-white hover:border-emerald-600">
                    Перечень услуг
                  </h3>
                </Link>
              </li>
              <li>
                <Link href="/docs">
                  <h3 className="border-b-2 border-white hover:border-emerald-600">
                    Документация
                  </h3>
                </Link>
              </li>
              <li>
                <Link href="/lab">
                  <h3 className="border-b-2 border-white hover:border-emerald-600">
                    Лаборатория
                  </h3>
                </Link>
              </li>
              <li>
                <Link href="/info">
                  <h3 className="border-b-2 border-white hover:border-emerald-600">
                    История
                  </h3>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <h3 className="border-b-2 border-white hover:border-emerald-600">
                    Контакты
                  </h3>
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
