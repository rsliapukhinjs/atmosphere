import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section className="flex flex-col items-center p-8 gap-8 text-sky-800">
      <h1 className="text-2xl">Мы поможем Вам:</h1>
      <ul className="w-full lg:w-2/3 flex flex-col items-start gap-4 text-sm lg:text-lg">
        <li className="w-full flex items-start gap-8">
          <div>
            <FaCheck />
          </div>
          <p className="flex-1">
            Подготовить всю необходимую документацию и номенклатуру по всем
            нормам и правилам законодательства на день обращения
          </p>
        </li>
        <li className="w-full flex items-start gap-8">
          <div>
            <FaCheck />
          </div>
          <p className="flex-1">
            Пройти все проверки государственных органов без проблем
          </p>
        </li>
        <li className="w-full flex items-start gap-8">
          <div>
            <FaCheck />
          </div>
          <p className="flex-1">
            Предупредить и избежать ситуаций, за которые на вас могут быть
            возложены штрафы, предупредительные и иные меры
          </p>
        </li>
        <li className="w-full flex items-start gap-8">
          <div>
            <FaCheck />
          </div>
          <p className="flex-1">
            Снизить бюджет, выделенный на поиск нарушений правил безопасности
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Services;
