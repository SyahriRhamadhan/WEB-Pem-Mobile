import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import '../landingPage.css'

// Components
import Sidebar from "../NavHome/SidebarHome";
import Backdrop from "../Elements/Backdrop";

// Assets
import LogoIcon from "../../assets/svg/LandingPage/Logo";
import BurgerIcon from "../../assets/svg/LandingPage/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen &&
        <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className={nav ? 'nav activ' : 'nav'} style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="flexNullCenter" to="home" smooth={true.toString()}>
            <LogoIcon />
          </Link>

          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>

          <UlWrapper className="flexNullCenter mt-3">
            <li className="semiBold font15 pointer">
              <a href='#panel' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                offset={-80}>
                Booking
              </a>
            </li>

            <li className="semiBold font15 pointer">
              <a href='#about' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                offset={-80}>
                About Us
              </a>
            </li>

            <li className="semiBold font15 pointer">
              <a href='#destination' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                offset={-80}>
                Destination
              </a>
            </li>

            <li className="semiBold font15 pointer">
              <a href='#testimonial' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                offset={-80}>
                Testimonial
              </a>
            </li>
          </UlWrapper>

          <UlWrapperRight className="flexNullCenter mt-3">

            <li className="btnHover semiBold font15 pointer flexCenter">
              <a href="/login" className="radius8 bg-orange-500 text-white" style={{ padding: "4px 15px" }}>
                Sign In
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 999;
background: transparent;
transition: 0.3s ease;
`;
const NavInner = styled.div`
position: relative;
height: 100%;
`
const BurderWrapper = styled.button`
outline: none;
border: 0px;
background-color: transparent;
height: 100%;
padding: 0 15px;
display: none;
@media (max-width: 760px) {
display: block;
}
`;
const UlWrapper = styled.ul`
display: flex;
@media (max-width: 760px) {
display: none;
}
`;
const UlWrapperRight = styled.ul`
@media (max-width: 760px) {
display: none;
}
`;