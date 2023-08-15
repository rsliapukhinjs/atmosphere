import Specials from "@/components/Specials";
import Cta from "@/components/Cta";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import HeroServices from "@/components/HeroServices";

const Home = () => {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-white to-emerald-100">
      <Hero />
      <HeroServices />
      <Specials />
      <Clients />
      <Cta />
    </main>
  );
};

export default Home;
