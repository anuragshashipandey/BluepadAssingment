import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";


const Rate = ({ count, rating, color, onRating }) => {
  const a={
    filled: "filled",
    unfilled: "unfilled",
  }
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return a.filled;
    } else if (!hoverRating && rating >= index) {
      return a.filled;
    }
    return a.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <img src={require(`../Media/${getColor(idx)}.png`).default}
          id={`star${idx}`}
          alt="star"
          onClick={() => onRating(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
};

export default Rate;