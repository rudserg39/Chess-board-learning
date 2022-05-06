import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {
  startGame,
  finishGame,
  startTimer,
  stopTimer,
  setCaseCoords,
  showCaseCoords,
  resetScore,
} from '../../redux/actions';
import getRandomCoords from '../../common';
import { getStartButtonText, startGameHandler, finishGameHandler } from './controls-logic';
import Timeline from '../Timeline';
import Timer from '../Timer';
import ScoreCounter from '../ScoreCounter';
import Button from '../Button';
import './style.css';

const Controls = ({ coordsX, coordsY, isGameStarted, startGame, finishGame, startTimer, stopTimer, setCaseCoords, showCaseCoords, resetScore }) => (
  <div className="controls">
    <Timeline />
    <div className="controls__wrapper">
      <div className="controls__statistics">
        <Timer />
        <ScoreCounter />
      </div>
      <div className="controls__buttons">
        <Button
          text={getStartButtonText(isGameStarted)}
          onClick={() => {!isGameStarted ? startGameHandler(coordsX, coordsY, startGame, startTimer, setCaseCoords, showCaseCoords, getRandomCoords) : finishGameHandler(finishGame, stopTimer, resetScore)}}
        />
        <Link to="/settings">
          <Button
            text="Settings"
            onClick={() => finishGameHandler(finishGame, stopTimer, resetScore)}
          />
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  coordsX: state.coords.x,
  coordsY: state.coords.y,
  isGameStarted: state.isGameStarted
});

const mapDispatchToProps = {
  startGame,
  finishGame,
  startTimer,
  stopTimer,
  setCaseCoords,
  showCaseCoords,
  resetScore
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
