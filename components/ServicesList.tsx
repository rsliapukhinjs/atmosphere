"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const ServicesList = () => {
  return (
    <div className="w-full lg:w-3/4 bg-read-100 p-8">
      <Accordion allowMultiple>
        <AccordionItem>
          <h2 className="py-4">
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box as="span" flex="1" textAlign="left" className="text-3xl">
                Инвентаризация и нормативы ПДВ
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul className="text-xl flex flex-col gap-4">
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Инвентаризация выбросов
                  загрязняющих веществ
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Разработка проектов
                  нормативов допустимых выбросов
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2 className="py-4">
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box as="span" flex="1" textAlign="left" className="text-3xl">
                Вентсистемы и ГОУ
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul className="text-xl flex flex-col gap-4">
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Паспортизация и
                  аэродинамические испытания вентистем
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Разработка паспортов и
                  проверка эффективности ГОУ
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2 className="py-4">
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box as="span" flex="1" textAlign="left" className="text-3xl">
                Проектная документация
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul className="text-xl flex flex-col gap-4">
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Разработка разделов
                  &laquo;Охрана окружающей среды&raquo; в составе проектной
                  документации
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Составление экологических
                  паспортов предприятий
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2 className="py-4">
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box as="span" flex="1" textAlign="left" className="text-3xl">
                СЗЗ, расчеты рассеивания и шума, НМУ
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul className="text-xl flex flex-col gap-4">
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Разработка проектов
                  санитарно-защитных зон предприятий
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Проведение расчетов
                  рассеивания загрязняющих веществ в атмосфере
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Проведение расчетов шума
                  (акустический расчет)
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Разработка мероприятий в
                  период неблагоприятных метеорологических условий
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2 className="py-4">
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box as="span" flex="1" textAlign="left" className="text-3xl">
                Обращение с отходами
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul className="text-xl flex flex-col gap-4">
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <FaCheckCircle className="inline" /> Разработка инструкций по
                  обращению с отходами
                </div>
                <p className="bg-red-100 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam harum consectetur necessitatibus blanditiis fuga ab
                  dolorem vel quae distinctio animi iure voluptas ipsa nihil
                  ullam sint officia dolores, accusamus ducimus modi eum omnis
                  laudantium quos eaque est. Modi maxime tenetur fuga facere,
                  repellendus maiores corporis, magni eveniet illum rem
                  corrupti?
                </p>
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ServicesList;
