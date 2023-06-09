import React, { useEffect, useState } from "react";
import styled from "styled-components";
import '../landingPage.css'
import { useNavigate } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

// Assets
import LogoIcon from "../../assets/svg/LandingPage/Logo";
import BurgerIcon from "../../assets/svg/LandingPage/BurgerIcon";


export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [nav, setNav] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userLogin, setUserLogin] = useState(false);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();
  const userRole = role === "admin"

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
  useEffect(() => {
    token ? setUserLogin(true) : setUserLogin(false);
  }, [token]);

  const logout = () => {
    setUserLogin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role")
    navigate('/login')
    window.location.reload();
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen &&
        <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className={nav ? 'nav activ' : 'nav'} style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <a className="flexNullCenter" href="/landing" smooth={true.toString()}>
            <LogoIcon />
          </a>

          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>

          <UlWrapper className="flexNullCenter mt-3">
            {userRole ? (
              <li className="semiBold font15 pointer">
                <a href='/listorder' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                  offset={-80}>
                  Dashbord
                </a>
              </li>
            ) : null}

            <>
              <li className="semiBold font15 pointer">
                <a href='/wishlist' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                  offset={-80}>
                  Wishlist
                </a>
              </li>

              <li className="semiBold font15 pointer">
                <a href='/history' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                  offset={-80}>
                  History
                </a>
              </li>

              <li className="semiBold font15 pointer">
                <a href='/notif' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                  offset={-80}>
                  Notification
                </a>
              </li>

              <li className="semiBold font15 pointer">
                <a href='/profile' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true.toString()} smooth={true.toString()}
                  offset={-80}>
                  Profile
                </a>
              </li>
            </>
          </UlWrapper>

          <UlWrapperRight className="flexNullCenter mt-3">

            <li className="btnHover semiBold font15 pointer flexCenter">
              <button className="radius8 bg-orange-500 text-white" style={{ padding: "4px 15px" }} onClick={logout}>
                Sign Out
              </button>
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