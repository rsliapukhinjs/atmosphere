import CtaContacts from "./CtaContacts";
import CtaForm from "./CtaForm";

const Cta = () => {
  return (
    <section className="w-full flex flex-col items-center p-8">
      <h2 className="text-2xl text-sky-800">Свяжитесь с нами сейчас!</h2>
      <article className="w-full flex flex-col items-center p-8">
        <CtaForm />
      </article>
      <article className="w-full">
        <CtaContacts />
      </article>
    </section>
  );
};
export default Cta;
