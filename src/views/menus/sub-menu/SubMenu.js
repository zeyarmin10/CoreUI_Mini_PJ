import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow
} from '@coreui/react'
import routes from '../../../routes'

const SubMenu = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Header
          </CCardHeader>
          <CCardBody>
            <h6>Hello World!</h6>
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SubMenu
