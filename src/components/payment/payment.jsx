import React from 'react'

// CSS
import '../payment/pay.css'

// Assets
import pict1 from '../assets/img/Payment/batikAir.png'

function Payment() {
    return (
        <div className='paymentpage'>
            <div className="Pay container">
                <div className="row m-0">
                    <div className="col-md-7 col-12">

                        <div className="col-12 px-0">
                            <div className="box-right">
                                <div className="d-flex mb-2">
                                    <p className="fw-bold">Rincian Penerbangan</p>

                                </div>
                                <hr />
                                <div>
                                    <div className='text text-xs font-bold'>Penerbangan Keberangkatan</div>
                                    <div className='text text-xs pt-2'>Minggu, 25 Desember 2022</div>
                                    <div className='grid grid-cols-2 pt-5'>
                                        <div>
                                            <div className='text text-xs font-bold'>Batik Air</div>
                                            <div className='text text-xs'>ID1976</div>
                                        </div>
                                        <div>
                                            <img alt='pict1' src={pict1} style={{ height: 80 }} className='float float-right' />

                                        </div>
                                    </div>
                                    <hr />
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <div className='text text-xs font-bold'>07:00</div>
                                            <div className='text text-xs pt-2'>25 Desember 2022</div>
                                        </div>
                                        <div>
                                            <div className='text text-xs font-bold'>Semarang</div>
                                            <div className='text text-xs pt-2'>Bendara International Ahmad Yani</div>
                                        </div>

                                    </div>
                                    <div className='text text-xs pt-3'>
                                        <i className="i pt-3 fa-regular fa-clock"></i>6h 55m Singgah di Jakarta

                                    </div>
                                    <div className='grid grid-cols-2 pt-3'>
                                        <div>
                                            <div className='text text-xs font-bold'>16:30</div>
                                            <div className='text text-xs pt-2'>25 Desember 2022</div>
                                        </div>
                                        <div>
                                            <div className='text text-xs font-bold'>Surabaya</div>
                                            <div className='text text-xs pt-2'>Bendara International Juanda </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="Invois col-md-5 col-12 ps-md-5 p-0 pt-4 ">
                    <div className="box-left">
                        <p className="fw-bold h7">Keterangan Kontak</p>
                        <div className='text text-xs '>Ms Dwi Nurfiana</div>
                        <div className='text text-xs'>Dwinur@gmail.com</div>
                        <div className='text text-xs'>082193u89193</div>
                    </div>
                </div>
                <div className="Invois col-md-5 col-12 ps-md-5 p-0 pt-4 ">
                    <div className="box-left">
                        <p className="fw-bold h7">Keterangan Harga</p>
                        <div className='grid grid-cols-2'>
                            <div>
                                <div className='text text-xs font-bold'>Berangkat</div>
                                <div className='text text-xs'>SRG<i className="fa fa-arrow-right" aria-hidden="true"></i>SBY</div>
                            </div>
                            <div>
                                <div className='text text-xs font-bold'>RP. 2.150.000</div>
                            </div>
                        </div>
                        <hr />
                        <div className='grid grid-cols-2'>
                            <div>
                                <div className='text text-base font-bold'>Total Harga</div>

                            </div>
                            <div>
                                <div className='text text-base font-bold'>RP. 2.150.000</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12 ps-md-5 p-0 pt-4">
                    <div className="box-left">
                        <div className="">
                            <p className="h7 fw-bold mb-1">Pay this Invoice</p>
                            <p className="textmuted h8 mb-2">Make payment for this invoice by filling in the details</p>
                            <div className="form">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card border-0"><input className="form-control ps-5" type="text"
                                            placeholder="Card number" /><span className="far fa-credit-card"></span></div>
                                    </div>
                                </div>
                                <div className='pt-4'>
                                    <div className="btn d-block h8 text-white" style={{ backgroundColor: "#F97316" }}>Bayar
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Payment