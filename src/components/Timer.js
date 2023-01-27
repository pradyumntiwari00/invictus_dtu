import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => {}});

  const displayTime = (timer) =>{
    console.log(timer)
    let str = timer.toString()
    if(str.length<2) str = "0"+str
    return str;
  }

  return (
    <div>
      <div style={{fontSize: '100px'}}>
        <span>{displayTime(days)}</span>:<span>{displayTime(hours)}</span>:<span>{displayTime(minutes)}</span>:<span>{displayTime(seconds)}</span>
      </div>
    </div>
  );
}

export default MyTimer