import { useState } from 'react';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(0);
    return (
        <div>
          <p id='timer-label'>Session</p>
          <span id='time-left'>{timeLeft}</span>
        </div>
    );
}

export default Timer;