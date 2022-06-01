import React, { useState, useEffect } from "react";
import axios from "axios";
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
import {
  nullcheck,
  validateEmail,
  validateName,
  validateNumber,
} from "../functionComponent/FunctionComponent";
import { ApiRequest } from "../common/ApiRequest";

const RegistrationIndex = () => {
  const [errmsg, setErrmsg] = useState([]);
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [NRC, setNRC] = useState("");
  const [radioChk, setRadioChk] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [radioChkRsul, setRadioChkRsul] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [StudentId, setStudentId] = useState("");
  const [careerPath, setCareerPath] = useState([]);
  const [deptValue, setDeptValue] = useState("");
  const [deptData, setDeptData] = useState([]);
  const [skill, setSkill] = useState([]);
  const [chkData, setChkData] = useState([]);
  const [chkID, setChkID] = useState("");
  const [chkName, setChkName] = useState([]);
  const [chkChange, setChkChange] = useState([]);

  const radioChange = (id, name) => {
    setRadioChk(id);
    setRadioChkRsul(name);
  };
  const deptChange = (e) => {
    setDeptValue(e.target.value);
  };

  const saveClick = () => {
    let error = [];

    if (!nullcheck(name)) {
      error.push("Please Enter Name");
    } else if (!validateName(name)) {
      error.push("Invalid name");
    }

    if (!nullcheck(fatherName)) {
      error.push("Please Enter Father Name");
    } else if (!validateName(fatherName)) {
      error.push("Invalid Father Name");
    }

    if (!nullcheck(NRC)) {
      error.push("Please Enter NRC");
    }

    if (!nullcheck(phno) && !validateNumber(phno)) {
      error.push("Please Enter valid phone number");
    }

    if (!nullcheck(email)) {
      error.push(" Please Enter Email");
    } else if (!validateEmail(email)) {
      error.push("Invalid Email");
    }

    if (!nullcheck(address)) {
      error.push("Please Enter Address");
    }

    if (!nullcheck(radioChk)) {
      error.push("Please Select Gender");
    }
    setErrmsg(error);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const Reset = () => {
    setName("");
    setFatherName("");
    setNRC("");
    setAddress("");
    setPhno("");
    setEmail("");
    setDeptValue("");
    // setDeptData("");
    setErrmsg("");
    setRadioChk("");
    setSelectedDate(new Date());
    // setImagePreviewUrl("/avatars/1.jpg");
    chkData.map((i, index) => {
      i.is_checked = false;
    });
  };

  useEffect(() => {
    systemFormLoad();
  }, []);

  const systemFormLoad = async () => {
    let obj = { method: "get", url: "student-registeration/formload" };
    let response = await ApiRequest(obj);
    if (response.data.status == "NG") {
      setErrmsg([response.data.data.message]);
    } else {
      setErrmsg([]);
      setStudentId(response.data.student_id);
      setCareerPath(response.data.career_path);
      setSkill(response.data.skill);
      // console.log("response", response);
    }
  };
  return (
    <>
      {/* <CRow>
        <CCol className="col-3 regSys">Student Registration From System</CCol>
        <CCol className="col-3 regExcel">Student Registration From Excel</CCol>
      </CRow> */}
      <div>
        {errmsg.length > 0 &&
          errmsg.map((e, index) => {
            return (
              <p style={{ color: "red", lineHeight: "0.5rem" }} key={index}>
                {e}
              </p>
            );
          })}
      </div>
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
        <StudentRegSys
          errmsg={errmsg}
          name={name}
          setName={setName}
          fatherName={fatherName}
          setFatherName={setFatherName}
          phno={phno}
          setPhno={setPhno}
          email={email}
          setEmail={setEmail}
          NRC={NRC}
          setNRC={setNRC}
          radioChk={radioChk}
          deptChange={deptChange}
          address={address}
          radioChkRsul={radioChkRsul}
          radioChange={radioChange}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          careerPath={careerPath}
          skill={skill}
          saveClick={saveClick}
          systemFormLoad={systemFormLoad}
          StudentId={StudentId}
          apiData={apiData}
          deptValue={deptValue}
          deptData={deptData}
          setDeptData={setDeptData}
          setChkData={setChkData}
          chkID={chkID}
          setChkID={setChkID}
          chkName={chkName}
          chkChange={chkChange}
          setChkName={setChkName}
        />
      </CTabs>
    </>
  );
};

export default RegistrationIndex;
