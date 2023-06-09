import React, { useState, useEffect } from "react";
import {
  FaAmericanSignLanguageInterpreting,
  FaArrowRight,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const Card = () => {
  const [ticket, setTicket] = useState([]);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [showState, setShowState] = useState({});
  const [isFavorited, setIsFavorited] = useState([]);
  useEffect(() => {
    getTicket();
  }, []);
  const addToWishlist = ticket => {
    const updatedWishlist = [...wishlist, ticket];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    swal(" Berhasil Menambahkan Wishlist", {
      icon: "success",
    });
  }
  const removeFromWishlist = ticket => {
    const updatedWishlist = wishlist.filter(t => t !== ticket);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    swal(" Berhasil Menghapus Wishlist", {
      icon: "success",
    });
  }

  const toggleWishlist = ticket => {
    if (isFavorited[ticket.id]) {
      removeFromWishlist(ticket);
      setIsFavorited({ ...isFavorited, [ticket.id]: false });
    } else {
      addToWishlist(ticket);
      setIsFavorited({ ...isFavorited, [ticket.id]: true });
    }
  }
  const getTicket = async () => {
    const response = await axios.get("https://flightgo-be-server.up.railway.app/v1/api/ticket");
    setTicket(response.data);
  };
  return (
    <>
      {ticket.map((ticket, i) => (
        <div
          key={i}
          className="p-3 bg-white rounded mt-4 row"
          style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}
        >
          <div className="col-lg-12 d-flex justify-content-between ">
            <p className="px-2 py-1 ">Type : {ticket.bentuk_penerbangan} {ticket.jenis_penerbangan} </p>
            <p
              onClick={() => toggleWishlist(ticket)}
              className="border px-2 py-1
              me-5 text-left rounded d-flex items-center"
            >
              {isFavorited[ticket.id] ? (
                <FiHeart color="#ff0000" />
              ) : (
                <FiHeart color="#999999" />
              )}
            </p>
          </div>
          <div className="col-lg-12 p-1">
            <div className="row ">
              <div className="col-md-2 mt-4">
                <div className="mx-3">
                  <img className="" src={ticket.image_product} alt="" />
                </div>
              </div>
              <div className="col-md-5 d-flex mt-4">
                <div className="mx-3 col-md-4">
                  <h6>{ticket.bandara_asal}</h6>
                  <h6 className="fonts-light">{ticket.kode_negara_asal}</h6>
                </div>
                <div>
                  <FaArrowRight color="gray" />
                </div>
                <div className="mx-3 col-md-4">
                  <h6>{ticket.bandara_tujuan}</h6>
                  <h6 className="fonts-light">{ticket.kode_negara_tujuan}</h6>
                </div>
                <div className="d-none d-md-block">
                  <h6>{ticket.depature_date}</h6>
                  <h6 className="fonts-light">{ticket.depature_time}</h6>
                </div>
              </div>
              <div className="col-md-5 mt-4">
                <div className="mx-3 d-flex justify-content-between items-center">
                  <div className="col-md-6">
                    <h6 className="text-danger my-auto">
                      Rp {ticket.total_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')} <span style={{ color: "gray" }}>/pax</span>
                    </h6>
                  </div>
                  <div>
                    <button className="border p-2 m-auto text-left rounded d-flex items-center text-white" style={{ backgroundColor: "#F97316" }}>
                      <Link className="text-white " to={`/ticket/book/${ticket.id}`}>
                        Choose Flight
                      </Link>
                    </button>
                  </div>
                  <div>
                    {!showState[i] && (
                      <FiChevronDown
                        onClick={() => {
                          // ubah state untuk dropdown yang diklik
                          setShowState({ ...showState, [i]: true });
                          // ubah state untuk dropdown yang lain menjadi false
                          for (let j = 0; j < ticket.length; j++) {
                            if (j !== i) {
                              setShowState({ ...showState, [j]: false });
                            }
                          }
                        }}
                      />
                    )}
                    {showState[i] && (
                      <FiChevronUp
                        onClick={() => {
                          setShowState({ ...showState, [i]: false });
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>
          {showState[i] && (
            <div className="row mx-2 mt-4 border-top pt-4">
              <div className="col-md-3 px-2">
              </div>

              <div className='col-md-9 row px-2'>
                <div className="col-lg-12 row">
                  <div className="col-md-4">
                    <p>Depature Time</p>
                    <h6 className="fonts-bold">{ticket.depature_time}</h6>
                    <p className="font-weight-light fonts-light">{ticket.depature_date}</p>
                  </div>

                  <div className='col-md-8'>
                    <h6 className="fonts-medium"> {ticket.kota_asal} ({ticket.kode_negara_asal})</h6>
                    <h6 className="fonts-medium">
                      {" "}
                      {ticket.bandara_asal}
                    </h6>
                  </div>
                </div>

                <div className="col-md-12">
                  <p className="font-wight-light my-4 fonts-light">1h 50m</p>
                </div>

                <div className="col-lg-12 row mt-4">
                  <div className="col-md-4">
                    <p> Round Trip Depature Time</p>
                    <h6 className="fonts-bold">{ticket.depature_time_}</h6>
                    <p className="font-weight-light fonts-light">{ticket.depature_date_}</p>
                  </div>

                  <div className="col-md-8">
                    <h6 className="fonts-medium">{ticket.kota_tujuan} ( {ticket.kode_negara_tujuan} )</h6>
                    <h6 className="fonts-medium">
                      {ticket.bandara_tujuan}
                    </h6>
                  </div>
                </div>

                <div className='col-sm-12 row mt-5'>
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
                    <small className="d-inline-block">20kg</small>
                  </div>
                  <div className="col-xs-6">
                    <FaLanguage className="mrs-3" />
                    <small className="d-inline-block">Entertainment</small>
                  </div>
                </div>
              </div>
            </div>
          )
          }
        </div >
      ))
      }
    </>
  );
};

export default Card;