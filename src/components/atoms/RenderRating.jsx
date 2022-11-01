import { useState } from "react";

const RenderRating = () => {
  const [point, setPoint] = useState(1);
  const total = 5;
  const ratingBox = [];

  for (let i = 1; i <= total; i++) {
    ratingBox.push(
      <div
        key={i}
        className={i <= point ? "active-star star" : "star"}
        onClick={() => setPoint(i)}
      >
        &#9733;
      </div>
    );
  }
  return ratingBox;
};

export default RenderRating;
