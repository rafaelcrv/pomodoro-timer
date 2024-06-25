function Timer({timerVal}) {
    function formatTime(timerVal) {
        const mm = String(Math.ceil(timerVal / 60));
        const ss = String(timerVal % 60);
        if (mm.length <= 1) mm.padStart(2, '0');
        if (ss.length <= 1) ss.padStart(1, '0');
        console.log(ss.length, ss);
        return `${mm}:${ss}`;
    };
    return (
        <div>
          <p id='timer-label'>Session</p>
          <span id='time-left'>{formatTime(timerVal)}</span>
        </div>
    );
}

export default Timer;