import React from "react";

const StudentRegistration = React.lazy(() =>
  import("./views/registration/RegistrationIndex")
);
// const  StudentRegistrationFromExcel = React.lazy(() => import('./views/registration/StudentRegistrationFromExcel'));
const StudentList = React.lazy(() => import("./views/list/ListIndex"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  {
    path: "/registration",
    name: "Student Registration",
    component: StudentRegistration,
  },
  // { path: '/registration-from-excel', name: 'Student Registration From Excel', component: StudentRegistrationFromExcel },
  { path: "/list", exact: true, name: "Student List", component: StudentList },
];

export default routes;
