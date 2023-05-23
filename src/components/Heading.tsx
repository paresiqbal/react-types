type HeadingProps = { title: string };

export default function Heading({ title }: HeadingProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
