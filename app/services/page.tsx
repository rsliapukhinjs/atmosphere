import ServicesList from "@/components/ServicesList";

const Service = () => {
  return (
    <section className="min-h-screen flex flex-col items-center p-16 gap-8 text-sky-800 bg-gradient-to-b from-white to-emerald-100">
      <h2 className="text-2xl md:text-5xl">Перечень услуг</h2>
      <ServicesList />
    </section>
  );
};

export default Service;
