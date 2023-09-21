"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import LabTable from "./LabTable";

const LabAccordion = () => {
  return (
    <section className="w-full lg:w-2/3">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton className="p-4 bg-sky-600 hover:bg-sky-700">
              <Box as="span" flex="1" textAlign="center" className="text-white">
                <span className="text-lg">
                  Перечень веществ в области аккредитации
                </span>
              </Box>
              <AccordionIcon className="text-white" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <LabTable />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default LabAccordion;
