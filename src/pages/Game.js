import React, { useState, useEffect } from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter
} from "../styled/Game";
import { Strong } from "../styled/Random";

export default function Game({ history }) {
  const [score, setScore] = useState(0);
  const MAX_SECONDS = 30;
  const [ms, setMS] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  useEffect(() => {
    const currentTime = new Date();
    const interval = setInterval(() => updateTime(currentTime), 1);
    return () => clearInterval(interval);
  }, []);

  const updateTime = startTime => {
    const endTime = new Date();
    const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
    const formattedMsString = ("0000" + msPassedStr).slice(-5);
    const updatedSeconds =
      MAX_SECONDS - parseInt(formattedMsString.substring(0, 2)) - 1;
    const updateeMs =
      1000 -
      parseInt(formattedMsString.substring(formattedMsString.length - 3));

    setSeconds(addLeadingZeros(updatedSeconds, 2));
    setMS(addLeadingZeros(updateeMs, 3));
  };

  useEffect(() => {
    if (seconds <= -1) {
      history.push("/gameOver");
    }
  }, [seconds, ms, history]);

  const addLeadingZeros = (num, length) => {
    let zeros = "";
    for (let i = 0; i < length; i++) {
      zeros += "0";
    }
    return (zeros + num).slice(-length);
  };

  const keyUpHandler = e => {
    console.log(e.key);
  };

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return () => document.removeEventListener("keyup", keyUpHandler);
  });

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Time:{" "}
        <Strong>
          {seconds}: {ms}
        </Strong>
      </StyledTimer>
    </StyledGame>
  );
}
