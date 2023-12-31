// Countdown.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Appheader=styled.header`
display:flex;
text-align:center;
justify-content:center;
`

const CountdownContainer = styled.div`
  display: flex;
  border: 5px solid teal;
  border-radius:25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: teal;
  padding:5px 0 10px 0;
  font-size: 40px;
  font-weight: 900;
  background: linear-gradient(14deg, #333 45%, #ffffff 70%);
  margin-top: 150px;
  text-shadow: 0 0 10px rgba(0, 128, 128, 0.8);
`
;
const CountdownTitle = styled.h1`
  text-decoration: underline;
  color: red;
`;


const Countdown = () => {
  const targetDate = new Date('2024-02-28T23:59:59').getTime();
  const [count, setCount] = useState(calculateTimeRemaining(targetDate));

  function calculateTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return {
      total: timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = calculateTimeRemaining(targetDate);
      setCount(timeRemaining);

      if (timeRemaining.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    
    <CountdownContainer>
        <Appheader >Formula 1 for Life!!</Appheader>
        <CountdownTitle>Next season Countdown</CountdownTitle>
      {count.days}d {count.hours}h {count.minutes}m {count.seconds}s
    </CountdownContainer>
  );
};

export default Countdown;
