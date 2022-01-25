import { useRef, useState, useEffect, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  const getSqrt = (n) => {
    for(let i = 0; i <= 2; i++) {
      console.log(i);
    }

    console.log("Expensive function called");
    return Math.sqrt(n);
  };

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  }, [number, inc]);

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />

      <h2 className="my-3">
        The square root of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
    </div>
  );
};

export default UseMemoExample;
