import { connect } from 'react-redux';
import { changeSide } from '../../redux/actions';
import './style.css';

const SideSettings = ({ side, changeSide }) => (
  <div className="side">
    <label className="side__label">
      <input
        className="side__input"
        type="radio"
        name="side"
        value="white"
        onChange={event => changeSide(event.target.value)}
        checked={side === 'white'}
      />
      White
    </label>
    <label className="side__label">
      <input
        className="side__input"
        type="radio"
        name="side"
        value="black"
        onChange={event => changeSide(event.target.value)}
        checked={side === 'black'}
      />
      Black
    </label>
  </div>
);

const mapStateToProps = state => ({ side: state.coords.side });

const mapDispatchToProps = { changeSide };

export default connect(mapStateToProps, mapDispatchToProps)(SideSettings);
