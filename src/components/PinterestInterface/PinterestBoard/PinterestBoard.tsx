import React, { useState, useRef, useEffect } from "react";
import style from "./PinterestBoard.module.scss";
import { PinterestCard } from "components/PinterestInterface";

const PinterestBoard = () => {
  const cardCreator = useRef(null);
  const [isCreatorvisible, setIsCreatorVisible] = useState(false);
  const [imgAmmount, setImgAmmount] = useState<number[]>([235, 236, 237]);

  const handleCreator = () => {
    if (isCreatorvisible) {
      let aux = [...imgAmmount];
      for (let i = 0; i < 20; i++) {
        aux.push(aux[aux.length - 1] + 1);
      }
      setImgAmmount(aux);
    } else {
      return;
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsCreatorVisible(entry.isIntersecting);
    });
    observer.observe(cardCreator.current!);
  }, []);

  useEffect(() => {
    handleCreator();
  }, [isCreatorvisible]);

  const testArray: number[] = [2, 5, 6, 7];
  return (
    <main className={style.main}>
      {imgAmmount.map((item, index) => {
        return <PinterestCard key={index} size={item} />;
      })}
      <div ref={cardCreator}></div>
    </main>
  );
};

export { PinterestBoard };
