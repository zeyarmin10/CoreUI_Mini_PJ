import React, { useState } from "react";
import {
  CCol,
  CRow,
  CTabs,
  CTabContent,
  CTabPane,
  CImg,
  CLabel,
  CInput,
  CTextarea,
  CInputRadio,
  CDataTable,
  CSelect,
  CInputCheckbox,
  CButton,
} from "@coreui/react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import { Link } from "react-router-dom";
import {
  nullcheck,
  validateName,
  validateEmail,
  validateNumber,
} from "../../functionComponent/FunctionComponent";

const StudentRegSys = (props) => {
  const [image, setImage] = useState("./avatars/user.png");

  const {
    errmsg,
    name,
    setName,
    fatherName,
    setFatherName,
    phno,
    setPhno,
    email,
    setEmail,
    NRC,
    setNRC,
    radioChk,
    deptChange,
    address,
    radioChkRsul,
    radioChange,
    selectedDate,
    setSelectedDate,
    careerPath,
    skill,
    saveClick,
    systemFormLoad,
    StudentId,
    apiData,
    deptValue,
    deptData,
    setDeptData,
    setChkData,
    chkID,
    setChkID,
    chkName,
    chkChange,
    setChkName,
  } = props;

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  let radioData = [
    {
      id: "1",
      name: "Male",
    },
    {
      id: "2",
      name: "Female",
    },
  ];

  // let chkChange = (e) => {
  //   console.log("checkedSkill", skill_list);
  //   console.log(chkData);
  //   let value = e.target.value;
  //   let checked = e.target.checked;
  //   let skill_list = [];

  //   let data = props.skill.map((obj) =>
  //     obj.id === parseInt(value) ? { ...obj, is_checked: checked } : obj
  //   );

  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].is_checked == true) {
  //       skill_list.push(data[i].name, ", ");
  //     }
  //   }
  //   // console.log(skill_list);
  //   setChkName(skill_list);
  //   setChkData(data);
  // };

  return (
    <>
      <CTabContent className="RegSysContent">
        <CTabPane data-tab="regSys">
          <CRow>
            <h1>Student Registration Form</h1>
          </CRow>
          <hr />
          <CRow>
            <CLabel htmlFor="fileUpload">
              <div className="" htmlFor="fileUpload">
                <CImg src={image} className="userImg" htmlFor="fileUpload" />
              </div>
              <input
                type="file"
                id="fileUpload"
                name="ImageStyle"
                onClick={onImageChange}
                hidden
              />
            </CLabel>
          </CRow>
          <CRow className="" style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel for="id">ID :</CLabel>
            </CCol>
            <CCol lg="3">
              <CInput
                className="xs-12 sm-12 md-6 lg-6"
                name="id"
                placeholder=""
                value={StudentId}
                readOnly
              />
            </CCol>
          </CRow>
          <CRow className="" style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel for="id">Name :</CLabel>
            </CCol>
            <CCol lg="3">
              <CInput
                className="xs-12 sm-12 md-6 lg-6"
                name="id"
                placeholder="Please enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="" style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel for="fathername">Father's Name :</CLabel>
            </CCol>
            <CCol lg="3">
              <CInput
                className="xs-12 sm-12 md-6 lg-6"
                name="fathername"
                placeholder="Please enter father's name"
                onChange={(e) => setFatherName(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="" style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel for="phoneno">Phone No :</CLabel>
            </CCol>
            <CCol lg="3">
              <CInput
                className=""
                name="phoneno"
                placeholder="Please enter phone number"
                onChange={(e) => setPhno(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="" style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel for="nrc">NRC :</CLabel>
            </CCol>
            <CCol lg="3">
              <CInput
                className=""
                name="nrc"
                placeholder="Please enter NRC number"
                onChange={(e) => setNRC(e.target.value)}
              />
            </CCol>
          </CRow>

          <CRow className="" style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel for="email">Email :</CLabel>
            </CCol>
            <CCol lg="3">
              <CInput
                className=""
                name="email"
                placeholder="Please enter email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="" style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel for="name">Gender :</CLabel>
            </CCol>
            <CCol lg="3" className="">
              <CRow className="radiobox">
                {radioData.map((data) => {
                  return (
                    <CCol lg="3">
                      <CLabel>
                        <CInputRadio
                          name="male"
                          value={data.id}
                          checked={props.radioChk === data.id ? true : false}
                          onChange={() => radioChange(data.id, data.name)}
                        />
                        {data.name}
                      </CLabel>
                    </CCol>
                  );
                })}
              </CRow>
            </CCol>
          </CRow>
          <CRow style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel>Date of Birth :</CLabel>
            </CCol>
            <CCol lg="3">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  placeholder="2018/10/10"
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  format="yyyy/MM/dd"
                  style={{ width: "100%" }}
                />
              </MuiPickersUtilsProvider>
              {/* <CInput type="date" /> */}
            </CCol>
          </CRow>

          <CRow className="" style={{ paddingTop: "1rem" }}>
            <CCol lg="2">
              <CLabel for="address">Address :</CLabel>
            </CCol>
            <CCol lg="3">
              <CTextarea
                type="text"
                placeholder="Please enter address"
              ></CTextarea>
            </CCol>
          </CRow>
          <CRow style={{ paddingTop: "1rem" }}>
            <CCol lg="2">Career Path :</CCol>
            <CCol lg="3">
              <CRow lg="12">
                <CCol lg="12">
                  <CSelect onChange={deptChange} value={deptValue}>
                    <option key="" value="">
                      ---Select Department---
                    </option>
                    {careerPath != "" &&
                      careerPath.map((data, index) => {
                        return (
                          <option key={index} value={data.id}>
                            {data.career_name}
                          </option>
                        );
                      })}
                  </CSelect>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          <CRow style={{ paddingTop: "1rem" }}>
            <CCol lg="2">Skills :</CCol>
            <CCol lg="3">
              <CRow className="checkBoxContainer">
                {skill != "" &&
                  skill.map((data, index) => {
                    return (
                      <CCol lg="4" key={index}>
                        <CLabel>
                          <CInputCheckbox
                            className="checkBox"
                            key={index} //id={"skill"+ data.id}
                            value={data.id}
                            checked={data.is_checked}
                            onChange={chkChange}
                          />
                          {data.skill_name}
                        </CLabel>
                      </CCol>
                    );
                  })}
              </CRow>
            </CCol>
          </CRow>
          <CRow className="btnSection">
            <CCol lg="1">
              <CButton className="add-btn" onClick={saveClick}>
                Save
              </CButton>
            </CCol>
            <CCol lg="1">
              <CButton className="add-btn">Reset</CButton>
            </CCol>
          </CRow>
          <CRow style={{ marginBottom: "2rem" }}>
            <Link to="/">Go To &gt;&gt;</Link>
          </CRow>
        </CTabPane>
      </CTabContent>
    </>
  );
};

export default StudentRegSys;
