import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import '../landingPage.css'

// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Flightgo helped me a lot in finding the best price and routes for our first trip with flight. They give me the good services such as prepaid baggage and secure payment."
            author="Muhammad Said Agung"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Flightgo helped me a lot in finding the best price and routes for our first trip with flight. They give me the good services such as prepaid baggage and secure payment."
            author="Muhammad Sindida Hilmy"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Flightgo helped me a lot in finding the best price and routes for our first trip with flight. They give me the good services such as prepaid baggage and secure payment."
            author="Fatia Susanti"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Flightgo helped me a lot in finding the best price and routes for our first trip with flight. They give me the good services such as prepaid baggage and secure payment."
            author="Ely Yuniar"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Flightgo helped me a lot in finding the best price and routes for our first trip with flight. They give me the good services such as prepaid baggage and secure payment."
            author="Dwi Nurfiana"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Flightgo helped me a lot in finding the best price and routes for our first trip with flight. They give me the good services such as prepaid baggage and secure payment."
            author="Syahri Ramadhan"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
