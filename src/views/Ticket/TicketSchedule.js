import React, {useState, useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardImage,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import { Helmet } from 'react-helmet';
import axios from "axios";
import { cilPlus, cilClock } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import {FaPlane} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
const Dropdowns = () => {
  const [ticket, setTicket] = useState([]);
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  if (role !== "admin") {
    navigate("/landing");
  }
  const getTicket = async () => {
    const response = await axios.get("https://flightgo-be-server.up.railway.app/v1/api/ticket");
    setTicket(response.data);
  };
  useEffect(() => {
    getTicket();
  }, []);
  return (
    <CRow>
      <Helmet>
        <title >Ticket List</title>
      </Helmet>
      <CCol xs={12}>
        <p className='font-bold text-3xl'>Flight Ticket Schedule</p>
        <p className='py-2 px-3 bg-gray-200 my-4'>Flight Ticket Schedule</p>
        <div className='flex justify-between'>
          <div className='flex justify-evenly'>
            <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 mr-2 rounded-sm bg-opacity-70 border-opacity-100'>All</button>
            <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 mr-2 rounded-sm bg-opacity-50 border-opacity-100'>Round Trip</button>
            <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 mr-2 rounded-sm bg-opacity-50 border-opacity-100'>One-Way</button>
          </div>
          <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 mr-2 rounded-sm border-opacity-100'><Link to='/addnewdata' className='text-white'><CIcon icon={cilPlus}/>Add New Data</Link></button>
        </div>
      </CCol>
      <CRow className='mt-4 m-auto '>
      {ticket.map((ticket, i) => (
      <CCol md='4' sm='6' key={i}>
          <CCard className='px-1 shadow-sm m-2 ' style={{ width: '20em', height: '28em' }}>
            <CCardBody>
              <small className='mb-3 text-xs'>{ticket.bentuk_penerbangan} Flight</small>
              <CCardTitle className='flex text-sm font-bold'>{ticket.kota_asal} ({ticket.kode_negara_asal}) <FaPlane className='w-5 mx-2'/>{ticket.kota_tujuan} ({ticket.kode_negara_tujuan})</CCardTitle>
              <CCardImage alt={ticket.image_product} className='py-4' orientation="top" style={{ height: '10em' }} src={ticket.image_product} />
                <CCardText className='font-thin text-xs lh-1'>{ticket.jenis_penerbangan} Flight/{ticket.kode_negara_asal} to {ticket.kode_negara_tujuan}</CCardText>
                <CCardText className='text-xs lh-1'>Departure Date on {ticket.depature_date}</CCardText>
                <CCardText className='font-bold lh-1'>Rp {ticket.total_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}/passenger</CCardText>
                <CCardText className='text-xs font-thin'><CIcon icon={cilClock} /> Updated at {ticket.updatedAt}</CCardText>
              <div className='flex position-absolute bottom-0 start-50 translate-middle-x justify-between'>
                <CButton  className='m-auto text-xs mr-2 mb-2 w-100' style={{ backgroundColor: "#F97316" }} >
                  <Link to={`/editdata/${ticket.id}`} className='text-white mr-2'>
                    Detail Ticket
                  </Link>
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
      </CRow>
    </CRow>
  )
}

export default Dropdowns
