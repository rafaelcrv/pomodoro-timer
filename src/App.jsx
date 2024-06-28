import './App.css';
import Timer from './Timer.jsx';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import TimerParameters from './TimerParameters.jsx';

const DEFAULT_SESSION_TIME = 360;  // 25 minutes in seconds 1500
const DEFAULT_BREAK_TIME = 300;    // 5 minutes in seconds 300
const userInputs = {
  sessionTime: DEFAULT_SESSION_TIME,
  breakTime: DEFAULT_BREAK_TIME
}

function App() {
  const [sessionTime, setSessionTime] = useState(DEFAULT_SESSION_TIME);
  const [breakTime, setBreakTime] = useState(DEFAULT_BREAK_TIME);
  const [timerVal, setTimerVal] = useState(sessionTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSessionTime, setIsSessionTime] = useState(true);

  useEffect(function() {
    if (timerVal > 0) {
      if (isTimerRunning) {
        const intervalId = setInterval(() => {
          setTimerVal((t) => t - 30); // change this to t - 1 (faster debugging)
        }, 1000);
        return () => clearInterval(intervalId);
      }
    } else {
      setTimerVal(isSessionTime ? breakTime : sessionTime);
      setIsSessionTime(!isSessionTime);
      playBuzzer();
    }
  }, [timerVal, isTimerRunning, isSessionTime, breakTime, sessionTime]);
  
  function handleIsTimerRunning() {
    setIsTimerRunning(!isTimerRunning);
  }

  function handleReset() {
    setSessionTime(Math.ceil(userInputs.sessionTime)); // TODO: incorrect: resets to the default values, not to the user-changed values
    setBreakTime(Math.ceil(userInputs.breakTime));
    setTimerVal(Math.ceil(userInputs.sessionTime));
    setIsTimerRunning(false);
  }

  function playBuzzer() {
    const audio = new Audio('../buzzer.mp3');
    audio.play();
}

  return (
    <div className='App' id='main'>
      <div className='App-header'>
        <h2>POMODORO TIMER</h2>
        <TimerParameters
          breakTime={breakTime}
          setBreakTime={setBreakTime}
          sessionTime={sessionTime}
          setSessionTime={setSessionTime}
          setTimerVal={setTimerVal}
          userInputs={userInputs}
          isTimerRunning={isTimerRunning}
        />
        <Timer timerVal={timerVal} isSessionTime={isSessionTime}/>
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
