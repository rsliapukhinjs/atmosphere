import Link from "next/link";

import ServicesList from "@/components/ServicesList";
import ButtonU from "@/utils/ButtonU";

const Service = () => {
  return (
    <section className="min-h-screen flex flex-col items-center p-16 gap-8 text-sky-800">
      <h2 className="text-2xl md:text-5xl uppercase">Наши услуги</h2>
      <ServicesList />
      <Link href="/team">
        <ButtonU text="Заказать" />
      </Link>
    </section>
  );
};

export default Service;
