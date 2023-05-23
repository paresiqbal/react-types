// react
import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export default function Section({ children, title = "Hello" }: SectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
