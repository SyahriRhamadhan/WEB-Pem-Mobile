import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilMenu } from '@coreui/icons'

import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4" >
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1 flex items-center w-1/3"
        >
          <CIcon icon={cilMenu} size="lg" className='mr-4' onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}/>
          <CFormInput type="search" placeholder="Search" aria-label="default input example" />
        </CHeaderToggler>        
        <CHeaderNav className="ms-3">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
