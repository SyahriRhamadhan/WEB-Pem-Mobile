import React from 'react'

import TopNavbar from "../../components/LandingPage/Nav/TopNavbar";
import Footer from '../../components/LandingPage/Sections/Footer';
import WishlistPage from '../../components/Wishlist/wishlistPage';

export default function Wishlist() {
  return (
    <>
    <TopNavbar/>
    <WishlistPage/>
    <Footer/>
    </>
  )
}