import './App.css';
import { useState } from 'react';

function App() {
  const [breakTime, setBreakTime] = useState(3000);   // 5 minutes in seconds
  const [sessionTime, setSessionTime] = useState(15000);   // 25 minutes in seconds
  const [startStop, setStartStop] = useState('START');
  const [timeLeft, setTimeLeft] = useState(sessionTime);

  function decrementBreakTime() {
    setBreakTime(t => t > 0 ? t - 1 : 0);
  }

  function incrementBreakTime() {
    setBreakTime(t => t < 60 ? t + 1 : 60);
  }

  function decrementSessionTime() {
    setSessionTime(t => t > 0 ? t - 1 : 0);
  }

  function incrementSessionTime() {
    setSessionTime(t => t < 60 ? t + 1 : 60);
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
            <button id='break-decrement' onClick={decrementBreakTime}>-

            </button>
            <span id='break-length'>{breakTime}</span>
            <button id='break-increment' onClick={incrementBreakTime}>+

            </button>
          </div>
          <div id='session-label'>
            Session length
            <button id='session-decrement' onClick={decrementSessionTime}>-

            </button>
            <span id='session-length'>{sessionTime}</span>
            <button id='session-increment' onClick={incrementSessionTime}>+

            </button>
          </div>
        </div>
        <div>
          <p id='timer-label'>Session</p>
          <span id='time-left'>{timeLeft}</span>
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
