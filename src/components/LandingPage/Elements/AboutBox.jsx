import React from "react";
import styled from "styled-components";
import '../landingPage.css'

export default function ServiceBox({title, subtitle}) {

  return (
    <Wrapper className="flex flexColumn">
      <TitleStyle className="font60 extraBold text-orange-500">{title}</TitleStyle>
      <SubtitleStyle className="font20">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;