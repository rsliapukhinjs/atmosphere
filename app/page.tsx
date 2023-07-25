import { Button } from "@mui/material";
import hero from "../public/hero.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col gap-8 items-center justify-center text-sky-700"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <h1 className="text-5xl lg:text-7xl uppercase font-bold">
        ОДО &laquo;Атмосфера&raquo;
      </h1>
      <span className="text-xl lg:text-2xl">
        Широкий спектр экологических услуг
      </span>
      <Button variant="outlined" className="text-inherit">
        Смотреть
      </Button>
    </div>
  );
};

export default Home;
