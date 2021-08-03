import React, { useState } from "react";

import Rate from "./Rate";


const Rating = () => {
  const [rating, setRating] = useState(0);
  const [rating2, setRating2] = useState(0);
  return (
      <div className="row">
        <div className="col text-center">
          <h2>Rate me</h2>
          <p>Rating component</p>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p>Rating - {rating}</p>
        </div>
      </div>
  );
};
//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default Rating;