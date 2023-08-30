import Image from "next/image";
import lab from "../../public/lab.jpg";
import LabTable from "@/components/LabTable";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Химическая лаборатория ОДО "Атмосфера"',
  description:
    "Химическая лаборатория, Гомель, Гомельская обл., Республика Беларусь, химические анализы, газоанализатор, аспирация, гравиметрия, хроматография, спектрофотометрия",
};

const Lab = () => {
  return (
    <section className="p-8 flex flex-col items-center bg-gradient-to-b from-white to-sky-100 gap-8 text-sky-800">
      <div className="w-full xl:w-1/2">
        <Image src={lab} alt="Laboratory" />
      </div>
      <h1 className="text-2xl">Область аккредитации</h1>
      <LabTable />
    </section>
  );
};

export default Lab;
