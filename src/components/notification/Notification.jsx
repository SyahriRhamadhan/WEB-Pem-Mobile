import React, { useState, useEffect } from "react";
import "./Notification.css";
import axios from "axios";


function Notification() {
  const [menunggu, setMenunggu] = useState([]);
  const [diterima, setDiterima] = useState([]);
  const [ditolak, setDitolak] = useState([]);
  const NotifMenunggu = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/tansactransaction/notif/menunggu', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setMenunggu(response.data.notifOk);
      });
  };
  const NotifDiterima = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/tansactransaction/notif/diterima', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDiterima(response.data.notifAcc);
      });
  };
  const NotifDitolak = () => {
    axios
      .get('https://flightgo-be-server.up.railway.app/v1/api/ticket/tansactransaction/notif/ditolak', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDitolak(response.data.notifReject);
      });
  };
  useEffect(() => {
    NotifMenunggu();
    NotifDiterima();
    NotifDitolak();
  }, [])
  const listmenunggu = (menunggu.length)
  const listditerima = (diterima.length)
  const listditolak = (ditolak.length)
  return (
    <div>
      <header className="section-header"></header>

      <section className="section-content">
        <div className="container">
          <div className="row">
            <main className="col-md-24">
              <div className="card mb-5">
                <div className="table table-borderless table-shopping-cart">
                  <h3 className=''>Notification</h3>
                  <p>Status :
                    <a href='#menunggu'>
                      <small className="text-primary">Menunggu {listmenunggu}</small>
                    </a>
                    <a href='#berhasil'>
                      <small className="text-success">Berhasil {listditerima}</small>
                    </a>
                    <a href='#ditolak'>
                      <small className="text-danger">Ditolak {listditolak}</small>
                    </a>
                  </p>
                </div>
                <p className="fw-bold " id="menunggu">Berhasil <strong className="text-primary">Memesan</strong> Tiket</p>
                {menunggu.map((menunggu, i) => (
                  <div className="card-body border-top bg-sky-100" key={i}>
                    <div className=''>
                      <p>
                        Anda berhasil <strong>memesan</strong> tiket dari {menunggu.product.kota_asal} ke {menunggu.product.kota_tujuan}
                      </p>
                    </div>
                  </div>
                ))}
                <p className="fw-bold mt-3" id="berhasil">Pembayaran <strong className="text-success">Berhasil</strong></p>
                {diterima.map((diterima, i) => (
                  <div className="card-body border-top bg-sky-100" key={i}>
                    <div className=''>
                      <p>
                        Tiket pesanan anda dari {diterima.product.kota_asal} ke {diterima.product.kota_tujuan} telah <strong>diterima</strong>
                        {diterima.checkIn === null ? (
                          <a className="text-primary" href={`/history/checkin/${diterima.product.id}`}> Check-in</a>
                        ) : (
                          <></>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
                <p className="fw-bold mt-3" id='ditolak'>Pembayaran <strong className="text-danger"> Ditolak</strong> </p>
                {ditolak.map((ditolak, i) => (
                  <div className="card-body border-top bg-sky-100" key={i}>
                    <div className=''>
                      <p>
                        Tiket pesanan anda dari {ditolak.product.kota_asal} ke {ditolak.product.kota_tujuan} <strong>ditolak</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div >
      </section >
    </div >
  )
}
export default Notification