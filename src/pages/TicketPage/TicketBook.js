import React, { useState,useEffect } from "react";
import {
  FaAmericanSignLanguageInterpreting,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from "react-toastify";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Form, Button } from "react-bootstrap";

const TicketBook = () => {
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState("");
  const [ticket, setTicket] = useState({});
  const [transaksi, setTransaksi] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const whoami = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/current-user', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  };
  if (
    users.izin === null ||
    users.address === null ||
    users.passport === null ||
    users.visa === null
  ) {
    swal({
      title: "Perhatian!",
      text: "Anda belum melengkapi Info Akun, mohon lengkapi terlebih dahulu!",
      icon: "warning",
      button: "Mengerti",
    });
    navigate("/profile/update-profile");
  }
  const orderProduct = async () => {
    await axios
      .get(`https://flightgo-be-server.up.railway.app/v1/api/ticket/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setTicket(response.data);
      });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("bukti_Pembayaran", transaksi);
    try {
        if (transaksi === null) {
            toast("Isi Semua data", {
                type: "error",
            });
        } else { 
              axios.post(
                `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/${ticket.id}`,
                form,
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setTimeout(() => {
               navigate("/ticket");
                window.location.reload();
            }, 1000);
            swal({
                title: "Berhasil!",
                text: "Berhasil Memesan Silahkan Menunggu",
                icon: "success",
                button: "Oke",
            });
        }
    } catch (error) {
        swal(error.response.data.message);
    }
}
  useEffect(() => {
    orderProduct();
    whoami();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Helmet>
        <title >Payment Page</title>
      </Helmet>
      <div className="bg-[#f6f6f6]">
      <ToastContainer />
        <div className="bg-white">
          {/* Navbar */}
          <TopNavbar />
        </div>

          <div className="container pt-28 pb-4 px-3">
            <div className="row px-2">
              <div className="col-lg-6 d-inline">
                <div className="col-lg-12 p-3 bg-white rounded">
                  <div
                    className="d-flex justify-content-between items-center"
                    style={{
                      borderBottom: "1px solid rgb(225 225 225)",
                      paddingBottom: "15px",
                    }}
                  >
                    <h6 className="my-auto">Flight One Way</h6>
                    <h6 className="text-bold my-auto" style={{color : "#F97316"}}>Detail</h6>
                  </div>
                  <div className="my-3">
                    <h6 >Depart Flight</h6>
                    <small>{ticket.depature_date}</small>
                  </div>
                  <div
                    className="my-3"
                    style={{
                      borderBottom: "1px solid rgb(225 225 225)",
                      paddingBottom: "16px",
                    }}
                  >
                    <h6 >Super FlightGo</h6>
                    <small>{ticket.bentuk_penerbangan} {ticket.jenis_penerbangan}</small>
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
                          <h6 className="fonts-bold">{ticket.depature_time}</h6>
                          <p className="font-weight-light fonts-light">
                          {ticket.depature_date}
                          </p>
                        </div>
                        <p className="font-wight-light my-4 fonts-light">
                          1h 50m
                        </p>
                        <div >
                          {/* <p className="fonts-bold">01:05</p>
                          <p className="fonts-light">6 Dec 2022</p> */}
                        </div>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <div>
                          <h6 className="fonts-medium"> {ticket.kota_asal} ({ticket.kode_negara_asal})</h6>
                          <h6 className="fonts-medium">
                            {ticket.bandara_asal}
                          </h6>
                          {/* <h6 className="fonts-medium">Terminal 1A</h6> */}
                        </div>
                        <div className="mt-5">
                          <h6 className="fonts-medium">{ticket.kota_tujuan} ({ticket.kode_negara_tujuan})</h6>
                          <h6 className="fonts-medium">
                          {ticket.bandara_asal}
                          </h6>
                          {/* <h6 className="fonts-medium">Terminal Domestic</h6> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className = 'col-sm-12 row mt-3 m-auto'>
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
                    <h6 className="text-bold my-auto" style={{color : "#F97316"}}>Detail</h6>
                  </div>
                  <div className="my-3">
                    <h6 >Depart Flight</h6>
                    <small>{ticket.depature_date_}</small>
                  </div>
                  <div
                    className="my-3"
                    style={{
                      borderBottom: "1px solid rgb(225 225 225)",
                      paddingBottom: "16px",
                    }}
                  >
                    <h6 >Super FlightGo</h6>
                    <small>{ticket.bentuk_penerbangan} {ticket.jenis_penerbangan}</small>
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
                          <h6 className="fonts-bold">{ticket.depature_time_}</h6>
                          <p className="font-weight-light fonts-light">
                          {ticket.depature_date_}
                          </p>
                        </div>
                        <p className="font-wight-light my-4 fonts-light">
                          1h 50m
                        </p>
                        <div >
                          {/* <p className="fonts-bold">01:05</p>
                          <p className="fonts-light">6 Dec 2022</p> */}
                        </div>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <div>
                          <h6 className="fonts-medium"> {ticket.kota_asal_} ({ticket.kode_negara_asal_})</h6>
                          <h6 className="fonts-medium">
                            {ticket.bandara_asal_}
                          </h6>
                          {/* <h6 className="fonts-medium">Terminal 1A</h6> */}
                        </div>
                        <div className="mt-5">
                          <h6 className="fonts-medium">{ticket.kota_tujuan_} ({ticket.kode_negara_tujuan_})</h6>
                          <h6 className="fonts-medium">
                          {ticket.bandara_asal_}
                          </h6>
                          {/* <h6 className="fonts-medium">Terminal Domestic</h6> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className = 'col-sm-12 row mt-3 m-auto'>
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
                className="mt-3 bg-light rounded py-3 position-relative"
                style={{
                  boxSizing: "border-box",
                  height: `${show ? "25vh" : "10vh"}`,
                }}
              >
                <div >
                  <div className="d-flex justify-content-between card-price-detail position-absolute">
                    <h6 className="fonts-normal">Total Price</h6>
                    <h6 className="my-auto">
                      Rp {ticket.total_price}
                    </h6>
                  </div>
                </div>
              </div>
              <Form onSubmit={handleSubmit} className='ms-1'>
                <Form.Group>
                      <Form.Label>Bukti Resi Transfer</Form.Label>
                      <Form.Control
                          type="file"
                          id="image"
                          onChange={(e) => setTransaksi(e.target.files[0])}
                      />
                </Form.Group>
                <Button className="mt-2 mb-4" style={{ backgroundColor: "#F97316" }} type="submit">
                    Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
    </>
  );
};

export default TicketBook;
