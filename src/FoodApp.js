import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name} style={{ width: "100px" }} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://m.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating: 4.3,
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map((dish) => {
        return (
          <Food
            key={dish.id}
            name={dish.name}
            picture={dish.image}
            rating={dish.rating}
          />
        );
      })}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
