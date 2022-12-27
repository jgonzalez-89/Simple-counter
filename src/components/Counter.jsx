import { useState, useEffect } from "react";

function Counter() {
  const [numbers, setNumbers] = useState("0000");

  const fill = (num) => {
    let n = parseInt(num) + 1;
    let l = n.toString().length;
    let zeros = 4 - l;
    return "0".repeat(zeros) + n;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prev) => fill(prev));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const setZero = () => {
    setNumbers("0000");
  };

  return (
    <div className="container">
      {numbers.split("").map((number, index) => {
        return (
          <div className="box" key={index}>
            {number}
          </div>
        );
      })}

      <button className="btn" type="button" onClick={() => setZero()}>
        Clear
      </button>
    </div>
  );
}
export default Counter;
