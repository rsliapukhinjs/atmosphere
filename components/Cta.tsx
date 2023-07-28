import { FaEnvelope, FaPhoneSquare, FaArrowCircleUp } from "react-icons/fa";

const Cta = () => {
  return (
    <section className="w-full flex items-center p-8 text-sky-50">
      <form className="flex-1 p-8 flex flex-col items-start gap-2 rounded-lg text-lg bg-emerald-800">
        <h2 className="text-3xl font-bold">Свяжитесь с нами сейчас!</h2>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Ваше имя:</label>
          <input type="text" id="name" className="opacity-70" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="organiation">Организация:</label>
          <input type="text" id="organiation" className="opacity-70" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="phone">Телефон:</label>
          <input type="text" id="phone" className="opacity-70" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" className="opacity-70" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message">Cообщение:</label>
          <textarea
            name="message"
            id="message"
            rows={3}
            className="opacity-70"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-block px-4 py-2 scroll-py-28 bg-sky-600 hover:bg-sky-800 text-white rounded-lg self-center"
        >
          Отправить
        </button>
      </form>
      <div className="flex-1 flex flex-col gap-8  items-center  justify-center text-xl lowercase">
        <div className="flex items-center gap-4 cursor-pointer">
          <FaEnvelope className="inline" size="30" />
          <span className="hidden sm:inline">atmosfera_gomel@mail.ru</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <FaPhoneSquare className="inline" size="30" />
          <span className="hidden sm:inline">+375-(44)-702-30-93</span>
        </div>
      </div>
    </section>
  );
};
export default Cta;
