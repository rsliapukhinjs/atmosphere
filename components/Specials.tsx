"use client";

import Image from "next/image";
import spec from "../public/spec.jpg";
import lab from "../public/lab.jpg";
import map from "../public/map.jpg";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Specials = () => {
  return (
    <>
      <section className="p-8 text-sky-800">
        <Tabs align="center">
          <TabList className="lg:text-xl">
            <Tab>Деятельность</Tab>
            <Tab>Лаборатория</Tab>
            <Tab>География</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <article className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2">
                <div className="flex flex-col gap-8 items-center justify-center lg:text-xl">
                  ОДО &laquo;Атмосфера&raquo; – крупнейшее в Гомельской области
                  предприятие, оказывающее комплексные услуги в области охраны
                  окружающей среды и охраны труда, с опытом работы в данной
                  области более 30 лет.
                  <Button className="bg-sky-600 text-white hover:bg-sky-800 font-normal">
                    Узнать больше
                  </Button>
                </div>
                <Image src={spec} alt="specialist" className="w-full" />
              </article>
            </TabPanel>
            <TabPanel>
              <article className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
                <Image src={lab} alt="laboratory" className="w-full" />
                <div className="flex flex-col gap-8 items-center justify-center lg:text-xl">
                  Наша компания имеет в своем составе современную химическую
                  лабораторию, аккредитованную более чем на 100
                  физико-химических показателей, с широким перечнем оборудования
                  для исследования выбросов загрязняющих веществ в атмосферный
                  воздух.
                  <Button className="bg-sky-600 text-white hover:bg-sky-800 font-normal">
                    Узнать больше
                  </Button>
                </div>
              </article>
            </TabPanel>
            <TabPanel>
              <article className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2">
                <div className="flex flex-col gap-8 items-center justify-center lg:text-xl">
                  Мы предоставляем услуги предприятиям по всей Республике
                  Беларусь. Выполняем работы на объектах любой сложности и в
                  удобные для заказчиков сроки. В списке наших клиентов
                  находятся крупнейшие промышленные предприятия страны.
                  <Button className="bg-sky-600 text-white hover:bg-sky-800 font-normal">
                    Узнать больше
                  </Button>
                </div>
                <Image src={map} alt="map" className="w-full" />
              </article>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default Specials;
