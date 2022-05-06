const getStartButtonText = isGameStarted => isGameStarted ? 'Restart' : 'Start';

const startGameHandler = (coordsX, coordsY, startGame, startTimer, setCaseCoords, showCaseCoords, getRandomCoords) => {
  startGame();
  window.startTimerTimeoutId = setTimeout(() => {
    startTimer();
  }, 3000);
  setCaseCoords(getRandomCoords(coordsX, coordsY));
  showCaseCoords();
};

const finishGameHandler = (finishGame, stopTimer, resetScore) => {
  clearTimeout(window.startTimerTimeoutId);
  finishGame();
  stopTimer();
  resetScore();
};

export { getStartButtonText, startGameHandler, finishGameHandler };
