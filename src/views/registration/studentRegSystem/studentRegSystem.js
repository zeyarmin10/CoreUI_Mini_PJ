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
  validateName,
  validateEmail,
  validateNumber,
} from "../../functionComponent/FunctionComponent";

const StudentRegSys = (props) => {
  const [name, setName] = useState("");

  const [image, setImage] = useState("./avatars/user.png");
  const saveClick = () => {
    if (!validateName(name)) {
      alert("name should only char");
    }
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
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
  const [radioChk, setRadioChk] = useState([]);
  const [radioChkRsul, setRadioChkRsul] = useState([]);

  const radioChange = (id, name) => {
    setRadioChk(id);
    setRadioChkRsul(name);
  };
  const [deptData, setDeptData] = useState([
    {
      id: 1,
      career_name: "Front End",
    },
    {
      id: 2,
      career_name: "Back End",
    },
  ]);
  const [deptValue, setDeptValue] = useState("");
  let deptChange = (e) => {
    setDeptValue(e.target.value);
  };

  const [chkData, setChkData] = useState([
    {
      id: 1,
      skill_name: "Java",
    },
    {
      id: 2,
      skill_name: "PHP",
    },
    {
      id: 3,
      skill_name: "C++",
    },
    {
      id: 4,
      skill_name: "React",
    },
    {
      id: 5,
      skill_name: "Laravel",
    },
    {
      id: 6,
      skill_name: "Android",
    },
  ]);
  const [chkID, setChkID] = useState("");
  const [chkName, setChkName] = useState([]);

  let chkChange = (e) => {
    let value = e.target.value;

    let checked = e.target.checked;

    let skill_list = [];

    let data = chkData.map((obj) =>
      obj.id === parseInt(value) ? { ...obj, is_checked: checked } : obj
    );

    for (let i = 0; i < data.length; i++) {
      if (data[i].is_checked === true) {
        skill_list.push(data[i].name, ", ");
      }
    }

    console.log(skill_list);

    setChkName(skill_list);

    setChkData(data);
  };

  return (
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
              placeholder="00020"
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
                        checked={radioChk === data.id ? true : false}
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
                <CSelect onChange={props.deptChange} value={props.deptValue}>
                  <option key="" value="">
                    ---Select Department---
                  </option>
                  {deptData != "" &&
                    deptData.map((data, index) => {
                      return (
                        <option key={index} value={data.career_name}>
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
              {chkData != "" &&
                chkData.map((data, index) => {
                  return (
                    <CCol lg="4" key={index}>
                      <CLabel>
                        <CInputCheckbox
                          className="checkBox"
                          key={index} //id={"skill"+ data.id}
                          value={data.id}
                          checked={data.is_checked == true}
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
          <Link to="/">Go to &gt;&gt;</Link>
        </CRow>
      </CTabPane>
    </CTabContent>
  );
};

export default StudentRegSys;
