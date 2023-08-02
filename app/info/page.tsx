import Carousel from "@/components/Carousel";

const Info = () => {
  return (
    <section className="flex flex-col items-center bg-red-100 p-8 gap-8">
      <article className="w-1/2">
        <Carousel />
      </article>
      <h2>Наша история</h2>
      <article>
        <ul>
          <li>
            <span>02.10.1989 года</span>
            <p>
              В структуре МНПК &laquo;Экомир&raquo; и его головного предприятия
              Центр &laquo;Звездный мир&raquo; создано предприятие
              &laquo;Атмосфера&raquo;.
            </p>
          </li>
          <li>
            <span>11.07.1990 года</span>
            <p>
              Зарегистрирован Устав и открыт расчетный счет предприятия
              &laquo;Атмосфера&raquo;.
            </p>
          </li>
          <li>
            <span>24.06.1996 года</span>
            <p>
              Химическая лаборатория, входящая в состав предприятия
              &laquo;Атмосфера&raquo;, аккредитована органами Белстандарта на
              независимость и техническую компетентность.
            </p>
          </li>
          <li>
            <span>31.07.2000 года</span>
            <p>
              Предприятие &laquo;Атмосфера&raquo; реорганизовано в
              Научно-техническое общество с дополнительной ответственностью
              &laquo;Атмосфера&raquo; (ОДО &laquo;Атмосфера&raquo;).
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Info;
