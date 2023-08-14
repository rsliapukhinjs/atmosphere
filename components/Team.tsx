import Image from "next/image";
import director from "../public/faces/director.jpg";
import engineer from "../public/faces/engineer.jpg";
import accountant from "../public/faces/accountant.jpg";

import Link from "next/link";

const Team = () => {
  return (
    <article className="w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="flex flex-col items-center gap-4 border-2 p-4 bg-slate-50">
        <Image src={director} alt="director" height={400} />
        <h3 className="font-bold">Директор</h3>
        <p className="text-lg text-center">Юрий Валерианович Кузьменко</p>
        <Link href="tel:80232651478">
          <p className="px-4 py-2 bg-emerald-600 text-white rounded-lg">
            8-(0232)-56-14-78
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4 border-2 p-4 bg-slate-50">
        <Image src={engineer} alt="engineer" height={400} />
        <h3 className="font-bold">Главный инженер</h3>
        <p className="text-lg text-center">Сергей Сергеевич Лушков</p>
        <Link href="tel:80232651478">
          <p className="px-4 py-2 bg-emerald-600 text-white rounded-lg">
            8-(0232)-56-14-71
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4 border-2 p-4 bg-slate-50">
        <Image src={accountant} alt="accountant" height={400} />
        <h3 className="font-bold">Главный бухгалтер</h3>
        <p className="text-lg text-center">Ольга Ивановна Кузьменко</p>
        <Link href="tel:80232651478">
          <p className="px-4 py-2 bg-emerald-600 text-white rounded-lg">
            8-(0232)-56-14-77
          </p>
        </Link>
      </div>
    </article>
  );
};

export default Team;
