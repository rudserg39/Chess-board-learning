import { connect } from 'react-redux';
import useCountdown from '../../hooks/useCountdown';
import './style.css';

const Countdown = ({ isGameStarted }) => {
  const countdown = useCountdown(isGameStarted);
  return isGameStarted && countdown ? <p className="countdown">{countdown}</p> : '';
};

const mapStateToProps = state => ({ isGameStarted: state.isGameStarted });

export default connect(mapStateToProps)(Countdown);
