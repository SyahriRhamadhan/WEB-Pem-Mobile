import { Container, Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import {
  FaAmericanSignLanguageInterpreting,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";;
function CheckIn() {
  const { id } = useParams();
  const [orders, setOrders] = useState({});
  const navigate = useNavigate();
  const orderProduct = async () => {
    await axios
      .get(`https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setOrders(response.data.data.product);
      });
  };

  const CheckIn = () => {
    swal({
      title: "Check-in Sekarang?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willAccpted) => {
      if (willAccpted) {
        const data = {
          checkIn: new Date(),
        };
        axios
          .put(
            `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/check-in/${id}`,
            data,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            navigate("/history");
          });
        swal("Anda berhasil CheckIn", {
          icon: "success",
        });
      } else {
        swal("Anda tidak jadi check in!");
      }
    });
  };
  useEffect(() => {
    orderProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <br /><br /><br /><hr />
      <h4 className="ms-4 fw-bold">Check-in Page</h4>
      <div className="row px-2">
        <div className="col-lg-6 d-inline outline-2">
          <div className="col-lg-12 p-3 bg-white rounded">
            <div
              className="d-flex justify-content-between items-center"
              style={{
                borderBottom: "1px solid rgb(225 225 225)",
                paddingBottom: "15px",
              }}
            >
              <h6 className="my-auto">Flight One Way</h6>
              <h6 className="text-bold my-auto" style={{ color: "#F97316" }}>Detail</h6>
            </div>
            <div className="my-3">
              <h6 >Depart Flight</h6>
              <small>{orders.depature_date}</small>
            </div>
            <div
              className="my-3"
              style={{
                borderBottom: "1px solid rgb(225 225 225)",
                paddingBottom: "16px",
              }}
            >
              <h6 >Super FlightGo</h6>
              <small>{orders.bentuk_penerbangan} {orders.jenis_penerbangan}</small>
            </div>
            <div
              style={{
                boxSizing: "border-box",
                padding: "5px 15px",
                borderBottom: "1px solid rgb(225 225 225)",
              }}
            >
              <div className="d-flex">
                <div>
                  <div >
                    <h6 className="fonts-bold">{orders.depature_time}</h6>
                    <p className="font-weight-light fonts-light">
                      {orders.depature_date}
                    </p>
                  </div>
                  <p className="font-wight-light my-4 fonts-light">
                    1h 50m
                  </p>
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <div>
                    <h6 className="fonts-medium"> {orders.kota_asal} ({orders.kode_negara_asal})</h6>
                    <h6 className="fonts-medium">
                      {orders.bandara_asal}
                    </h6>
                  </div>
                  <div className="mt-5">
                    <h6 className="fonts-medium">{orders.kota_tujuan} ({orders.kode_negara_tujuan})</h6>
                    <h6 className="fonts-medium">
                      {orders.bandara_asal}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 row mt-3 m-auto'>
              <div className="text-secondary col-xs-6 mb-4">
                <FaAmericanSignLanguageInterpreting className="mrs-3" />
                <small className="d-inline-block">Non Refundable</small>
              </div>
              <div className="text-success col-xs-6">
                <FaWpforms className="mrs-3" />
                <small className="d-inline-block ">Reschedule</small>
              </div>
              <div className="col-xs-6 mb-4">
                <FaCube className="mrs-3" />
                <small className="d-inline-block">Cabin baggage</small>
              </div>
              <div className="col-xs-6">
                <FaLanguage className="mrs-3" />
                <small className="d-inline-block">Entertainment</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-inline">
          <div className="col-lg-12 p-3 bg-white rounded">
            <div
              className="d-flex justify-content-between items-center"
              style={{
                borderBottom: "1px solid rgb(225 225 225)",
                paddingBottom: "15px",
              }}
            >
              <h6 className="my-auto">Flight Round Trip</h6>
              <h6 className="text-bold my-auto" style={{ color: "#F97316" }}>Detail</h6>
            </div>
            <div className="my-3">
              <h6 >Depart Flight</h6>
              <small>{orders.depature_date_}</small>
            </div>
            <div
              className="my-3"
              style={{
                borderBottom: "1px solid rgb(225 225 225)",
                paddingBottom: "16px",
              }}
            >
              <h6 >Super FlightGo</h6>
              <small>{orders.bentuk_penerbangan} {orders.jenis_penerbangan}</small>
            </div>
            <div
              style={{
                boxSizing: "border-box",
                padding: "5px 15px",
                borderBottom: "1px solid rgb(225 225 225)",
              }}
            >
              <div className="d-flex">
                <div>
                  <div >
                    <h6 className="fonts-bold">{orders.depature_time_}</h6>
                    <p className="font-weight-light fonts-light">
                      {orders.depature_date_}
                    </p>
                  </div>
                  <p className="font-wight-light my-4 fonts-light">
                    1h 50m
                  </p>
                  <div >
                  </div>
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <div>
                    <h6 className="fonts-medium"> {orders.kota_asal_} ({orders.kode_negara_asal_})</h6>
                    <h6 className="fonts-medium">
                      {orders.bandara_asal_}
                    </h6>
                  </div>
                  <div className="mt-5">
                    <h6 className="fonts-medium">{orders.kota_tujuan_} ({orders.kode_negara_tujuan_})</h6>
                    <h6 className="fonts-medium">
                      {orders.bandara_asal_}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 row mt-3 m-auto'>
              <div className="text-secondary col-xs-6 mb-4">
                <FaAmericanSignLanguageInterpreting className="mrs-3" />
                <small className="d-inline-block">Non Refundable</small>
              </div>
              <div className="text-success col-xs-6">
                <FaWpforms className="mrs-3" />
                <small className="d-inline-block ">Reschedule</small>
              </div>
              <div className="col-xs-6 mb-4">
                <FaCube className="mrs-3" />
                <small className="d-inline-block">Cabin baggage</small>
              </div>
              <div className="col-xs-6">
                <FaLanguage className="mrs-3" />
                <small className="d-inline-block">Entertainment</small>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-3 rounded p-3 ms-4 position-relative"
          style={{
            boxSizing: "border-box"
          }}
        >
          <div >
            <div className="d-flex justify-content-between card-price-detail position-absolute">
              <h6 className="fonts-normal">Total Price</h6>
              <h6 className="my-auto">
                Rp {orders.total_price}
              </h6>
            </div>
          </div>
        </div>
        <Form>
          {orders.checkIn !== null ? (
            <Button className='my-2 ms-4' style={{ backgroundColor: "#F97316" }} onClick={CheckIn}>CheckIn</Button>
          ) : (
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-right">
                  Kamu Sudah Check In
                </Tooltip>
              }
            >
              <Button className='d-flex justify-content-between bg-success'>
                CHECK IN
              </Button>
            </OverlayTrigger>
          )}
        </Form>
      </div>
    </Container >
  )
}
export default CheckIn