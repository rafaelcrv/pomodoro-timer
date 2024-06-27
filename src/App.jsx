import './App.css';
import Timer from './Timer.jsx';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_SESSION_TIME = 360;  // 25 minutes in seconds 1500
const DEFAULT_BREAK_TIME = 300;    // 5 minutes in seconds 300

function App() {
  const [sessionTime, setSessionTime] = useState(60);
  const [breakTime, setBreakTime] = useState(60);
  const [timerVal, setTimerVal] = useState(sessionTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSessionTime, setIsSessionTime] = useState(true);   // 1 for session, 0 for break

  useEffect(function() {
    if (timerVal > 0) {
      if (isTimerRunning) {
        const intervalId = setInterval(() => {
          setTimerVal((t) => t - 60); // change this to t - 1 (faster debugging)
        }, 1000);
        return () => clearInterval(intervalId);
      }
    } else {
      setTimerVal(isSessionTime ? breakTime : sessionTime);
      setIsSessionTime(!isSessionTime);
    }
  }, [timerVal, isTimerRunning, isSessionTime, breakTime, sessionTime]);
  
  function timeInMin(timeInSec) {
    return Math.ceil(timeInSec / 60);
  };

  function decrementBreakTime() {
    setBreakTime(t => t > 0 ? t - 60 : 0);
  };

  function incrementBreakTime() {
    setBreakTime(t => t < 3600 ? t + 60 : 3600);
  };

  function decrementSessionTime() {
    setSessionTime(t => t > 0 ? t - 60 : 0);
    setTimerVal(t => t > 0 ? t - 60 : 0);
  };

  function incrementSessionTime() {
    setSessionTime(t => t < 3600 ? t + 60 : 3600);
    setTimerVal(t => t < 3600 ? t + 60 : 3600);
  };

  function handleIsTimerRunning() {
    setIsTimerRunning(!isTimerRunning);
  };

  function handleReset() {
    setSessionTime((t) => t = DEFAULT_SESSION_TIME); // incorrect: resets to the default values, not to the user-changed values
    setBreakTime((t) => t = DEFAULT_BREAK_TIME);
    setTimerVal((t) => t = DEFAULT_SESSION_TIME);
    setIsTimerRunning((val) => val = 'START');
  };

  return (
    <div className='App' id='main'>
      <div className='App-header'>
        <h2>POMODORO TIMER</h2>
        <div>
          <div id='break-label'>
            Break length
            <button id='break-decrement' onClick={decrementBreakTime}>
              -
            </button>
            <span id='break-length'>{timeInMin(breakTime)}</span>
            <button id='break-increment' onClick={incrementBreakTime}>
              +
            </button>
          </div>
          <div id='session-label'>
            Session length
            <button id='session-decrement' onClick={decrementSessionTime}>
              -
            </button>
            <span id='session-length'>{timeInMin(sessionTime)}</span>
            <button id='session-increment' onClick={incrementSessionTime}>
              +
            </button>
          </div>
        </div>
        <Timer timerVal={timerVal}/>
        <div id='control-buttons'>
          <button id='start-stop' onClick={handleIsTimerRunning}>{isTimerRunning ? 'PAUSE' : 'START'}</button>
          <button id='reset' onClick={handleReset}>
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
