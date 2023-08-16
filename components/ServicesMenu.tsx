import ServiceMenuBox from "@/utils/ServiceMenuBox";

const boxes = [
  {
    link: "/services/inventar",
    text: "Инвентаризация выбросов загрязняющих веществ",
  },
  {
    link: "/services/normativy",
    text: "Разработка проектов нормативов допустимых выбросов",
  },
  {
    link: "/services/ventilacya",
    text: "Паспортизация и аэродинамические испытания вентистем",
  },
  {
    link: "/services/gou",
    text: "Разработка паспортов и проверка эффективности ГОУ",
  },
  {
    link: "/services/project",
    text: "Разработка разделов ООС в составе проектной документации",
  },
  {
    link: "/services/passport",
    text: "Составление экологических паспортов предприятий",
  },
  {
    link: "/services/szz",
    text: "Разработка проектов санитарно-защитных зон предприятий",
  },
  {
    link: "/services/othody",
    text: "Разработка инструкций по обращению с отходами",
  },
  {
    link: "/services/control",
    text: "Контрольные замеры и локальный мониторинг",
  },
];

const ServicesMenu = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm lg:text-lg text-center ">
      {boxes.map((box) => (
        <ServiceMenuBox link={box.link} text={box.text} key={box.link} />
      ))}
    </section>
  );
};

export default ServicesMenu;
