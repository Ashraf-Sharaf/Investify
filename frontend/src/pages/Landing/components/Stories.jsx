import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { name: "Alice Johnson", review: "Love how this platform is good" },
  { name: "Bob Smith", review: "It has great features" },
  { name: "Charlie Brown", review: "Very user-friendly" },
];
function Stories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="story-section flex column center ">
      <h1>Success Stories</h1>
      <Slider {...settings} className="story-slider flex center">
        {data.map((d) => (
          <div key={d.name} className="story-cards">
            <div className="story-card flex center column">
              <h2>{d.name}</h2>
              <p>{d.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Stories;
