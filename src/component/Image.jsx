import { useState } from "react";
import defaultJpg from "../../public/default.jpg";
export function Image() {
  const [options, setOptions] = useState("standard");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submit);
  };
  return (
    <section>
      <h4>more than just traditional image placeholders</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <select name="" id="">
          <option>standard</option>
          <option>grayscale</option>
          <option>blur</option>
        </select>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-image">
        <img src={defaultJpg} alt="" />
      </article>
    </section>
  );
}
