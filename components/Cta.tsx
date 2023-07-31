const Cta = () => {
  return (
    <section className="w-full flex justify-center p-8 text-emerald-50 bg-emerald-100">
      <form className="w-full lg:w-2/3 p-8 flex flex-col items-start gap-2 rounded-lg text-lg bg-emerald-800">
        <h2 className="text-3xl font-bold">Свяжитесь с нами сейчас!</h2>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Ваше имя:</label>
          <input
            type="text"
            id="name"
            className="opacity-70 text-emerald-800"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="organiation">Организация:</label>
          <input
            type="text"
            id="organiation"
            className="opacity-70 text-emerald-800"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="phone">Телефон:</label>
          <input
            type="text"
            id="phone"
            className="opacity-70 text-emerald-800"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            className="opacity-70 text-emerald-800"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message">Cообщение:</label>
          <textarea
            name="message"
            id="message"
            rows={3}
            className="opacity-70 text-emerald-800"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-block px-4 py-2 scroll-py-28 bg-sky-600 hover:bg-sky-800 text-white rounded-lg self-center"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};
export default Cta;
