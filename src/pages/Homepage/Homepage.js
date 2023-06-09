import React from "react";

// Sections
import Navbar from '../../components/LandingPage/NavHome/TopNavbarHome';
import Header from '../../components/LandingPage/Sections/Header';
import About from '../../components/LandingPage/Sections/About';
import Testimonials from '../../components/LandingPage/Sections/Testimonials';
import FooterHome from '../../components/LandingPage/Sections/FooterHome';
import Payment from "../../components/LandingPage/Sections/Payment";
// import SearchHome from "../../components/LandingPage/Sections/SearchHome";
import Destination from "../../components/LandingPage/Sections/Destination";
import { Helmet } from 'react-helmet';
export default function Homepage() {
  return (
    <>
      <Helmet>
        <title >Home Page</title>
      </Helmet>
      <Navbar />
      <Header />
      {/* <SearchHome/> */}
      <About />
      <Destination/>
      <Testimonials />
      <Payment/>
      <FooterHome />
    </>
  );
}

