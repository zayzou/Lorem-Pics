import { useState } from "react";
export function Image() {
  const url = "https://picsum.photos/1200/800";
  const [option, setOptions] = useState("standard");
  const [img, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUrl = option === "standard" ? `${url}?random=1` : `${url}?${option}?random=1`;
    console.log("fetching image from " + newUrl);
    setImage(newUrl);
  };

  const handleOptionChange = (e) => {
    console.log(e.target.value);
    setOptions(e.target.value);
  };
  return (
    <section>
      <h4>Cool image placeholders</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <select value={option} onChange={handleOptionChange}>
          <option>standard</option>
          <option>grayscale</option>
          <option>blur</option>
        </select>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-image">
        <a href={img} target="blank">
          <img src={img} alt="" />
        </a>
      </article>
    </section>
  );
}
