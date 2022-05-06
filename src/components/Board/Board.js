import { connect } from 'react-redux';
import Square from '../Square';
import Countdown from '../Countdown';
import CaseCoords from '../CaseCoords';
import FinalScore from '../FinalScore';
import './style.css';

const Board = ({ coordsX, coordsY }) => (
  <div className="board">
    {coordsY.map(coordY => (
      coordsX.map(coordX => (
        <Square
          key={`${coordX}${coordY}`}
          coordX={coordX}
          coordY={coordY}
          coords={`${coordX}${coordY}`}
        />
      ))
    ))}
    <Countdown />
    <CaseCoords />
    <FinalScore />
  </div>
);

const mapStateToProps = state => ({
  coordsX: state.coords.x,
  coordsY: state.coords.y,
});

export default connect(mapStateToProps)(Board);
