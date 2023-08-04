import MapUI from "@/components/MapUI";
import Team from "@/components/Team";

const Contacts = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-8 text-sky-800">
      <h2 className="text-2xl">Вам помогут:</h2>
      <Team />
      <h2 className="text-2xl">Наш адрес:</h2>
      <p className="text-lg lg:text-3xl font-bold">
        г. Гомель, ул. Б. Хмельницкого, 79, 3-й этаж
      </p>
      <MapUI />
    </section>
  );
};

export default Contacts;
