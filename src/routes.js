import React from 'react'

const ListOrder = React.lazy(() => import('./views/ListOrder/ListOrder'))
const EditData = React.lazy(() => import('./views/Ticket/EditData'))
const TicketSchedule = React.lazy(() => import('./views/Ticket/TicketSchedule'))
const AddNewData = React.lazy(() => import('./views/Ticket/AddNewData'))
const UpdateOrder = React.lazy(() => import('./views/ListOrder/UpdateOrder'))
const UserDetail = React.lazy(() => import('./views/ListOrder/UserDetail'))
const routes = [
  { path: '/listorder', exact: true, name: 'List Order Ticket' },
  { path: '/listorder', name: 'List Order', element: ListOrder },
  { path: '/listorder/userdetail/:id', name: 'User Detail', element: UserDetail },
  { path: '/addnewdata', name: 'Add New Data', element: AddNewData },
  { path: '/updateorder/:id', name:'Update Order', element: UpdateOrder},
  { path: '/ticketschedule', name: 'Ticket Schedule', element: TicketSchedule },
  { path: '/editdata/:id', name: 'Edit Data', element: EditData },
]

export default routes
