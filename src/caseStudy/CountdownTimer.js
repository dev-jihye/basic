import { useEffect, useRef, useState } from 'react';

const CounterdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0));
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStopRestart = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setSeconds(initialSeconds);
    setIsRunning(true);
  };

  return (
    <div>
      <h1>Counterdown Timer</h1>
      <p>{seconds} seconds remaining</p>
      <button onClick={handleStopRestart}>
        {isRunning ? 'Stop' : 'Restart'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CounterdownTimer initialSeconds={60} />
    </div>
  );
};

export default App;
