import React from "react";
import { Helmet } from 'react-helmet';
import TopNavbar from "../../components/LandingPage/Nav/TopNavbar";
import Notification from "../../components/notification/Notification";
import Footer from '../../components/LandingPage/Sections/Footer';

export default function NotifPage() {
    return (
        <>
        <Helmet>
            <title >History</title>
        </Helmet>
        <TopNavbar/>
        <Notification/>
        <Footer/>
        </>
    );
}