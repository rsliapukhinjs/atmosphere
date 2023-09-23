import {
  FaBookOpen,
  FaWind,
  FaMap,
  FaCalculator,
  FaTrash,
  FaBalanceScale,
} from "react-icons/fa";

import Link from "next/link";

const HeroServices = () => {
  return (
    <div className="flex flex-col items-center text-sky-800 bg-slate-50 p-8">
      <h2 className="text-2xl">Мы предлагаем услуги:</h2>
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 p-2 lg:p-8 text-sm lg:text-lg text-center ">
        <Link href="/services/inventar">
          <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer ">
            <FaBookOpen size={50} />
            <h2>Инвентаризация и нормативы</h2>
          </article>
        </Link>
        <Link href="/services/ventilacya">
          <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
            <FaWind size={50} />
            <h2>Вентиляция и ГОУ</h2>
          </article>
        </Link>
        <Link href="/services/passport">
          <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
            <FaMap size={50} />
            <h2>Экологические паспорта</h2>
          </article>
        </Link>
        <Link href="/services/szz">
          <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
            <FaCalculator size={50} />
            <h2>Расчет СЗЗ, шума, НМУ</h2>
          </article>
        </Link>
        <Link href="/services/othody">
          <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
            <FaTrash size={50} />
            <h2>Обращение с отходами</h2>
          </article>
        </Link>
        <Link href="/services/control">
          <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
            <FaBalanceScale size={50} />
            <h2>Контрольные замеры</h2>
          </article>
        </Link>
      </section>
    </div>
  );
};

export default HeroServices;
