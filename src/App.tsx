import { Button } from "./components/Button";
import { AnimalList } from "./components/AnimalList";
import { useState } from "react";

export function App() {
  const [animals, setAnimals] = useState<number[]>([]);

  const handleClick = () => {
    const index = Math.floor(Math.random() * 6);
    setAnimals((prev: number[]) => {
      return [...prev, index];
    });
  };

  return (
    <div>
      <Button text="Add Animal" onClick={handleClick} />
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;
