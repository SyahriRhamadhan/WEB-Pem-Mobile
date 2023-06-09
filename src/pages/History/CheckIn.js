import React from 'react'
import TopNavbar from "../../components/LandingPage/Nav/TopNavbar";
import CheckIn from '../../components/History/CheckIn';
import Footer from '../../components/LandingPage/Sections/Footer';
import { Helmet } from 'react-helmet';
export default function CheckInPage() {
    return (
      <>
      <Helmet>
        <title >Check-in</title>
      </Helmet>
      <TopNavbar/>
      <CheckIn />
      <Footer/>
      </>
    )
  }