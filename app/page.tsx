import Link from "next/link";
import Specials from "@/components/Specials";
import Cta from "@/components/Cta";
import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <main className="min-h-screen pb-32 w-full flex flex-col gap-8 items-center justify-center text-sky-800 bg-[url('../public/hero.jpg')] bg-cover bg-center">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl uppercase font-bold">
          ОДО &laquo;Атмосфера&raquo;
        </h1>
        <span className="text-lg sm:text-2xl lg:text-4xl">
          Широкий спектр экологических услуг
        </span>
        <Link href="#specials">
          <button className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white hover:bg-sky-800 rounded-lg">
            Смотреть <FaArrowCircleDown className="inline text-xl" />
          </button>
        </Link>
      </main>
      <Specials />
      <Cta />
    </div>
  );
};

export default Home;
