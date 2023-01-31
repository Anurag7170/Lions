import React from "react";
import Slider from "react-slick";
import "./CardSlider.css";
import BasicCard from "./Mycard";
import Button from 'react-bootstrap/Button';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      id="bt"
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}

export default function CardSlider() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    // customPaging: function (i) {
    //   return <p>{i + 1}</p>;
    // },

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
     

      <div 
      
      style={{ margin: 20 }}>
        <button
        id="bt" 
        onClick={() => slider?.current?.slickPrev()}>
        Prev
        </button>
        <button
          style={{ marginLeft: 20 }}
          id="bt"
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {products.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>
    </div>
  );
}

const products = [
  { 
    event_name: "ycv",
    EDate:26,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
  {
    event_name: "gyg",
    EDate:2,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
  {
    event_name: "fyg",
    EDate:2,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
  {
    event_name: "uhui",
    EDate:2,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },

  {
    event_name: "ygyu",
    EDate:2,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
  {
    event_name: "hgy",
    EDate:2,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
];
