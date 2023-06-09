import { Button, Card, Col, Container, Row } from "react-bootstrap"
import React,  { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from 'react-helmet';
import swal from "sweetalert";
const UpdateOrder = () => {
    const { id } = useParams();
    const [orders, setOrders] = useState({});
    const [ticket, setTicket] = useState({});
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/landing");
    }
    const orderProduct = async () => {
        await axios
          .get(`https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            setTicket(response.data.data.product)
            setOrders(response.data.data);        
          });
      };
      const Accepted = () => {
        swal({
          title: "Pesanan Akan Diterima?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willAccpted) => {
          if (willAccpted) {
            const data = {
              status: "Pesanan Diterima",
            };
            axios
              .put(
                `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/accept/${id}`,
                data,
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then((response) => {
                navigate("/listorder");
                window.location.reload();
              });
            swal("Pesanan berhasil diterima!", {
              icon: "success",
            });
          } else {
            swal("Pesanan tidak jadi diterima");
          }
        });
      };
    
      const Rejected = () => {
        swal({
          title: "Pesanan Akan Ditolak?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willRejected) => {
          if (willRejected) {
            const data = {
              status: "Pesanan Ditolak",
            };
            axios
              .put(
                `https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/reject/${id}`,
                data,
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then((response) => {
                navigate("/listorder");
                window.location.reload();
              });
          } else {
            swal("Pesanan tidak jadi ditolak");
          }
        });
      };
    
      useEffect(() => {
        orderProduct();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return(
        <Container>
          <Helmet>
            <title >Action Page</title>
          </Helmet>
          <Card>
            <Row>
              <Col md={4}>
                <Card.Body>
                  <Card.Title className='fw-bold'>Cek Transaksi</Card.Title>
                    <Card.Text>Status: {orders.status}</Card.Text>
                    <Card.Text>Penerbangan: {ticket.bentuk_penerbangan}/{ticket.jenis_penerbangan}</Card.Text>
                    <Card.Text>Kota Asal: {ticket.kota_asal}</Card.Text>
                    <Card.Text>Kota Tujuan: {ticket.kota_tujuan}</Card.Text>
                  <Button className="me-3" onClick={Accepted}>
                    Terima
                  </Button>
                  <Button  onClick={Rejected}>
                      Tolak
                  </Button>
                </Card.Body>
              </Col>
              <Col md={8}>
              <Card.Text className="fw-bold">Bukti Pembayaran</Card.Text>
                <Card.Img variant="top" src={orders.bukti_Pembayaran}/>
              </Col>
            </Row>
          </Card>
        </Container>
    )
}
export default UpdateOrder