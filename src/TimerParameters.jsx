function TimerParameters({ breakTime, setBreakTime, sessionTime, setSessionTime, setTimerVal, userInputs, isTimerRunning }) {

    function timeInMin(timeInSec) {
        return Math.ceil(timeInSec / 60);
    }
    
    function decrementBreakTime() {
    setBreakTime(t => t > 60 ? t - 60 : 60);
    console.log('breakTime', breakTime);
    userInputs.breakTime = breakTime;
    }

    function incrementBreakTime() {
    setBreakTime(t => t < 3600 ? t + 60 : 3600);
    console.log('breakTime', breakTime);
    userInputs.breakTime = breakTime;
    }

    function decrementSessionTime() {
    setSessionTime(t => t > 60 ? t - 60 : 60);
    userInputs.sessionTime = sessionTime;
    setTimerVal(t => t > 60 ? t - 60 : 60);
    }

    function incrementSessionTime() {
    setSessionTime(t => t < 3600 ? t + 60 : 3600);
    userInputs.sessionTime = sessionTime;
    setTimerVal(t => t < 3600 ? t + 60 : 3600);
    }

    return (
        <div>
          <div id='break-label'>
            Break length
            <button id='break-decrement' onClick={decrementBreakTime} disabled={isTimerRunning}>
              -
            </button>
            <span id='break-length'>{timeInMin(breakTime)}</span>
            <button id='break-increment' onClick={incrementBreakTime} disabled={isTimerRunning}>
              +
            </button>
          </div>
          <div id='session-label'>
            Session length
            <button id='session-decrement' onClick={decrementSessionTime} disabled={isTimerRunning}>
              -
            </button>
            <span id='session-length'>{timeInMin(sessionTime)}</span>
            <button id='session-increment' onClick={incrementSessionTime} disabled={isTimerRunning}>
              +
            </button>
          </div>
        </div>
    );
};

export default TimerParameters;