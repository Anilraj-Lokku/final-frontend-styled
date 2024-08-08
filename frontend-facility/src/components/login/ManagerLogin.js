// ManagerLogin.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthService from "../../services/AuthService";
// import "../styles/managerlogin.css";

// const ManagerLogin = () => {
//  const [username, setUsername] = useState("");
//  const [password, setPassword] = useState("");
//  const navigation = useNavigate();
//  const handleLogin = () => {
//   AuthService.login(username, password, "Manager")
//    .then((response) => {
//     console.log("Manager logged in:", response);
//     navigation("/managerview");
//    })
//    .catch((error) => {
//     console.error("Login error:", error);
//    });
//  };

//  return (
//   <div>
//    <nav class="navbar navbar-expand-lg  fixed-top">
//     <div class="container">
//      <a class="navbar-brand " href="/">
//       Apartment Facility
//      </a>
//      <button
//       class="navbar-toggler"
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasNavbar"
//       aria-controls="offcanvasNavbar"
//       aria-label="Toggle navigation"
//      >
//       <span class="navbar-toggler-icon"></span>
//      </button>
//      <div
//       class="offcanvas offcanvas-end"
//       tabindex="-1"
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//      >
//       <div class="offcanvas-header">
//        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
//         Apartment Facility
//        </h5>
//        <button
//         type="button"
//         class="btn-close"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//        ></button>
//       </div>
//       <div class="offcanvas-body">
//        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
//         <li class="nav-item">
//          <a class="nav-link active " aria-current="page" href="/">
//           Home
//          </a>
//         </li>
//         <li class="nav-item">
//          <a class="nav-link " href="page.html">
//           Signup
//          </a>
//         </li>
//        </ul>
//       </div>
//      </div>
//     </div>
//    </nav>
//    <section class="form d-flex justify-content-center align-items-center">
//     <div class="container">
//      <div class="row d-flex justify-content-center align-items-center">
//       <div class="col-md-6">
//        <form class="p-4 d-flex flex-column  align-items-center">
//         <h5 class="mb-4">Welcome to Manager Login!</h5>
//         <input
//          type="text"
//          class="form-control mb-3"
//          placeholder="Email"
//          name="email"
//          required="required"
//          value={username}
//          onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//          type="password"
//          class="form-control mb-3"
//          placeholder="Password"
//          name="password"
//          required="required"
//          value={password}
//          onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//          type="button"
//          class="btn btn-dark mb-3"
//          onClick={handleLogin}
//          value="Login"
//         />
//        </form>
//       </div>
//      </div>
//     </div>
//    </section>
//   </div>
//  );
// };

// export default ManagerLogin;

//Using Formik and Yup

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "../../services/AuthService";
import "../styles/managerlogin.css";
import { useNavigate } from "react-router-dom";

const ManagerLogin = () => {
 const navigate = useNavigate();

 const formik = useFormik({
  initialValues: {
   username: "",
   password: "",
  },
  validationSchema: Yup.object({
   username: Yup.string().required("Required"),
   password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  }),
  onSubmit: (values) => {
   AuthService.login(values.username, values.password, "Manager")
    .then((response) => {
     console.log("Manager logged in:", response);
     navigate("/managerview");
    })
    .catch((error) => {
     console.error("Login error:", error);
    });
  },
 });

 return (
  <div>
   <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
     <a className="navbar-brand" href="/">
      Apartment Facility
     </a>
     <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
     >
      <span className="navbar-toggler-icon"></span>
     </button>
     <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
     >
      <div className="offcanvas-header">
       <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
        Apartment Facility
       </h5>
       <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
       ></button>
      </div>
      <div className="offcanvas-body">
       <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/">
          Home
         </a>
        </li>
        <li className="nav-item">
         <a className="nav-link" href="page.html">
          Signup
         </a>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </nav>
   <section className="form d-flex justify-content-center align-items-center">
    <div className="container">
     <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-6">
       <form
        className="p-4 d-flex flex-column align-items-center"
        onSubmit={formik.handleSubmit}
       >
        <h5 className="mb-4">Welcome to Manager Login!</h5>
        <input
         type="text"
         className={`form-control mb-3 ${
          formik.touched.username && formik.errors.username ? "is-invalid" : ""
         }`}
         placeholder="Username"
         name="username"
         value={formik.values.username}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
         <div className="invalid-feedback mb-3">{formik.errors.username}</div>
        ) : null}
        <input
         type="password"
         className={`form-control mb-3 ${
          formik.touched.password && formik.errors.password ? "is-invalid" : ""
         }`}
         placeholder="Password"
         name="password"
         value={formik.values.password}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
         <div className="invalid-feedback mb-3">{formik.errors.password}</div>
        ) : null}
        <button type="submit" className="btn btn-dark mb-3">
         Login
        </button>
       </form>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};
export default ManagerLogin;

// ManagerLogin.js
// import React, { useState } from 'react';
// import AuthService from '../../services/AuthService';

// const ManagerLogin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         AuthService.login(username, password, 'Manager')
//             .then(response => {
//                 console.log('Manager logged in:', response);
//             })
//             .catch(error => {
//                 console.error('Login error:', error);
//             });
//     };

//     return (
//         <div>
//             <h2>Manager Login</h2><br/>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br/><br/>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br/><br/>
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// };

// export default ManagerLogin;
