
import React from 'react';
import PropTypes from 'prop-types';
import './result.css';
import Button from 'react-bootstrap/Button'; 
// import ReplayIcon from '@mui/icons-material/Replay';

function Result({ handlerParent, wpm, correctWord }) {
  // Advice logic here
  let advice;
  if (wpm === 0) {
    advice = "You are worst at typing 😒";
  } else if (wpm > 15 && wpm <= 35) {
    advice = "You are doing good, keep practicing👍";
  } else if (wpm <= 15) {
    advice = "You need to practice hard🤷‍♀️";
  } else if (wpm > 40 && wpm <= 60) {
    advice = "Your speed is above average👏";
  } else {
    advice = "Excellent work keep it up👌";
  }

  return (
    <div className='p-3'>
      
      <Button variant="success" onClick={handlerParent} size="lg" >Retry</Button>
      <h4 className='p-2'>
        Total Correct words:
        <span style={{ fontWeight: "bold", fontSize: '30px', color:"green" }}> {correctWord.length}</span>
      </h4>
      <h4 className='p-2'>
        Analyzing performance:{" "}
        <span style={{ fontWeight: "bold", fontSize: '30px', color:"blue" }}>{advice}</span>
      </h4>
    </div>
  );
}

Result.propTypes = {
  handlerParent: PropTypes.func.isRequired,
  wpm: PropTypes.number.isRequired,
  correctWord: PropTypes.array,
};

Result.defaultProps = {
  correctWord: [],
};

export default Result;
