import './App.css';
import Timer from './Timer.jsx';
import { useRef, useState, useEffect } from 'react';
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
  const audioRef = useRef(null);

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
      if(audioRef.current) audioRef.current.play();
    }
  }, [timerVal, isTimerRunning, isSessionTime, breakTime, sessionTime]);
  
  function handleIsTimerRunning() {
    setIsTimerRunning(!isTimerRunning);
  }

  function handleReset() {
    setSessionTime(sessionTime);
    setBreakTime(breakTime);
    setTimerVal(sessionTime);
    setIsTimerRunning(false);
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
        <audio id="beep" ref={audioRef} src="../buzzer.mp3" />
      <footer className="footer">
        <p>Coded by <a href="https://www.linkedin.com/in/rafaelcarvalho11/">Rafael Carvalho</a></p>
        <p>Designed by <a href="https://www.linkedin.com/in/pedroid/">Pedro Pereira</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
