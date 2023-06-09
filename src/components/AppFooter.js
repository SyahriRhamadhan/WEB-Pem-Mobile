import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className='bg-[#FBFBFB] border-0 text-center mt-5'>
      <p className='text-center justify-center items-center m-auto mb-5'>&copy; Copyright 2022 by Flightgo. All right Reserved </p>
    </CFooter>
  )
}

export default React.memo(AppFooter)
