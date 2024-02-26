import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialsSection.scss";
import { Avatar } from "@mui/material";
import { testimonialsData } from "./TestimonialsData.ts";

const TestimonialsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index === activeSlide ? "active" : ""}`}
          >
            <Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              className="avatar"
            />
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSection;
