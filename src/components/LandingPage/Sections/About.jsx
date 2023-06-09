import React from "react";
import styled from "styled-components";
import '../landingPage.css'

// Components
import ServiceBox from "../Elements/AboutBox";

export default function Services() {
  return (
    <Wrapper id="about">
      <div className="pb-10 mt-5">
        <div className="container ">
          <HeaderInfo >
            <h1 className="font40 extraBold">ABOUT US</h1>
            <p className="font16">
              Booking flight ticket with Flightgo. We give many offers
              <br />
              with the best prices for passenger and good services.
            </p>
          </HeaderInfo>

          <ServiceBoxRow className="flex">

            <ServiceBox title="15" subtitle="Years of Experience" />

            <ServiceBox title="1k" subtitle="Sucessful Trips" />

            <ServiceBox title="100+" subtitle="Promos and Offers" />

            <ServiceBox title="4.9" subtitle="Overall Rating" />

          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
width: 100%;
`;

const ServiceBoxRow = styled.div`
@media (max-width: 860px) {
flex-direction: column;
text-align: center;
}
`;



const HeaderInfo = styled.div`
@media (max-width: 860px) {
text-align: center;
}
`;