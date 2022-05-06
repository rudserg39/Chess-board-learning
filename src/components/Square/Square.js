import { connect } from 'react-redux';
import { setCaseCoords, showCaseCoords, increaseScore } from '../../redux/actions';
import { getSquareColorClassName, getBoardCoords, answerHandler } from './square-logic';
import cn from 'classnames';
import './style.css';

const Square = ({ side, coordsX, coordsY, coordsVisibility, isTimerRunning, isTimeLeft, caseCoords, setCaseCoords, showCaseCoords, increaseScore, coordX, coordY, coords }) => {
  const squareColorClassName = getSquareColorClassName(coordX, coordY);
  const squarInactiveClassName = !isTimerRunning || !isTimeLeft ? 'square_inactive' : '';

  return (
    <div
      id={coords}
      className={cn('square', squareColorClassName, squarInactiveClassName)}
      onPointerDown={event => answerHandler(event, coordsX, coordsY, caseCoords, setCaseCoords, showCaseCoords, increaseScore)}
    >
      {coordsVisibility !== 'none' && coordsVisibility === 'squareCoords' && <span className="square__text square__text_center">{coords}</span>}
      {coordsVisibility !== 'none' && coordsVisibility === 'boardCoords' && getBoardCoords(side, coords)}
    </div>
  );
};

const mapStateToProps = state => ({
  side: state.coords.side,
  coordsX: state.coords.x,
  coordsY: state.coords.y,
  coordsVisibility: state.coordsVisibility,
  isTimerRunning: state.isTimerRunning,
  isTimeLeft: state.isTimeLeft,
  caseCoords: state.caseCoords
});

const mapDispatchToProps = {
  setCaseCoords,
  showCaseCoords,
  increaseScore
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
