"use client"
import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2024-12-14T00:16:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 365)) /
            (1000 * 60 * 60 * 24 * 30)
        ),
        days: Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="flex items-center flex-col">
      <p className="text-4xl mt-10">
        {timeLeft.months} M | {timeLeft.days} D{" "}| {timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours} H
      </p>
      {/* <p className="text-6xl font-light max-sm:text-4xl">
        {timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours}:{timeLeft.minutes <= 9 ? `0${timeLeft.minutes}` : timeLeft.minutes}:{timeLeft.seconds <= 9 ? `0${timeLeft.seconds}` : timeLeft.seconds}{" "}
      </p> */}
    </div>
  );
}
