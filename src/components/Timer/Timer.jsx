import React from 'react'
import './Timer.css'
function Timer({days,hours,minutes,seconds}) {
  return (
    <div class="countdown">
    <div class="countdown-item colored">
        <span class="days">{days}</span>
        <div>Days</div>
    </div>
    <div class="countdown-item">
        <span class="hours">{hours}</span>
        <div>Hours</div>
    </div>
    <div class="countdown-item">
        <span class="minutes">{minutes}</span>
        <div>Minutes</div>
    </div>
    <div class="countdown-item">
        <span class="seconds">{seconds}</span>
        <div>Seconds</div>
    </div>
</div>
  )
}

export default Timer