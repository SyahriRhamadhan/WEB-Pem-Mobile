import React from 'react'
import Pict1 from '../../components/assets/two.png'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
function History() {
  const [history, setHistory] = useState([]);
  const historyUser = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data/history/member', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setHistory(response.data.memberHistory);
      });
  };
  useEffect(() => {
    historyUser();
  }, [])
  return (
    <div>
      <header className="section-header pt-3"></header>
      <section className="section-content padding-y pb-5">
        <div className="container">
          <div className="row">
            <main className="col-md-24">
              <div className="card">
                <div className="table table-borderless table-shopping-cart">
                  <h3 className='ml ml-5 pt-3'>History</h3>
                </div>
              </div>
              {history.map((history, i) => (
                <div className="p-3 rounded mt-4" key={i} style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}>
                  <Row>
                    <Col md={8} className=''>
                      <div className="d-flex justify-content-between col-md-12">
                        <p className=" py-1 ">{history.product.jenis_penerbangan} {history.product.depature_date}</p>
                      </div>
                      <div className="d-flex justify-content-between col-md-12 ">
                        <div className="d-flex">
                          <div className='grid grid-cols-3'>
                            <p>{history.product.kota_asal}</p>
                            <img className='mx-auto' alt='pict1' src={Pict1} style={{ height: '2em' }} />
                            <p>{history.product.kota_tujuan}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col >
                      <div className="d-flex justify-content-between">
                        <p><small className='fw-bold'>Status Pembayaran </small>{history.status}</p>
                      </div>
                    </Col>
                    <Col >
                    {history.checkIn === null ? (
                      
                      <Button className='d-flex justify-content-between' style={{ backgroundColor: "#F97316" }} >
                        <Link to={`/history/checkin/${history.id}`} className='text-white'>
                          Check In
                        </Link>
                      </Button>
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
                    </Col>
                  </Row>
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
export default History;