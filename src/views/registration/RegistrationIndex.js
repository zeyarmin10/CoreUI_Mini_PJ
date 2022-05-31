import React, { useState, useEffect } from "react";
import {
  CCol,
  CRow,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CImg,
} from "@coreui/react";
import StudentRegSys from "./studentRegSystem/studentRegSystem";
// import StudentRegExl from "./";
import StudentRegExl from "./studentRegExcel/studentRegExcel";
import { validate } from "@material-ui/pickers";

const RegistrationIndex = () => {
  return (
    <>
      {/* <CRow>
        <CCol className="col-3 regSys">Student Registration From System</CCol>
        <CCol className="col-3 regExcel">Student Registration From Excel</CCol>
      </CRow> */}
      <CTabs activeTab="regSys">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="regSys">
              Student Registration From System
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="regExcel">
              Student Registration From Excel
            </CNavLink>
          </CNavItem>
        </CNav>
        <StudentRegSys />
      </CTabs>
    </>
  );
};

export default RegistrationIndex;
