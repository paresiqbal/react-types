import { useCallback, useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
}

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

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={addOne}>+</button>
      <button onClick={decreaseOne}>-</button>
    </div>
  );
}
