import { getRandomBetweenTwoNumbers } from "./getRandomBetweenTwoNumbers";

const getRandomSquareImg = async (size: number) => {
  const url = `http://picsum.photos/id/${getRandomBetweenTwoNumbers(
    1,
    500
  )}/${size}`;
  await fetch(url).then((res) => {
    if (res.status === 200) {
      return res.body;
    } else {
      getRandomSquareImg(size);
    }
  });
  return;
};

export { getRandomSquareImg };
