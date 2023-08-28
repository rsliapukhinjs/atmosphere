import Image from "next/image";
import att from "../../public/docs/att.jpg";
import cert from "../../public/docs/cert.jpg";

const Docs = () => {
  return (
    <section className="flex flex-col  xl:flex-row items-center justify-center gap-8 min-h-screen p-8 text-sky-800 bg-gradient-to-b from-white to-sky-100">
      <article className="flex flex-col items-center gap-8">
        <h2 className="text-2xl">Аттестат аккредитации</h2>
        <Image src={att.src} alt="attestate" height={900} width={450} />
      </article>
      <article className="flex flex-col items-center gap-8">
        <h2 className="text-2xl">Сертификат соответствия</h2>
        <Image src={cert.src} alt="certificate" height={900} width={450} />
      </article>
    </section>
  );
};

export default Docs;
