import Carousel from "@/components/Carousel";
import HistoryText from "@/components/HistoryText";

const Info = () => {
  return (
    <section className="flex flex-col items-center text-sky-800 p-8 gap-8 v">
      <article className="w-full lg:w-2/3 hidden sm:flex flex-col items-center">
        <Carousel />
      </article>
      <h1 className="text-2xl">История предприятия:</h1>
      <HistoryText />
    </section>
  );
};

export default Info;
