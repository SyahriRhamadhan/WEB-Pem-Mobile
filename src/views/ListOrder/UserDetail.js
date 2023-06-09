import React,  { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBCarousel,
    MDBCarouselItem
  } from 'mdb-react-ui-kit';
  import { Helmet } from 'react-helmet';
const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/landing");
    }
    const userProfile = async () => {
        await axios
          .get(`https://flightgo-be-server.up.railway.app/v1/api/users/byid/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            setUser(response.data);        
          });
      };
      useEffect(() => {
        userProfile();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return(
        <section style={{ backgroundColor: '#FBFBFB' }}>
            <Helmet>
                <title >User Detail</title>
            </Helmet>
            <MDBBtn href="/listorder" style={{ backgroundColor: "#F97316"}}>Back</MDBBtn>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={user.image_user}
                    alt="avatar"
                    className="square bg-primary rounded mx-auto"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1 mt-3">{user.name}</p>
                  <p className="text-muted mb-4">{user.address}</p>
                </MDBCardBody>
              </MDBCard>
              <MDBCard>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className='fw-bold'>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className='fw-bold'>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.phone}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className='fw-bold'>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className='fw-bold'>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.address}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBCardText className="mb-4 fw-bold">Document (Visa, Passport, Permit)</MDBCardText>
                  <MDBCarousel showControls fade>
                  <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={user.visa}
                    alt='...'
                  >
                    <h5>Visa</h5>
                  </MDBCarouselItem>
  
                  <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={user.passport}
                    alt='...'
                  >
                    <h5>Passport</h5>
                  </MDBCarouselItem>
  
                  <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={user.izin}
                    alt='...'
                  >
                    <h5>Permit</h5>
                  </MDBCarouselItem>
                </MDBCarousel>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    )
}
export default UserDetail