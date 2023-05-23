import "./App.css";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Heading title="React Typescript" />
      <Section title="Section Title">Hei guys trying use Typescript</Section>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
