function Timer({timerVal}) {
    function formatTime(timerVal) {
        let mm = String(Math.ceil(timerVal / 60));
        let ss = String(timerVal % 60);
        if (mm.length <= 1) mm = '0' + mm;
        if (ss.length <= 1) ss = '0' + ss;
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