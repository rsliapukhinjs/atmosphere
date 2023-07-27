const Cta = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8 p-8 text-sky-800 bg-sky-50">
      <h2 className="text-3xl upperacse font-bold">Свяжитесь с нами!</h2>
      <form className="w-3/4 p-8 flex flex-col items-start gap-4 rounded-lg">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Ваше имя:</label>
          <input type="text" id="name" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="organiation">Организация:</label>
          <input type="text" id="organiation" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="phone">Телефон:</label>
          <input type="text" id="phone" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message">Cообщение:</label>
          <textarea name="message" id="message" rows={5}></textarea>
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
