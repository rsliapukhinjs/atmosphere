import Specials from "@/components/Specials";
import Cta from "@/components/Cta";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-white to-emerald-100">
      <Hero />
      <Specials />
      <Clients />
      <Cta />
    </main>
  );
};

export default Home;
