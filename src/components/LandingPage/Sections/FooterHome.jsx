import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../landingPage.css'

// Assets
import logo from '../../assets/img/LandingPage/footer/logo.png'

export default function FooterHome() {
  return (
    <MDBFooter className='bgFooter text-sm text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className=' text-slate-700'>Follow Us:</span>
        </div>

        <div>
          <a href='https://facebook.com/' className='me-4 text-reset'>
            <MDBIcon color='black' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon color='black' fab icon='twitter' />
          </a>
          <a href='https://instagram.com/' className='me-4 text-reset'>
            <MDBIcon color='black' fab icon='instagram' />
          </a>

        </div>
      </section>

      <section className='text-slate-700'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <img src={logo} alt='logo' style={{ height: 43 }} />
              <p className='pt-3'>
                Enjoy your trip by booking flight with us
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 text-center'>
              <a className='text-reset fw-bold mb-4 text-slate-600' href='#!'>
                HOME
              </a>
              <p className='pt-4'>
                <a href='#panel' className='text-reset'>
                  Booking
                </a>
              </p>
              <p>
                <a href='#about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#destination' className='text-reset'>
                  Destination
                </a>
              </p>
              <p>
                <a href='#testimonial' className='text-reset'>
                  Testimonial
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4 text-slate-600'>Account</h6>
              <p>
                <a href='/login' className='text-reset'>
                  Sign In
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Forgot Password
                </a>
              </p>

            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4 text-slate-600'>Support</h6>
              <p>
                <MDBIcon color='secondary' />Booking Guide
              </p>
              <p>
                <MDBIcon color='secondary' />FAQ
              </p>
              <p>
                <MDBIcon color='secondary' />Help Center
              </p>
              <p>
                <MDBIcon color='secondary' />Terms & Condiions
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Copyright 2022 by&nbsp;
        <a className='text-reset fw-bold' href='#/landing'>
          Flightgo. All Right Reserved
        </a>
      </div>
    </MDBFooter>
  );
}