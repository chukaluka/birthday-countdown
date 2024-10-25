"use client";
import React, {useState,useEffect} from 'react'

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const mins = Math.floor((difference / (1000 * 60)) % 60)
  const secs = Math.floor((difference / 1000) % 60)

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mins < 10 ? `0${mins}` : mins.toString();
  seconds = secs < 10 ? `0${secs}` : secs.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  }

}

export default function Timer({launchDate} : {launchDate: string}) {

  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
  }, [launchDate]);

  return (
    <div>
          {/* Countdown */}
      <div className="flex justify-center mt-3 gap-3 max-w-[330px] md:max-w-[900px]">
        <span className="flex flex-col justify-center items-center bg-black text-yellow-500/95 text-5xl w-36 py-3 shadow-lg rounded">
          {timeLeft.days}
          <small className="text-sm text-white/70 uppercase font-semibold">Days</small>
        </span>
        <span className="flex flex-col justify-center items-center bg-black text-yellow-500/95 text-5xl w-36 py-3 shadow-lg rounded">
          {timeLeft.hours}
           <small className="text-sm text-white/70 uppercase font-semibold">Hours</small>
        </span>
        <span className="flex flex-col justify-center items-center bg-black text-yellow-500/95 text-5xl w-36 py-3 shadow-lg rounded">
          {timeLeft.minutes}
          <small className="text-sm text-white/70 uppercase font-semibold">Minutes</small>
        </span>
        <span className="flex flex-col justify-center items-center bg-black text-yellow-500/95 text-5xl w-36 py-3 shadow-lg rounded">
          {timeLeft.seconds}
           <small className="text-sm text-white/70 uppercase font-semibold">Seconds</small>
        </span>
      </div> 
    </div>
  )
}
