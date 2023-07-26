import { Button } from "@mui/material";
import Specials from "@/components/Specials";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <main className="min-h-screen w-full flex flex-col gap-8 items-center justify-center text-sky-700 bg-red-100">
        <h1 className="text-5xl lg:text-7xl uppercase font-bold">
          ОДО &laquo;Атмосфера&raquo;
        </h1>
        <span className="text-xl lg:text-2xl">
          Широкий спектр экологических услуг
        </span>
        <button className="inline-block px-4 py-2 bg-sky-600 text-white hover:bg-sky-800 rounded-lg">
          Смотреть
        </button>
      </main>
      <Specials />
    </div>
  );
};

export default Home;
