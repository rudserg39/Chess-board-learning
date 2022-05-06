import { connect } from 'react-redux';
import './style.css';

const FinalScore = ({ isTimeLeft, score }) => !isTimeLeft ? <div className="score">Score: {score}</div> : '';

const mapStateToProps = state => ({
  isTimeLeft: state.isTimeLeft,
  score: state.score
});

export default connect(mapStateToProps)(FinalScore);
