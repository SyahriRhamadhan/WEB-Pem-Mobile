import React from 'react'
import ClientSlider from "../Elements/PaymentSlider";
import '../landingPage.css'

function Payment() {
  return (
    <div style={{ padding: "40px 0" }}>
      <div className="container">
        <div className='pt-10 font-semibold text-center text-2xl'>Accepted Payment Methods</div>
        <ClientSlider />
      </div>
    </div>
  )
}

export default Payment