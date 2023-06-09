import React from "react";

// Sections
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar'
import Header from '../../components/LandingPage/Sections/Header'
import About from '../../components/LandingPage/Sections/About'
import Testimonials from '../../components/LandingPage/Sections/Testimonials'
import Footer from '../../components/LandingPage/Sections/Footer'
import Payment from "../../components/LandingPage/Sections/Payment";
// import Search from "../../components/LandingPage/Sections/Search";
import Destination from "../../components/LandingPage/Sections/Destination";
import { Helmet } from 'react-helmet';
export default function Landing() {
  return (
    <>
      <Helmet>
        <title >Landing Page</title>
      </Helmet>
      <TopNavbar />
      <Header />
      {/* <Search/> */}
      <About />
      <Destination/>
      <Testimonials />
      <Payment/>
      <Footer />
    </>
  );
}

