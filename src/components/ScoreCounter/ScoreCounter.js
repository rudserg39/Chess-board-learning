import { connect } from 'react-redux';
import './style.css';

const ScoreCounter = ({ score }) => <p className="score-counter">Score: {score}</p>;

const mapStateToProps = state => ({ score: state.score });

export default connect(mapStateToProps)(ScoreCounter);
