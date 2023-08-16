import Specials from "@/components/Specials";
import Cta from "@/components/Cta";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import HeroServices from "@/components/HeroServices";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    'ОДО "Атмосфера". Крупнейшая в г.Гомеле и Гомельской области компания, предрставляющая экологические услуги',
  description:
    "Услуги по инвентаризации выбросов, разработка нормативов ПДВ, разработка паспортов вентиляционных систем, разработка паспортов газоочистных установок (ГОУ), проверка эффективности ГОУ, разработка раздела охраны окружающей среды (ООС) в составе проектной документации, разработка экологических паспортов предприятий, разработка проектов санитарно-защитных зон (СЗЗ), расчет шума, расчет неблагоприятных метеорологических условий (НМУ), разработка инструкции по обращению отходами, инвентаризация отходов производства, контрольные замеры источников выбросов и локальный мониторинг",
};

const Home = () => {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-white to-emerald-100">
      <Hero />
      <HeroServices />
      <Specials />
      <Clients />
      <Cta />
    </main>
  );
};

export default Home;
