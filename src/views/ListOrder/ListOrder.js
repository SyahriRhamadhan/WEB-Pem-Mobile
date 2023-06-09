import  { useState, useEffect } from "react";
import React, {
  CCol,
  CRow,
  CTable,
  CPagination,
  CPaginationItem,
  CModal,
  CModalBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell
} from '@coreui/react'
import { Helmet } from 'react-helmet';
import { Link,useNavigate } from "react-router-dom";
import Sort from '../../components/assets/sort.png'
import Payment from '../../components/assets/bukti.png'
import axios from "axios";
import { FaEdit } from "react-icons/fa";

const ListOrder = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState(false)
  const [transaction, setTransaction] = useState([]);
  const role = localStorage.getItem("role");
  if (role !== "admin") {
    navigate("/landing");
  }
  useEffect(() => {
    getTransaction();
  }, []);
  const getTransaction = async () => {
    const response = await axios.get("https://flightgo-be-server.up.railway.app/v1/api/ticket/transaction/data", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
    setTransaction(response.data.data);
  };
  

  return (
    <CRow fluid>
      <Helmet>
        <title >List Order</title>
      </Helmet>
      <CCol xs={12} md={12}>
        <p className='font-bold text-3xl'>List Booking Order</p>
        <p className='py-2 px-3 bg-gray-200 my-4'>Table list Booking Order</p>
        <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 rounded-lg'>Filter <img src={Sort} alt='' className='w-5'/></button>
        <p className=' mt-10 font-bold ml-5'>Latest Orders</p>
        <CTable responsive striped className='shadow-sm text-center '>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">No</CTableHeaderCell>
              <CTableHeaderCell scope="col">Product Id</CTableHeaderCell>
              <CTableHeaderCell scope="col">User Document</CTableHeaderCell>
              <CTableHeaderCell scope="col">Payment</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Depature Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">CheckIn</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
          {transaction.map((transaction, i) => (
            <CTableRow key={i}>
              <CTableHeaderCell scope="row">{i+1}</CTableHeaderCell>
              <CTableDataCell><Link to={`/editdata/${transaction.productId}`} rel="noopener noreferrer" target="_blank">{transaction.productId}</Link></CTableDataCell>
              <CTableDataCell>
                 <Link to={`/listorder/userdetail/${transaction.userId}`} target="_blank">
                   Detail
                 </Link>
              </CTableDataCell>
              <CTableDataCell><a href={transaction.bukti_Pembayaran} rel="noopener noreferrer" target="_blank">Click</a></CTableDataCell>
              <CTableDataCell>{transaction.status}</CTableDataCell>
              <CTableDataCell>{transaction.product.depature_date}</CTableDataCell>
              <CTableDataCell>{transaction.checkIn}</CTableDataCell>
              <CTableDataCell>
                <Link to={`/updateorder/${transaction.id}`}>
                  <FaEdit className="m-auto"/>
                </Link>
              </CTableDataCell>
            </CTableRow>
          ))}
          </CTableBody>
        </CTable>
        <CPagination aria-label="Page navigation example" className='m-auto justify-center'>
          <CPaginationItem aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>1</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>2</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>3</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>4</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>5</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>
      </CCol>

      <CModal visible={payment} onClose={() => setPayment(false)}>
        <CModalBody className='text-center'>
            <p className='text-center font-bold'>Bukti Pembayaran</p>
            <img src={Payment} alt=''/>
            <button className='py-3 px-5 text-[#F66F4D] border-2 border-[#F66F4D]' onClick={() => setPayment(false)}>Close</button>
        </CModalBody>
      </CModal>

    </CRow>
  )
}

export default ListOrder
