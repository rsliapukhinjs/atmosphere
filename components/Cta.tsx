import CtaContacts from "./CtaContacts";
import CtaForm from "./CtaForm";

const Cta = () => {
  return (
    <section className="w-full flex flex-col items-center p-8">
      <h2 className="text-2xl text-sky-800">Свяжитесь с нами!</h2>
      <article className="w-full lg:w-4/5 flex flex-col xl:grid xl:grid-cols-2 gap-8 p-8">
        <CtaForm />
        <CtaContacts />
      </article>
    </section>
  );
};
export default Cta;
