import ButtonU from "@/utils/ButtonU";

import {
  FaEnvelope,
  FaPhoneSquare,
  FaLocationArrow,
  FaPrint,
} from "react-icons/fa";

const Cta = () => {
  return (
    <section className="w-full flex flex-col lg:grid lg:grid-cols-[3fr,2fr] gap-8 p-8  ">
      <form className=" p-8 flex flex-col items-start gap-4 rounded-lg text-sm lg:text-md border-2 text-sky-50 bg-sky-800">
        <h2 className="text-2xl">Свяжитесь с нами!</h2>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Ваше имя:</label>
          <input type="text" id="name" className="opacity-70 text-sky-800" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="phone">Телефон:</label>
          <input type="text" id="phone" className="opacity-70 text-sky-800" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" className="opacity-70 text-sky-800" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message">Cообщение:</label>
          <textarea
            name="message"
            id="message"
            className="opacity-70 text-sky-800"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-block px-4 py-2 mt-2 scroll-py-28 bg-sky-600 hover:bg-sky-800 text-white rounded-lg self-center"
        >
          Связаться
        </button>
      </form>
      <div className="flex md:flex-col justify-around md:justify-center gap-8 text-xl p-8 text-emerald-800 rounded-lg bg-emerald-50">
        <h2 className="text-2xl hidden md:inline">Наши контакты:</h2>
        <div className="flex items-center gap-4 cursor-pointer">
          <FaLocationArrow className="inline" size="30" />
          <span className="hidden md:inline">
            г. Гомель, ул. Б. Хмельницкого, д.79, 3-й этаж
          </span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <FaPhoneSquare className="inline" size="30" />
          <span className="hidden md:inline">8-(0232) 56-14-71, 56-14-78</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <FaPrint className="inline" size="30" />
          <span className="hidden md:inline">8-(0232) 56-14-75 (тел/факс)</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <FaEnvelope className="inline" size="30" />
          <span className="hidden md:inline lowercase">
            atmosfera_gomel@mail.ru
          </span>
        </div>
      </div>
    </section>
  );
};
export default Cta;
