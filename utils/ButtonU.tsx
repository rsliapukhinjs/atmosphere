type Props = {
  text: string;
};

const ButtonU = ({ text }: Props) => {
  return (
    <button className="flex items-center gap-4 px-4 py-2 bg-sky-600 text-white hover:bg-sky-800 rounded-lg">
      {text}
    </button>
  );
};

export default ButtonU;
