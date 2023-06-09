import React from "react";
import styled from "styled-components";
import '../landingPage.css'

// Component
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="testimonial">
      <div style={{ padding: '50px 0' }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold pt-5">A Passenger said about us:</h1>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
width: 100%;
padding-top: 20px;
`;
const HeaderInfo = styled.div`
margin-bottom: 30px;
@media (max-width: 860px) {
text-align: center;
}
`;