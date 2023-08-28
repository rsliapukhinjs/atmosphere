import MapUI from "@/components/MapUI";
import Team from "@/components/Team";

const Contacts = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-8 text-sky-800 bg-gradient-to-b from-white to-sky-100">
      <h2 className="text-2xl">Вам помогут:</h2>
      <Team />
      <article className="w-full border-2 bg-red-100 flex flex-col items-center justify-center gap-4 p-8 text-sm lg:text-lg">
        <h2 className="text-2xl">Банковские реквизиты:</h2>
        <p className="text-center">
          В дирекции ОАО &laquo;Белинвестбанк&raquo; по Гомельской области
        </p>
        <div className="flex flex-col gap-2 items-center">
          <p>
            код: <strong>BLBBBY2X</strong>
          </p>
          <p>
            р/с: <strong>BY25BLBB30120400053762001001</strong>
          </p>
          <p>
            УНП: <strong>400073762</strong>
          </p>
        </div>
      </article>
      <h1 className="text-2xl">Наш адрес:</h1>
      <p className="text-lg lg:text-3xl font-bold">
        г. Гомель, ул. Б. Хмельницкого, 79, 3-й этаж
      </p>
      <MapUI />
    </section>
  );
};

export default Contacts;
