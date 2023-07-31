import Link from "next/link";
import Specials from "@/components/Specials";
import Cta from "@/components/Cta";
import ButtonU from "@/utils/ButtonU";
import Clients from "@/components/Clients";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <main className="min-h-screen pb-24 w-full flex flex-col gap-8 items-center justify-center text-sky-800 bg-[url('../public/hero.jpg')] bg-cover bg-center">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl uppercase font-bold">
          ОДО &laquo;Атмосфера&raquo;
        </h1>
        <span className="text-lg sm:text-2xl lg:text-4xl">
          Широкий спектр экологических услуг
        </span>
        <Link href="/services">
          <ButtonU text="Смотреть" />
        </Link>
      </main>
      <Specials />
      <Clients />
      <Cta />
    </div>
  );
};

export default Home;
