import Link from "next/link";
import Specials from "@/components/Specials";
import Cta from "@/components/Cta";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <main className="min-h-screen w-full flex flex-col gap-8 items-center justify-center text-sky-800 bg-[url('../public/hero.jpg')] bg-cover bg-center">
        <h1 className="text-5xl lg:text-7xl uppercase font-bold">
          ОДО &laquo;Атмосфера&raquo;
        </h1>
        <span className="text-xl lg:text-2xl">
          Широкий спектр экологических услуг
        </span>
        <Link href="/service">
          <button className="inline-block px-4 py-2 bg-sky-600 text-white hover:bg-sky-800 rounded-lg">
            Смотреть
          </button>
        </Link>
      </main>
      <Specials />
      <Cta />
    </div>
  );
};

export default Home;
