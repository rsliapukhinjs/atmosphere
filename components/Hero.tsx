import Link from "next/link";
import ButtonU from "@/utils/ButtonU";

const Hero = () => {
  return (
    <section className="min-h-screen pb-24 w-full flex flex-col gap-8 items-center justify-center text-sky-800 bg-[url('../public/hero.jpg')] bg-cover bg-center">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl uppercase font-bold">
        ОДО &laquo;Атмосфера&raquo;
      </h1>
      <span className="text-lg sm:text-2xl lg:text-4xl">
        Широкий спектр экологических услуг
      </span>
      <Link href="/services">
        <ButtonU text="Смотреть" />
      </Link>
    </section>
  );
};

export default Hero;
