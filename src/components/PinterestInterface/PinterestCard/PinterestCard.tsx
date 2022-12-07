import React, { useState, useEffect } from "react";
import style from "./PinterestCard.module.scss";
import { getRandomBetweenTwoNumbers } from "utils/getRandomBetweenTwoNumbers";
import { RiUpload2Line } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";

interface ImgSize {
  size: number;
}

const PinterestCard = ({ size }: ImgSize) => {
  const [rowSize, setRowSize] = useState(3);
  const [isOver, setIsOver] = useState(false);

  const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
    setIsOver(true);
  };
  const handleMouseOut = (event: React.MouseEvent<HTMLElement>) => {
    setIsOver(false);
  };

  useEffect(() => {
    const randomRow = getRandomBetweenTwoNumbers(6, 12);
    setRowSize(randomRow);
  }, []);

  return (
    <article
      style={{ gridRow: `span ${rowSize}` }}
      className={style.cardContainer}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={`http://picsum.photos/${size}`} alt="" />
      <button type="button" className={isOver ? style.saveButton : "inactive"}>
        Guardar
      </button>
      <div className={isOver ? style.butContainer : "inactive"}>
        <button type="button">
          <HiDotsHorizontal />
        </button>
        <button type="button">
          <RiUpload2Line />
        </button>
      </div>
    </article>
  );
};

export { PinterestCard };
