import Carousel from "@/components/Carousel";

const Info = () => {
  return (
    <section className="flex flex-col items-center text-sky-800 p-8 gap-8">
      <article className="w-full lg:w-2/3">
        <Carousel />
      </article>
      <h2 className="text-2xl">История предприятия:</h2>
      <article className="w-full lg:w-2/3 bg-emerald-50 p-8 rounded-lg text-lg lg:text-xl">
        <ul className="flex flex-col gap-8">
          <li className="flex flex-col gap-2">
            <span className="font-bold">02.10.1989 года</span>
            <p>
              В структуре МНПК &laquo;Экомир&raquo; и его головного предприятия
              Центр &laquo;Звездный мир&raquo; создано предприятие
              &laquo;Атмосфера&raquo;.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="font-bold">11.07.1990 года</span>
            <p>
              Зарегистрирован Устав и открыт расчетный счет предприятия
              &laquo;Атмосфера&raquo;.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="font-bold">24.06.1996 года</span>
            <p>
              Химическая лаборатория, входящая в состав предприятия
              &laquo;Атмосфера&raquo;, аккредитована органами Белстандарта на
              независимость и техническую компетентность.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="font-bold">31.07.2000 года</span>
            <p>
              Предприятие &laquo;Атмосфера&raquo; реорганизовано в
              Научно-техническое общество с дополнительной ответственностью
              &laquo;Атмосфера&raquo; (ОДО &laquo;Атмосфера&raquo;).
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="font-bold">2000 г. - по настоящее время</span>
            <p>
              За годы работы на рынке услуг в области охраны окружающей среды и
              охраны труда Заказчиками ОДО &laquo;Атмосфера&laquo; неоднократно
              являлись и являются в настоящее время такие крупные предприятия
              как ОАО &laquo;БМЗ&raquo; – управляющая компания холдинга
              &laquo;БМК&raquo;, ОАО &laquo;Светлогорский ЦКК&raquo;, ОАО
              &laquo;Гомсельмаш&raquo; и его структурные подразделения, ОАО
              &laquo;Гомельстекло&raquo;, РПУП &laquo;Гомельоблгаз&raquo;, РУП
              &laquo;Гомельэнерго&raquo; и многие другие.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Info;
