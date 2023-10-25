import { useState } from "react";
import data from "./data";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleChange = (e) => setCount(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count < 1 || count > 8) {
      console.error("Count must be between 1-8");
      return;
    }
    setText(data.slice(0, count));
  };
  return (
    <section className="section-center">
      <h4>Bored of classic lorem ipsum ? </h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount"></label>
        <input
          type="number"
          name="amount"
          id="amount"
          className=""
          value={count}
          step="1"
          min="1"
          max="8"
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </section>
  );
};
export default App;
