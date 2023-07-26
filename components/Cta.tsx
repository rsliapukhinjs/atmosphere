const Cta = () => {
  return (
    <section>
      <form>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Ваше полное имя:</label>
          <input type="text" id="name" />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="organiation">
            Организация, которую представляете:
          </label>
          <input type="text" id="organiation" />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="services">Какой вид работ вас интересует:</label>
          <select name="servies" id="services">
            <option value=""></option>
            <option value="inv">Инвентаризация и нормативы</option>
            <option value="control">Контрольные замеры замеры</option>
            <option value="vent">Вентиляция и ГОУ</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="phone">Контактный телефон:</label>
          <input type="text" id="phone" />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="message">Напишите нам сообщение:</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};
export default Cta;
