import React from "react";
import styled from "styled-components";
import '../landingPage.css'

export default function Backdrop({ toggleSidebar }) {
  return <Wrapper className="bg bg-gray-100" onClick={() => toggleSidebar(false)}></Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;
