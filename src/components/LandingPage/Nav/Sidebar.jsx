import React, { useEffect, useState } from "react";
import styled from "styled-components";
import '../landingPage.css'
import { useNavigate } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/LandingPage/CloseIcon";
import LogoIcon from "../../assets/svg/LandingPage/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  // eslint-disable-next-line no-unused-vars
  const [userLogin, setUserLogin] = useState(false);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();
  const userRole = role === "admin"
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
    <Wrapper className="animate bg-gray-200" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
        </div>

        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        {userRole ? (
          <li className="semiBold font15 pointer">
            <a onClick={() => toggleSidebar(!sidebarOpen)}
              className="blackColor"
              style={{ padding: "10px 15px" }}
              href="/listorder"
              spy={true.toString()}
              smooth={true.toString()}
              offset={-60}
            >
              Dashboard
            </a>
          </li>
        ) : null}
        <li className="semiBold font15 pointer">
          <a onClick={() => toggleSidebar(!sidebarOpen)}
            className="blackColor"
            style={{ padding: "10px 15px" }}
            href="/wishlist"
            spy={true.toString()}
            smooth={true.toString()}
            offset={-60}
          >
            Wishlist
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a onClick={() => toggleSidebar(!sidebarOpen)}
            className="blackColor"
            style={{ padding: "10px 15px" }}
            href="/history"
            spy={true.toString()}
            smooth={true.toString()}
            offset={-60}
          >
            History
          </a>
        </li>

        <li className="semiBold font15 pointer">
          <a onClick={() => toggleSidebar(!sidebarOpen)}
            className="blackColor"
            style={{ padding: "10px 15px" }}
            href="/notif"
            spy={true.toString()}
            smooth={true.toString()}
            offset={-60}
          >
            Notifications
          </a>
        </li>

        <li className="semiBold font15 pointer">
          <a onClick={() => toggleSidebar(!sidebarOpen)}
            className="blackColor"
            style={{ padding: "10px 15px" }}
            href="/profile"
            spy={true.toString()}
            smooth={true.toString()}
            offset={-60}
          >
            Profile
          </a>
        </li>

        <li className="semiBold font15 pointer flexCenter">
          <button className="radius8 bg-orange-500 text-white" style={{ padding: "4px 15px" }} onClick={logout}>
            Sign Out
          </button>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
width: 400px;
height: 100vh;
position: fixed;
top: 0;
padding: 0 30px;
right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
z-index: 9999;
@media (max-width: 400px) {
width: 100%;
}
`;
const SidebarHeader = styled.div`
padding: 20px 0;
`;
const CloseBtn = styled.button`
border: 0px;
outline: none;
background-color: transparent;
padding: 10px;
`;
const UlStyle = styled.ul`
padding: 40px;
li {
margin: 20px 0;

}
`;