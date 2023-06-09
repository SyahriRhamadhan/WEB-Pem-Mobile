import React from 'react'
import TopNavbar from "../../components/LandingPage/Nav/TopNavbar";
import Historypage from "../../components/History/History";
import Footer from '../../components/LandingPage/Sections/Footer';
import { Helmet } from 'react-helmet';
export default function History() {
  return (
    <>
      <Helmet>
        <title >History</title>
      </Helmet>
    <TopNavbar/>
    <Historypage />
    <Footer/>
    </>
  )
}
