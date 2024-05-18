import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { name: "Alice Johnson", review: "Investify made finding investors for my startup so easy! The video call feature let me pitch my idea directly, and the AI chatbot was super helpful. I connected with amazing investors in no time!" },
  { name: "Bob Smith", review: "As an investor, Investify has been a game-changer. The AI chatbot gives me quick insights, and I can talk to startup founders through video calls. It’s never been this easy to discover promising new businesses!" },
  { name: "Charlie Brown", review: "I love how Investify brings startup owners and investors together. The platform is easy to use, and the video calls made my investment decisions much more personal. Highly recommend it to other founders!" },
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
            <div className="story-card flex center column around padding-20">
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
