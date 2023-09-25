import Image from "next/image";
import lab from "../../public/lab.jpg";
import LabTable from "@/components/LabTable";

import type { Metadata } from "next";
import LabAccordion from "@/components/LabAccordion";

export const metadata: Metadata = {
  title: 'Химическая лаборатория ОДО "Атмосфера"',
  description:
    "Химическая лаборатория, Гомель, Гомельская обл., Республика Беларусь, химические анализы, газоанализатор, аспирация, гравиметрия, хроматография, спектрофотометрия",
};

const Lab = () => {
  return (
    <section className="min-h-screen p-8 flex flex-col items-center bg-gradient-to-b from-white to-sky-100 gap-8 text-sky-800">
      <article className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-8">
        <div className="">
          <Image src={lab} alt="Laboratory" />
        </div>
        <div className="p-8 h-full w-full bg-white rounded-lg text-xs md:text-sm flex flex-col justify-center gap-8">
          <h1 className="text-2xl text-center">Химическая лаборатория</h1>
          <p>
            &#9;ОДО &laquo;Атмосфера&raquo; имеет в своем составе современную
            химическую лабораторию с широким перечнем оборудования для
            исследования количественного состава выбросов загрязняющих веществ в
            атмосферный воздух, проведения аэродинамических испытаний систем
            вентиляции с преобладанием точных и чувствительных методов
            фотометрического, электрохимического, хроматографического,
            гравиметрического анализа, позволяющих получать точные и достоверные
            результаты измерений.
          </p>
        </div>
      </article>

      <LabAccordion />
    </section>
  );
};

export default Lab;
