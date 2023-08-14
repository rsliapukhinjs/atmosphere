import ServicesForm from "@/components/ServicesForm";
import ServicesList from "@/components/ServicesList";

const Service = () => {
  return (
    <section className="min-h-screen flex flex-col items-center p-16 gap-8 text-sky-800 bg-gradient-to-b from-white to-emerald-100">
      <h2 className="text-2xl">Наши услуги:</h2>
      <ServicesList />
      <ServicesForm />
    </section>
  );
};

export default Service;
