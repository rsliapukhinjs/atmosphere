"use client";

import { useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerUI;
