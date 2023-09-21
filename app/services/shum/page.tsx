import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Расчет уровня шума (акустический расчет)",
  description:
    "Расчет уровня шума (акустический расчет), Гомель, Гомельская область, Республика Беларусь, расчет шума, уровень шума, акустический расчет",
};

const Shum = () => {
  return (
    <section className="lg:p-8 text-sky-800 bg-[url('../public/services/szz.jpg')] bg-cover bg-center">
      <article className="flex flex-col items-center p-8 gap-8 bg-sky-100 opacity-90">
        <h1 className="text-2xl">Расчет уровня шума (акустический расчет)</h1>
        <div className="text-xs md:text-sm flex flex-col gap-2">
          <p>
            <strong>Расчет уровня шума</strong> (акустический расчет)
            выполняется в проектной документации строительства жилых,
            производственных и общественных зданий. Акустический расчет
            проводится с целью обеспечить нормативные параметры уровня шума на
            территории жилой застройки.
          </p>

          <p>
            При проведении акустического расчета выявляются источники шума,
            определяются их шумовые характеристики, определяется степень влияния
            источников шума на объекты жилой застройки, в случае несоблюдения
            санитарных норм, разрабатываются шумозащитные мероприятия.
          </p>

          <p>
            Выступать источниками шума на предприятии могут технологическое
            оборудование, транспортные средства, механизмы и другое
            оборудование.
          </p>

          <p>
            ОДО «Атмосфера» выполняет акустические расчеты для разделов проектов
            СЗЗ, ООС, ОВОС.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Shum;
