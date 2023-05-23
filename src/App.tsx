import "./App.css";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  return (
    <div>
      <Heading title="React Typescript" />
      <Section title="Section Title">Hei guys trying use Typescript</Section>
      <div>
        <Counter />
      </div>
      <List
        items={["☕ Coffe", "🍪 Cookie", "💻 Coding"]}
        render={(item: string) => <span>{item}</span>}
      />
    </div>
  );
}

export default App;
