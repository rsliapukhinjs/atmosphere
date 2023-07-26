import Image from "next/image";

import spec from "../public/spec.jpg";
import lab from "../public/lab.jpg";
import map from "../public/map.jpg";

const Specials = () => {
  return (
    <section className="w-3/4 p-8 flex flex-col gap-8 items-center bg-teal-100 text-sky-800">
      <h2 className="text-3xl uppercase bold ">Наши преимущества</h2>
      <article className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2">
        <div className="flex items-center justify-center lg:text-xl">
          ОДО &laquo;Атмосфера&raquo; – крупнейшее в Гомельской области
          предприятие, оказывающее комплексные услуги в области охраны
          окружающей среды и охраны труда, с опытом работы в данной области
          более 30 лет. Компания имеет штат специалистов с большим опытом в
          сфере экологии и природоохранных мероприятий.
        </div>
        <Image src={spec} alt="specialist" className="w-full" />
      </article>
      <article className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
        <Image src={lab} alt="laboratory" className="w-full" />
        <div className="flex items-center justify-center lg:text-xl">
          Наша компания имеет в своем составе современную химическую
          лабораторию, аккредитованную более чем на 100 физико-химических
          показателей, с широким перечнем оборудования для исследования
          количественного состава выбросов загрязняющих веществ в атмосферный
          воздух.
        </div>
      </article>
      <article className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2">
        <div className="flex items-center justify-center lg:text-xl">
          Мы предоставляем услуги предприятиям по всей Республике Беларусь.
          Выполняем работы на объектах любой сложности и в удобные для
          заказчиков сроки. В списке наших клиентов находятся крупнейшие
          промышленные предприятия страны.
        </div>
        <Image src={map} alt="map" className="w-full" />
      </article>
    </section>
  );
};

export default Specials;
