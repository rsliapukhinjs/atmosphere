import Link from "next/link";

import { FaEnvelope, FaPhoneSquare, FaPrint } from "react-icons/fa";

const CtaContacts = () => {
  return (
    <div className="w-full flex items-center justify-around gap-8 text-xl p-8 px-12 text-emerald-800 rounded-lg bg-slate-50">
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
