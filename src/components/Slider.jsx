import { shortList, longList, list } from "../data.js";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Slider = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const nextPerson = () => {
    setCurrentPerson((prevIndex) => (prevIndex + 1) % list.length);
  };

  const prevPerson = () => {
    setCurrentPerson(
      (prevIndex) => (prevIndex - 1 + list.length) % list.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextPerson, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-200 h-112 relative overflow-hidden">
      {people.map((person, index) => {
        const { image, name, title, quote } = person;
        return (
          <div
            className={`flex flex-col justify-center items-center h-full w-full text-center absolute transition-transform duration-300 `}
            style={{
              transform: `translateX(${(index - currentPerson) * 100}%)`,
            }}
          >
            <img
              src={image}
              alt={name}
              className="size-36 border-3 border-violet-400 object-cover rounded-full mb-6"
            />
            <h1 className="uppercase text-violet-500 font-bold mb-2">{name}</h1>
            <h2 className="capitalize mb-6">{title}</h2>
            <p className="mb-6 text-gray-700">{quote}</p>
            <Quote size={42} className="fill-violet-500 text-violet-500 " />
          </div>
        );
      })}
      <div className="absolute top-1/2 left-0 size-9 text-white rounded-md bg-gray-400  grid place-items-center">
        <ChevronLeft size={32} className="" onClick={prevPerson} />
      </div>
      <div className="absolute top-1/2 right-0 size-9 text-white rounded-md bg-gray-400  grid place-items-center">
        <ChevronRight size={32} className="" onClick={nextPerson} />
      </div>
    </div>
  );
};

export default Slider;
