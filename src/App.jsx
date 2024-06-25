import './App.css';
import Timer from './Timer.jsx';
import { useState } from 'react';

function App() {
  const [breakTimeInSec, setBreakTimeInSec] = useState(300);   // 5 minutes in seconds
  const [sessionTime, setSessionTime] = useState(1500);   // 25 minutes in seconds
  const [timerVal, setTimerVal] = useState(sessionTime);
  const [startStop, setStartStop] = useState('START');
  
  function timeInMin(timeInSec) {
    return Math.ceil(timeInSec / 60);
  }

  function decrementBreakTime() {
    setBreakTimeInSec(t => t > 0 ? t - 60 : 0);
  }

  function incrementBreakTime() {
    setBreakTimeInSec(t => t < 3600 ? t + 60 : 3600);
  }

  function decrementSessionTime() {
    setSessionTime(t => t > 0 ? t - 60 : 0);
    setTimerVal(t => t > 0 ? t - 60 : 0);
  }

  function incrementSessionTime() {
    setSessionTime(t => t < 3600 ? t + 60 : 3600);
    setTimerVal(t => t < 3600 ? t + 60 : 3600);
  }

  function handleStartStop() {
    setStartStop(val => val === 'START' ? 'STOP' : 'START');
  }

  return (
    <div className='App' id='main'>
      <div className='App-header'>
        POMODORO TIMER
        <div>
          <div id='break-label'>
            Break length
            <button id='break-decrement' onClick={decrementBreakTime}>
              -
            </button>
            <span id='break-length'>{timeInMin(breakTimeInSec)}</span>
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
        <div>
          <p id='timer-label'>Session</p>
          {/* <span id='time-left'>{timeLeft}</span> */}
        </div>
        <div id='control-buttons'>
          <button id='start-stop' onClick={handleStartStop}>{startStop}</button>
          <button id='reset'></button>
        </div>

      </div>
    </div>
  );
}

export default App;
