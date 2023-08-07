import Link from "next/link";

import { FaEnvelope, FaPhoneSquare, FaPrint } from "react-icons/fa";

const CtaContacts = () => {
  return (
    <div className="flex xl:flex-col items-center justify-around xl:justify-center gap-8 text-2xl p-8 px-12 text-emerald-800 rounded-lg bg-emerald-100">
      <h2 className="hidden xl:inline text-2xl font-bold uppercase">
        Контакты:
      </h2>
      <Link href="tel:80232651471">
        <div className="flex items-center gap-4 cursor-pointer">
          <FaPhoneSquare className="inline" size="50" />
          <span className="hidden xl:inline">8-(0232) 56-14-71,</span>
          <span className="hidden xl:inline">56-14-78</span>
        </div>
      </Link>
      <Link href="tel:80232561475">
        <div className="flex items-center gap-4 cursor-pointer">
          <FaPrint className="inline" size="50" />
          <span className="hidden xl:inline">8-(0232) 56-14-75 (тел/факс)</span>
        </div>
      </Link>
      <Link href="mailto:atmosfera_gomel@mail.ru">
        <div className="flex items-center gap-4 cursor-pointer">
          <FaEnvelope className="inline" size="50" />
          <span className="hidden xl:inline lowercase">
            atmosfera_gomel@mail.ru
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CtaContacts;
