import { useEffect } from 'react';
import { connect } from 'react-redux';
import { hideCaseCoords } from '../../redux/actions';
import './style.css';

const CaseCoords = ({ isTimerRunning, isTimeLeft, caseCoords, isCaseCoordsVisible, hideCaseCoords }) => {
  useEffect(() => {
    window.hideCaseCoordsTimeoutId = setTimeout(() => {
      if (isTimerRunning) {
        hideCaseCoords();
      }
    }, 800);
  });

  return isTimerRunning && isTimeLeft && isCaseCoordsVisible ? <p className="case-coords">{caseCoords}</p> : '';
};

const mapStateToProps = state => ({
  isTimerRunning: state.isTimerRunning,
  isTimeLeft: state.isTimeLeft,
  caseCoords: state.caseCoords,
  isCaseCoordsVisible: state.isCaseCoordsVisible
});

const mapDispatchToProps = { hideCaseCoords };

export default connect(mapStateToProps, mapDispatchToProps)(CaseCoords);
