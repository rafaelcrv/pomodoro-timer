function Timer({timerVal, isSessionTime}) {
    function formatTime(timerVal) {
        let mm = String(Math.floor(timerVal / 60));
        let ss = String(timerVal % 60);
        if (mm.length <= 1) mm = '0' + mm;
        if (ss.length <= 1) ss = '0' + ss;
        return `${mm}:${ss}`;
    };
    return (
        <div>
          <p id='timer-label'>{isSessionTime ? `Time to focus!` : 'Time for a break'}</p>
          <span id='time-left'>{formatTime(timerVal)}</span>
        </div>
    );
};

export default Timer;