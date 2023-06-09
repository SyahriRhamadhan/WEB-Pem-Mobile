import React from "react";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar'
import Profile from "../../components/Profile/Profile";
import Footer from '../../components/LandingPage/Sections/Footer'
import { Helmet } from 'react-helmet';
const ProfilePage = () => {
    return (
        <>
        <Helmet>
            <title >Profile</title>
        </Helmet>
        <TopNavbar />
        <Profile />
        <Footer />
        </>
    );
};

export default ProfilePage;