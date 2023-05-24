import { useCallback, useEffect, useMemo, useState } from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNumb: number = 20;

export default function Counter() {
  const [count, setCount] = useState<number>(1);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("Mounting");
    console.log("User", users);

    return () => console.log("Unmounting");
  }, [users]);

  const addOne = useCallback(() => setCount((prev) => prev + 1), []);
  const decreaseOne = useCallback(() => setCount((prev) => prev - 1), []);

  const result = useMemo<number>(() => fib(myNumb), [myNumb]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={addOne}>+</button>
      <button onClick={decreaseOne}>-</button>
      <h2>{result}</h2>
    </div>
  );
}
