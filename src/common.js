import getRandomInteger from './helpers';

const getRandomCoords = (coordsX, coordsY) => {
  const coordX = coordsX[getRandomInteger(0, 7)];
  const coordY = coordsY[getRandomInteger(0, 7)];
  return `${coordX}${coordY}`;
};

export default getRandomCoords;
