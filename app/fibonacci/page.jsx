import React from "react";

export default function Home() {
  const fibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const series = fibonacci(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  };

  const generateFibonacciSeries = (n) => {
    const series = fibonacci(n);
    return series.join(", ");
  };

  return (
    <div>
      <h1>Fibonacci Series</h1>
      <form>
        <label>
          Input:
          <input type="number" id="inputNumber" min="1" />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const inputNumber = parseInt(
              document.getElementById("inputNumber").value
            );
            const fibonacciSeries = generateFibonacciSeries(inputNumber);
            alert(`Fibonacci Series for ${inputNumber}: ${fibonacciSeries}`);
          }}
        >
          Generate
        </button>
      </form>
    </div>
  );
}
