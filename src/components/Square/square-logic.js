import getRandomCoords from '../../common';

const ODD_LETTER_SQUARES = ['a', 'c', 'e', 'g'];

const getSquareColorClassName = (coordX, coordY) => {
  return (ODD_LETTER_SQUARES.includes(coordX) && coordY % 2 !== 0) || (!ODD_LETTER_SQUARES.includes(coordX) && coordY % 2 === 0 ) ? 'square_dark' : 'square_light';
};

const getBoardCoords = (side, coords) => {
  if (
    (side === 'white' && coords.includes('a') && coords !== 'a1') ||
    (side === 'black' && coords.includes('h') && coords !== 'h8')
  ) {
    return <span className="square__text square__text_top-left">{coords[1]}</span>;
  }

  if (
    (side === 'white' && coords.includes(1) && coords !== 'a1') ||
    (side === 'black' && coords.includes(8) && coords !== 'h8')
  ) {
    return <span className="square__text square__text_bottom-right">{coords[0]}</span>;
  }

  if (side === 'white' && coords === 'a1') {
    return (
      <>
        <span className="square__text square__text_bottom-right">a</span>
        <span className="square__text square__text_top-left">1</span>
      </>
    );
  }

  if (side === 'black' && coords === 'h8') {
    return (
      <>
        <span className="square__text square__text_bottom-right">h</span>
        <span className="square__text square__text_top-left">8</span>
      </>
    );
  }
};

const squareClickHandler = (caseCoords, increaseScore, answerSquare, answerCoords) => {
  if (caseCoords === answerCoords) {
    answerSquare.classList.add('square_green');
    increaseScore();
  } else {
    answerSquare.classList.add('square_red');
  }

  setTimeout(() => {
    answerSquare.classList.contains('square_green') ? answerSquare.classList.remove('square_green') : answerSquare.classList.remove('square_red');
  }, 100);
};

const answerHandler = (event, coordsX, coordsY, caseCoords, setCaseCoords, showCaseCoords, increaseScore) => {
  squareClickHandler(caseCoords, increaseScore, event.target, event.target.id);
  setCaseCoords(getRandomCoords(coordsX, coordsY));
  showCaseCoords();
  clearTimeout(window.hideCaseCoordsTimeoutId)
};

export { getSquareColorClassName, getBoardCoords, answerHandler };
