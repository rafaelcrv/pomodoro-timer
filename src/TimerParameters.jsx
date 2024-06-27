function TimerParameters({ breakTime, setBreakTime, sessionTime, setSessionTime, setTimerVal }) {

    function timeInMin(timeInSec) {
        return Math.ceil(timeInSec / 60);
      };
    
    function decrementBreakTime() {
    setBreakTime(t => t > 60 ? t - 60 : 60);
    };

    function incrementBreakTime() {
    setBreakTime(t => t < 3600 ? t + 60 : 3600);
    };

    function decrementSessionTime() {
    setSessionTime(t => t > 60 ? t - 60 : 60);
    setTimerVal(t => t > 60 ? t - 60 : 60);
    };

    function incrementSessionTime() {
    setSessionTime(t => t < 3600 ? t + 60 : 3600);
    setTimerVal(t => t < 3600 ? t + 60 : 3600);
    };

    return (
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
    );
};

export default TimerParameters;