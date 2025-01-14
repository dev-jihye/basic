import { useState } from 'react';

const memoizedFibonacci = (() => {
  const cache = {};

  const fibonacci = (n) => {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  };

  return fibonacci;
})();

const MemoizedFibonacci = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setNumber(value);
      setResult(null);
    }
  };

  const handleClick = () => {
    if (number !== '') {
      const num = parseInt(number, 10);
      if (num >= 0) {
        setResult(memoizedFibonacci(num));
      }
    }
  };

  return (
    <div>
      <h1>Memoized Fibonacci Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={handleClick}>Enter</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default MemoizedFibonacci;
