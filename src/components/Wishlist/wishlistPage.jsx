import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
// Assets
import {
    FaArrowRight,
} from "react-icons/fa";
import { Link } from 'react-router-dom'
import swal from "sweetalert";
import { FiHeart } from "react-icons/fi";
export default function WishlistPage() {
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
    function clearWishlist() {
        swal({
            title: "Akan Menghapus Semua Wishlist?",
            text: "Wishlist yang dihapus tidak dapat dikembalikan!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willRejected) => {
            if (willRejected) {
                // Hapus data wishlist dari local storage
                localStorage.removeItem("wishlist");
                // Set state wishlist menjadi array kosong
                setWishlist([]);
            } else {
                swal("Wishlist tidak jadi dihapus!");
            }
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

    return (
        <div>
            <Helmet>
                <title >Wishlist</title>
            </Helmet>
            <header className="section-header"></header>
            <section className="section-content">
                <div className="container">
                    <div className="row">
                        <main className="col-md-24">
                            <div className="card">
                                <div className="table table-borderless table-shopping-cart">
                                    <h3 className='ml ml-5 pt-3'>Wishlist</h3>
                                    <Button className=" ms-4 bg-danger" onClick={clearWishlist}>Clear wishlist</Button>
                                </div>
                            </div>
                            {wishlist.map((wishlist, i) => (
                                <div
                                    key={i}
                                    className="p-3 bg-white rounded mt-4 row"
                                    style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}
                                >
                                    <div className="col-lg-12 d-flex justify-content-between ">
                                        <p className="px-2 py-1 ">Type : {wishlist.bentuk_penerbangan} {wishlist.jenis_penerbangan} </p>
                                        <p
                                            onClick={() => removeFromWishlist(wishlist)}
                                            className="border px-2 py-1 me-5 text-left rounded d-flex items-center"
                                        >
                                            <FiHeart color="#ff0000" />
                                        </p>
                                    </div>
                                    <div className="col-lg-12 p-1">
                                        <div className="row ">
                                            <div className="col-md-2 mt-4">
                                                <div className="mx-3">
                                                    <img className="" src={wishlist.image_product} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-4">
                                                <div className="mx-3 col-md-4">
                                                    <h6>{wishlist.bandara_asal}</h6>
                                                    <h6 className="fonts-light">{wishlist.kode_negara_asal}</h6>
                                                </div>
                                                <div>
                                                    <FaArrowRight color="gray" />
                                                </div>
                                                <div className="mx-3 col-md-4">
                                                    <h6>{wishlist.bandara_tujuan}</h6>
                                                    <h6 className="fonts-light">{wishlist.kode_negara_tujuan}</h6>
                                                </div>
                                                <div className="d-none d-md-block">
                                                    <h6>{wishlist.depature_date}</h6>
                                                    <h6 className="fonts-light">{wishlist.depature_time}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-4">
                                                <div className="mx-3 d-flex justify-content-start items-center">
                                                    <div className="col-md-6">
                                                        <h6 className="text-danger my-auto">
                                                            Rp {wishlist.total_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')} <span style={{ color: "gray" }}>/pax</span>
                                                        </h6>
                                                    </div>
                                                    <div className="ms-3 col-md-6">
                                                        <button className="border p-2 m-auto text-left rounded d-flex items-center text-white" style={{ backgroundColor: "#F97316" }}>
                                                            <Link className="text-white " to={`/ticket/book/${wishlist.id}`}>
                                                                Choose Flight
                                                            </Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            ))}
                        </main>
                    </div>
                </div >
            </section >
        </div >
    )
}