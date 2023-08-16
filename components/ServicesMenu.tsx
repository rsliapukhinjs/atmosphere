import ServiceMenuBox from "@/utils/ServiceMenuBox";

const boxes = [
  {
    link: "/services/inv",
    text: "Инвентаризация выбросов загрязняющих веществ",
  },
  {
    link: "/services/norm",
    text: "Разработка проектов нормативов допустимых выбросов",
  },
  {
    link: "/services/vent",
    text: "Паспортизация и аэродинамические испытания вентистем",
  },
  {
    link: "/services/gou",
    text: "Разработка паспортов и проверка эффективности ГОУ",
  },
  {
    link: "/services/oos",
    text: "Разработка разделов ООС в составе проектной документации",
  },
  {
    link: "/services/pass",
    text: "Составление экологических паспортов предприятий",
  },
  {
    link: "/services/szz",
    text: "Разработка проектов санитарно-защитных зон предприятий",
  },
  {
    link: "/services/oth",
    text: "Разработка инструкций по обращению с отходами",
  },
  {
    link: "/services/control",
    text: "Контрольные замеры и локальный мониторинг",
  },
];

const ServicesMenu = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-8 text-sm lg:text-lg text-center ">
      {boxes.map((box) => (
        <ServiceMenuBox link={box.link} text={box.text} key={box.link} />
      ))}
      {/* <Link href="/services">
        <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer ">
          <h2>Инвентаризация и нормативы</h2>
        </article>
      </Link>
      <Link href="/services">
        <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
          <h2>Вентиляция и ГОУ</h2>
        </article>
      </Link>
      <Link href="/services">
        <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
          <h2>Проектная документация</h2>
        </article>
      </Link>
      <Link href="/services">
        <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
          <h2>Расчет СЗЗ, шума, НМУ</h2>
        </article>
      </Link>
      <Link href="/services">
        <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
          <h2>Обращение с отходами</h2>
        </article>
      </Link>
      <Link href="/services">
        <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer">
          <h2>Контрольные замеры</h2>
        </article>
      </Link> */}
    </section>
  );
};

export default ServicesMenu;
