import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("Mounting");
    console.log("User", users);

    return () => console.log("Unmounting");
  }, [users]);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  const result = useMemo<number>(() => fib(myNumb), [myNumb]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}
