import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { name: "user one", review: "Love how this platform is good" },
  { name: "user two", review: "Love how this platform is good" },
  { name: "user three", review: "Love how this platform is good" },
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
    <div className="story-section flex column center around">
      <h1>Success Stories</h1>
      <Slider {...settings} className="story-slider flex center">
        {data.map((d) => (
          <div key={d.name} className="story-cards">
            <div className="story-card flex center column gap-20">
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
