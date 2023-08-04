import Specials from "@/components/Specials";
import Cta from "@/components/Cta";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Specials />
      <Clients />
      <Cta />
    </main>
  );
};

export default Home;
