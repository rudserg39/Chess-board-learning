import { connect } from 'react-redux';
import './style.css';

const Timer = ({ timeLeft }) => <p className="timer">Time left: {Math.round(timeLeft / 1000)}</p>;

const mapStateToProps = state => ({ timeLeft: state.timeLeft });

export default connect(mapStateToProps)(Timer);
