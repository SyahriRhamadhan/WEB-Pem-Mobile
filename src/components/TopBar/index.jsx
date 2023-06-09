import { MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Icon from '../assets/Icon.png'
import './topbar.css'
import Notification from '../assets/lonceng.png'

const TopBar = () => {
  return (
    <MDBRow className='pt-4'>
      <MDBCol size='3'>
        <MDBInput label='&#xF002; Search' id='formControlLg' type='text' size='' className='formColor' />
      </MDBCol>
      <MDBCol size='5'>
      </MDBCol>
      <MDBCol size='2'>
        <img src={Notification} alt="" className='w-25 ml-auto' />
      </MDBCol>
      <MDBCol size='2'>
        <img src={Icon} alt="" className='w-50 rounded-full' />
      </MDBCol>
    </MDBRow>
  )
}

export default TopBar