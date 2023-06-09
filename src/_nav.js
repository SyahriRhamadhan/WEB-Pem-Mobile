import React from 'react'
import { CNavGroup, CNavItem } from '@coreui/react'
import IconNavbar from './components/assets/grid.png'

const _nav = [
  
  {
    component: CNavGroup,
    name: 'CUSTOMER',
    to: '/',
    icon: <img src={IconNavbar} alt='' className='w-6 mx-6'/>,
    items: [
      {
        component: CNavItem,
        name: 'List Order',
        to: '/listorder',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'TICKET LISITNG',
    to: '/',
    icon: <img src={IconNavbar} alt='' className='w-6 mx-6'/>,
    items: [
      {
        component: CNavItem,
        name: 'Ticket Schedule',
        to: '/ticketschedule',
      },
    ],
  },
  
]

export default _nav
