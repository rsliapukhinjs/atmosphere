"use client";

import { useState } from "react";

import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

type Props = {
  text: string;
  children: React.ReactNode;
};

const ServiceU = ({ text, children }: Props) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem className={isOpen ? "col-span-full" : ""}>
      <h2 onClick={handleOpen} className="p-8">
        <AccordionButton _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            className="text-xs lg:text-lg"
          >
            {text}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default ServiceU;
