import Link from "next/link";

type Props = {
  link: string;
  text: string;
};

const ServiceMenuBox = ({ link, text }: Props) => {
  return (
    <Link href={link}>
      <article className="flex flex-col items-center gap-4 border-2 rounded-lg p-4 hover:bg-emerald-800 hover:text-white cursor-pointer ">
        <h2>{text}</h2>
      </article>
    </Link>
  );
};

export default ServiceMenuBox;
