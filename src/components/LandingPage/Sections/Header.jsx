import React from "react";
import styled from "styled-components";
import '../landingPage.css'
import { Button } from 'react-bootstrap';

export default function Header() {
  return (
    <div className="bg-header">
      <Wrapper id="header" className=" container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div className="jumbotron-text">
            <h1 className="extraBold pb-3 font60">Book With Us and Ready to Take Off</h1>
            <HeaderP className="font20 semiBold" style={{ height: 300 }}>
              Explore the world by booking flight with us and get your best experience
              <div>
                <Button href="/ticket" className="w-50 mt-2" style={{ backgroundColor: "#F97316" }}>
                  Find Flight
                </Button>
              </div>
            </HeaderP>
          </div>
        </LeftSide>
      </Wrapper>
    </div >
  );
}

const Wrapper = styled.section`
width: 100%;
min-height: 840px;
@media (max-width: 960px) {
flex-direction: column;
}
`;
const LeftSide = styled.div`
width: 50%;
height: 100%;
padding-top: 20px;
@media (max-width: 960px) {
width: 100%;
order: 1;
margin: 50px 0;
text-align: center;
}
@media (max-width: 560px) {
margin: 80px 0 50px 0;
}
`;

const HeaderP = styled.div`
max-width: 470px;
padding: 15px 0 50px 0;
line-height: 1.5rem;
@media (max-width: 960px) {
padding: 15px 0 50px 0;
text-align: center;
max-width: 100%;
}
`;