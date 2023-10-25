import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const handleChange = (e) => setCount(e.target.value);
  return (
    <section className="section-center">
      <h4>Bored of classic lorem ipsum ? </h4>
      <form className="lorem-form">
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
