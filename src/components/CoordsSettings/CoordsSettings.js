import { connect } from 'react-redux';
import { changeCoordsVisibility } from '../../redux/actions';
import './style.css';

const CoordsSettings = ({ coordsVisibility, changeCoordsVisibility }) => (
  <div className="coords">
    <label className="coords__label">
      <input
        className="coords__input"
        type="radio"
        name="coords"
        value="none"
        onChange={event => changeCoordsVisibility(event.target.value)}
        checked={coordsVisibility === 'none'}
      />
      Don't show coords
    </label>
    <label className="coords__label">
      <input
        className="coords__input"
        type="radio"
        name="coords"
        value="squareCoords"
        onChange={event => changeCoordsVisibility(event.target.value)}
        checked={coordsVisibility === 'squareCoords'}
      />
      Show square coords
    </label>
    <label className="coords__label">
      <input
        className="coords__input"
        type="radio"
        name="coords"
        value="boardCoords"
        onChange={event => changeCoordsVisibility(event.target.value)}
        checked={coordsVisibility === 'boardCoords'}
      />
      Show board coords
    </label>
  </div>

);

const mapStateToProps = state => ({ coordsVisibility: state.coordsVisibility });

const mapDispatchToProps = { changeCoordsVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(CoordsSettings);
