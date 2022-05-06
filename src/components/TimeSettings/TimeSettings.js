import { connect } from 'react-redux';
import { changeTime } from '../../redux/actions';
import './style.css';

const TimeSettings = ({ totalGameTime, changeTime }) => (
  <div className="time">
    <p>Time: {totalGameTime / 1000}</p>
    <input
      className="time__input"
      type="range"
      min="10000"
      max="60000"
      step="1000"
      onChange={event => changeTime(event.target.value)}
      value={totalGameTime}
    />
  </div>
);

const mapStateToProps = state => ({ totalGameTime: state.totalGameTime });

const mapDispatchToProps = { changeTime };

export default connect(mapStateToProps, mapDispatchToProps)(TimeSettings);
