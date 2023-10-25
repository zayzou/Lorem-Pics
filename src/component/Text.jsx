import data from "../data";
import { useState } from "react";
import { nanoid } from "nanoid";
export function Text() {
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
  const handleClick = () => {
    navigator.clipboard.writeText(text);
    alert("copied to clipboard");
  };
  return (
    <section>
      <h4>Classic lorem ipsum </h4>
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
      <article className="lorem-text" onClick={handleClick}>
        {text.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}
