import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit';
import TopBar from '../TopBar';

const TicketSchedule = () => {
  return (
    <div className='position-absolute left-1/4 w-3/4'>
      <MDBContainer breakpoint='lg'>
        <TopBar />
      </MDBContainer>
    </div>
  )
}

export default TicketSchedule