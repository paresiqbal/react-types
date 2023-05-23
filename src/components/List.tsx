import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export default function List<T>({ items, render }: ListProps<T>) {
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </div>
  );
}
