import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Разработка проектов санитарно-защитных зон предприятий",
  description:
    "Разработка проектов санитарно-защитных зон предприятий, Гомель, Гомельская область, Республика Беларусь, разработка проекта СЗЗ, санитарно-защитная зона, СЗЗ",
};

const Szz = () => {
  return (
    <section className="lg:p-8 text-sky-800 bg-[url('../public/services/szz.jpg')] bg-cover bg-center">
      <article className="flex flex-col items-center p-8 gap-8 bg-sky-100 opacity-90">
        <h1 className="text-2xl">
          Разработка проектов санитарно-защитных зон предприятий
        </h1>
        <div className="text-xs md:text-sm flex flex-col gap-2">
          <p>
            <strong>Санитарно-защитная зона (СЗЗ)</strong> - территория с особым
            режимом использования, размер которой обеспечивает достаточный
            уровень безопасности здоровья населения от вредного воздействия
            (химического, биологического, физического) объектов на ее границе и
            за ней.
          </p>
          <p>
            Установление размеров расчетной СЗЗ проводится на основании проекта
            СЗЗ с расчетами рассеивания выбросов загрязняющих веществ в
            атмосферном воздухе, уровней физического воздействия, с оценкой
            риска здоровью населения воздействия объекта.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Szz;
