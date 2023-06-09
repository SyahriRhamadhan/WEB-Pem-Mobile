import React from "react";
import styled from "styled-components";
import '../landingPage.css'

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#F66F4D" : "#F66F4D")};
  background-color: ${(props) => (props.border ? "transparent" : "#F66F4D")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#F66F4D" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#F66F4D")};
    border: 1px solid #F66F4D;
    color: ${(props) => (props.border ? "#F66F4D" : "#fff")};
  }
`;

