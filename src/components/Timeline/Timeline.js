import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTimeLeft, isTimeLeft } from '../../redux/actions';
import useTimer from '../../hooks/useTimer';
import getTimelineWidth from './timeline-logic';
import './style.css';

const Timeline = ({ totalGameTime, isTimerRunning, timeLeft, setTimeLeft, isTimeLeft }) => {
  const timer = useTimer(totalGameTime, isTimerRunning);

  useEffect(() => {
    setTimeLeft(timer);
    isTimeLeft(timer);
  });

  return <div className="timeline" style={{ width: `${getTimelineWidth(totalGameTime, timeLeft)}%`}}></div>;
};

const mapStateToProps = state => ({
  totalGameTime: state.totalGameTime,
  isTimerRunning: state.isTimerRunning,
  timeLeft: state.timeLeft
});

const mapDispatchToProps = {
  setTimeLeft,
  isTimeLeft
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
