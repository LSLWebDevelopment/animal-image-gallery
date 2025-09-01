import { useState } from "react";
import heart from "../assets/images/heart.svg";

type AnimalShowProps = {
  image: string;
};

export function AnimalShow({ image }: AnimalShowProps) {
  const [size, setSize] = useState(20);

  const handleClick = () => {
    setSize(size + 5);
  };

  return (
    <figure
      className="
      flex
      justify-center 
      items-center 
      relative 
      cursor-pointer 
      bg-amber-100 
      w-50 
      h-50 
      shadow-gray-400 
      shadow-2xl 
      rounded-2xl 
      select-none"
      onClick={handleClick}
    >
      <img src={`${image}`} width="150" />
      {size > 20 && (
        <img
          src={heart}
          alt="heart"
          width={size}
          className="absolute right-0 bottom-0 inline-block"
        />
      )}
    </figure>
  );
}
