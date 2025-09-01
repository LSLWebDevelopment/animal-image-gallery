type ButtonProps = {
  text: string;
  onClick: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
  const onButtonClicked = () => {
    onClick();
  };

  return (
    <button
      className="cursor-pointer border-3 border-amber-800 px-12 py-5 rounded-xl m-5 font-semibold text-2xl hover:bg-amber-200 bg-amber-400"
      onClick={onButtonClicked}
    >
      {text}
    </button>
  );
}
