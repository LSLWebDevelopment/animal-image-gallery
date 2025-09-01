import bird from "../assets/images/bird.svg";
import cat from "../assets/images/cat.svg";
import cow from "../assets/images/cow.svg";
import dog from "../assets/images/dog.svg";
import gator from "../assets/images/gator.svg";
import horse from "../assets/images/horse.svg";
import { AnimalShow } from "./AnimalShow";

type AnimalListProps = {
  animals: number[];
};

const images = [bird, cat, cow, dog, gator, horse];

export function AnimalList({ animals }: AnimalListProps) {
  const animalsRendered = animals.map((animal: number, index: number) => {
    return (
      <div key={index}>
        <AnimalShow image={images[animal]} />
      </div>
    );
  });

  return <div className="flex flex-wrap gap-20 pl-10">{animalsRendered}</div>;
}
