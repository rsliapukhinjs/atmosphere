import Image from "next/image";
import director from "../../public/faces/director.jpg";
import engineer from "../../public/faces/engineer.jpg";
import accountant from "../../public/faces/accountant.jpg";

const Contacts = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-8">
      <h2 className="text-2xl">Контактные лица:</h2>
      <article className="grid grid-cols-1 lg:grid-cols-3">
        <div></div>
      </article>
    </section>
  );
};

export default Contacts;
