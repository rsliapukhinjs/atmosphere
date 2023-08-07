import Image from "next/image";

import bmz from "../public/clients/bmz.png";
import osobino from "../public/clients/osobino.png";
import progress from "../public/clients/progress.jpg";
import rechicadrev from "../public/clients/rechicadrev.png";
import selmash from "../public/clients/selmash.png";
import gaz from "../public/clients/gaz.png";
import druzhba from "../public/clients/druzhba.png";
import sol from "../public/clients/sol.png";
import alkopack from "../public/clients/alkopack.png";

const Clients = () => {
  return (
    <section className="hidden md:flex flex-col items-center gap-8 p-8 text-sky-800 bg-sky-50">
      <h2 className="text-2xl">Наши клиенты:</h2>
      <article className="w-full lg:w-2/3 grid grid-cols-3 gap-4">
        <div className="flex items-center justify-center p-4">
          <Image
            src={selmash}
            alt="selmash"
            className="grayscale hover:filter-none w-full"
          />
        </div>
        <div className="flex items-center justify-center p-4">
          <Image
            src={bmz}
            alt="bmz"
            className="grayscale hover:filter-none w-full"
          />
        </div>

        <div className="flex items-center justify-center p-4">
          <Image
            src={rechicadrev}
            alt="rechicadrev"
            className="grayscale hover:filter-none w-full"
          />
        </div>
        <div className="flex items-center justify-center p-4">
          <Image
            src={gaz}
            alt="gaz"
            className="grayscale hover:filter-none w-full"
          />
        </div>
        <div className="flex items-center justify-center p-4">
          <Image
            src={alkopack}
            alt="alkopack"
            className="grayscale hover:filter-none w-full"
          />
        </div>
        <div className="flex items-center justify-center p-4">
          <Image
            src={sol}
            alt="sol"
            className="grayscale hover:filter-none w-full"
          />
        </div>

        <div className="flex items-center justify-center p-4">
          <Image
            src={druzhba}
            alt="druzhba"
            className="grayscale hover:filter-none w-full"
          />
        </div>

        <div className="flex items-center justify-center p-4">
          <Image
            src={osobino}
            alt="osobino"
            className="grayscale hover:filter-none w-full"
          />
        </div>
        <div className="flex items-center justify-center p-4">
          <Image
            src={progress}
            alt="progress"
            className="grayscale hover:filter-none w-full"
          />
        </div>
      </article>
    </section>
  );
};

export default Clients;
