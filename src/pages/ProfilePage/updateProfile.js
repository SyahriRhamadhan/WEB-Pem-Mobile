import React from "react";
import { Helmet } from 'react-helmet';
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar'
import Footer from '../../components/LandingPage/Sections/Footer'
import EditProfile from "../../components/Profile/UpdateProfile";

const EditProfilePage = () => {
    return (
        <>
            <Helmet>
                <title >Edit Profile</title>
            </Helmet>
        <TopNavbar />
        <EditProfile />
        <Footer />
        </>
    );
};

export default EditProfilePage;