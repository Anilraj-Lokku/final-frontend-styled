// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ResidentRegistrationService from "../../services/ResidentRegistrationService";
// import { FaUserPlus } from "react-icons/fa";

// const ResidentRegistrationForm = () => {
//  const [id, setId] = useState("");
//  const [userName, setUsername] = useState("");
//  const [password, setPassword] = useState("");
//  const [status, setStatus] = useState("");
//  const [name, setName] = useState("");
//  const [flatNo, setFlatNo] = useState("");
//  const [flatType, setFlatType] = useState("");
//  const [phone, setPhone] = useState("");
//  const [email, setEmail] = useState("");
//  const [picture, setPicture] = useState("");
//  const [ResidentData, setResidentData] = useState();
//  const navigation = useNavigate();

//  const inputClassName = "form-control mb-3";

//  function fnCreate() {
//   const resident = {
//    userName,
//    password,
//    role: "Resident",
//    status,
//    name,
//    flatNo,
//    flatType,
//    phone,
//    email,
//    picture,
//   };

//   ResidentRegistrationService.fnCreateResident(resident)
//    .then((response) => {
//     console.log(response.data);
//     navigation("/residentcreationmessage");
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  function fnUpdate() {
//   const resident = {
//    id,
//    userName,
//    password,
//    role: "Resident",
//    status,
//    name,
//    flatNo,
//    flatType,
//    phone,
//    email,
//    picture,
//   };

//   ResidentRegistrationService.fnUpdateResident(id)
//    .then((response) => {
//     console.log(response.data);
//     navigation("/residentupdatemessage");
//     // window.location.reload(false);
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  function fnDelete() {
//   ResidentRegistrationService.fnDeleteResident(id)
//    .then((response) => {
//     console.log("response data delete is running");
//     navigation("/register-resident");
//     console.log(response.data);
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  return (
//   <div>
//    <nav className="navbar navbar-expand-lg fixed-top">
//     <div className="container">
//      <a className="navbar-brand" href="/">
//       Apartment Facility
//      </a>
//      <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasNavbar"
//       aria-controls="offcanvasNavbar"
//       aria-label="Toggle navigation"
//      >
//       <span className="navbar-toggler-icon"></span>
//      </button>
//      <div
//       className="offcanvas offcanvas-end"
//       tabIndex="-1"
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//      >
//       <div className="offcanvas-header">
//        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//         Apartment Facility
//        </h5>
//        <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//        ></button>
//       </div>
//       <div className="offcanvas-body">
//        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//         <li className="nav-item">
//          <a className="nav-link active" aria-current="page" href="/">
//           Home
//          </a>
//         </li>
//         <li className="nav-item">
//          <a className="nav-link" href="page.html">
//           Signup
//          </a>
//         </li>
//        </ul>
//       </div>
//      </div>
//     </div>
//    </nav>

//    <section className="form d-flex align-items-center justify-content-center mt-5">
//     <div className="container">
//      <div className="row justify-content-center">
//       <div className="col-md-6">
//        <form className="p-4">
//         <h2>Create account</h2>
//         <h5 className="mb-4">Welcome to Resident Signup!</h5>
//         <input
//          type="text"
//          className={inputClassName}
//          placeholder="Id"
//          name="Id"
//          id="id"
//          onChange={(event) => setId(event.target.value)}
//         />
//         <input
//          type="text"
//          className={inputClassName}
//          placeholder="Username"
//          name="username"
//          id="userName"
//          onChange={(event) => setUsername(event.target.value)}
//         />
//         <input
//          type="password"
//          className={inputClassName}
//          placeholder="Password"
//          name="password"
//          id="password"
//          onChange={(event) => setPassword(event.target.value)}
//         />
//         <input
//          type="text"
//          className={inputClassName}
//          placeholder="Name"
//          name="name"
//          id="name"
//          onChange={(event) => setName(event.target.value)}
//         />
//         <input
//          type="text"
//          className={inputClassName}
//          placeholder="Flat No"
//          name="Flat No"
//          id="flatNo"
//          onChange={(event) => setFlatNo(event.target.value)}
//         />
//         <input
//          type="text"
//          className={inputClassName}
//          placeholder="Flat Type"
//          name="Flat Type"
//          id="flatType"
//          onChange={(event) => setFlatType(event.target.value)}
//         />
//         <input
//          type="text"
//          className={inputClassName}
//          placeholder="Phone"
//          name="Phone"
//          id="phone"
//          onChange={(event) => setPhone(event.target.value)}
//         />
//         <input
//          type="text"
//          className={inputClassName}
//          placeholder="Email"
//          name="email"
//          id="email"
//          onChange={(event) => setEmail(event.target.value)}
//         />
//         <input
//          type="text"
//          className={inputClassName}
//          placeholder="Picture Link"
//          name="Picture Link"
//          id="picture"
//          onChange={(event) => setPicture(event.target.value)}
//         />

//         <button
//          type="button"
//          className="btn btn-dark mb-3 me-3"
//          onClick={fnCreate}
//         >
//          <FaUserPlus className="me-2" />
//          Create Resident
//         </button>
//         <input
//          type="button"
//          className="btn btn-dark mb-3 me-3"
//          value="Update Resident"
//          onClick={fnUpdate}
//         />
//         <input
//          type="button"
//          className="btn btn-dark mb-3"
//          value="Delete Resident"
//          onClick={fnDelete}
//         />
//        </form>
//       </div>
//      </div>
//     </div>
//    </section>
//   </div>
//  );
// };

// export default ResidentRegistrationForm;

// import { useState } from "react";
// import ResidentRegistrationService from "../../services/ResidentRegistrationService";
// import { useNavigate } from "react-router-dom";
// import "../styles/residentRegistration.css"; // Ensure this path is correct

// const ResidentRegistrationForm = () => {
//  const [id, setId] = useState("");
//  const [userName, setUsername] = useState("");
//  const [password, setPassword] = useState("");
//  const [status, setStatus] = useState("");
//  const [name, setName] = useState("");
//  const [flatNo, setFlatNo] = useState("");
//  const [flatType, setFlatType] = useState("");
//  const [phone, setPhone] = useState("");
//  const [email, setEmail] = useState("");
//  const [picture, setPicture] = useState("");
//  const navigation = useNavigate();

//  const inputClassName = "form-control mb-3";

//  const fnCreate = () => {
//   const resident = {
//    userName,
//    password,
//    role: "Resident",
//    status,
//    name,
//    flatNo,
//    flatType,
//    phone,
//    email,
//    picture,
//   };

//   ResidentRegistrationService.fnCreateResident(resident)
//    .then((response) => {
//     console.log(response.data);
//     navigation("/residentcreationmessage");
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  };

//  const fnUpdate = () => {
//   const resident = {
//    id,
//    userName,
//    password,
//    role: "Resident",
//    status,
//    name,
//    flatNo,
//    flatType,
//    phone,
//    email,
//    picture,
//   };

//   ResidentRegistrationService.fnUpdateResident(id, resident)
//    .then((response) => {
//     console.log(response.data);
//     navigation("/residentupdatemessage");
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  };

//  const fnDelete = () => {
//   ResidentRegistrationService.fnDeleteResident(id)
//    .then((response) => {
//     console.log("Resident deleted:", response.data);
//     navigation("/register-resident");
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  };

//  return (
//   <div>
//    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
//     <div className="container">
//      <a className="navbar-brand" href="/">
//       Apartment Facility
//      </a>
//      <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasNavbar"
//       aria-controls="offcanvasNavbar"
//       aria-label="Toggle navigation"
//      >
//       <span className="navbar-toggler-icon"></span>
//      </button>
//      <div
//       className="offcanvas offcanvas-end"
//       tabIndex="-1"
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//      >
//       <div className="offcanvas-header">
//        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//         Apartment Facility
//        </h5>
//        <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//        ></button>
//       </div>
//       <div className="offcanvas-body">
//        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//         <li className="nav-item">
//          <a className="nav-link active" aria-current="page" href="/">
//           Home
//          </a>
//         </li>
//         <li className="nav-item">
//          <a className="nav-link" href="/signup">
//           Signup
//          </a>
//         </li>
//        </ul>
//       </div>
//      </div>
//     </div>
//    </nav>

//    <section className="form-section d-flex align-items-center justify-content-center mt-5">
//     <div className="container">
//      <div className="row justify-content-center">
//       <div className="col-md-8 col-lg-6">
//        <form className="p-4 bg-light rounded shadow-sm">
//         <h2 className="mb-4 text-center">Resident Registration</h2>
//         <div className="form-group">
//          <input
//           type="text"
//           className={inputClassName}
//           placeholder="ID"
//           onChange={(event) => setId(event.target.value)}
//          />
//          <input
//           type="text"
//           className={inputClassName}
//           placeholder="Username"
//           onChange={(event) => setUsername(event.target.value)}
//          />
//          <input
//           type="password"
//           className={inputClassName}
//           placeholder="Password"
//           onChange={(event) => setPassword(event.target.value)}
//          />
//          <input
//           type="text"
//           className={inputClassName}
//           placeholder="Name"
//           onChange={(event) => setName(event.target.value)}
//          />
//          <input
//           type="text"
//           className={inputClassName}
//           placeholder="Flat No"
//           onChange={(event) => setFlatNo(event.target.value)}
//          />
//          <input
//           type="text"
//           className={inputClassName}
//           placeholder="Flat Type"
//           onChange={(event) => setFlatType(event.target.value)}
//          />
//          <input
//           type="text"
//           className={inputClassName}
//           placeholder="Phone"
//           onChange={(event) => setPhone(event.target.value)}
//          />
//          <input
//           type="email"
//           className={inputClassName}
//           placeholder="Email"
//           onChange={(event) => setEmail(event.target.value)}
//          />
//          <input
//           type="text"
//           className={inputClassName}
//           placeholder="Picture Link"
//           onChange={(event) => setPicture(event.target.value)}
//          />
//         </div>
//         <div className="d-flex justify-content-between mt-4">
//          <button type="button" className="btn btn-primary" onClick={fnCreate}>
//           Create Resident
//          </button>
//          <button type="button" className="btn btn-warning" onClick={fnUpdate}>
//           Update Resident
//          </button>
//          <button type="button" className="btn btn-danger" onClick={fnDelete}>
//           Delete Resident
//          </button>
//         </div>
//        </form>
//       </div>
//      </div>
//     </div>
//    </section>
//   </div>
//  );
// };

// export default ResidentRegistrationForm;

import { useState } from "react";
import ResidentRegistrationService from "../../services/ResidentRegistrationService";
import { useNavigate } from "react-router-dom";
import "../styles/residentRegistration.css"; // Ensure this path is correct

const ResidentRegistrationForm = () => {
 const [id, setId] = useState("");
 const [userName, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [status, setStatus] = useState("");
 const [name, setName] = useState("");
 const [flatNo, setFlatNo] = useState("");
 const [flatType, setFlatType] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [picture, setPicture] = useState("");
 const navigation = useNavigate();

 const inputClassName = "form-control mb-3";

 const fnCreate = () => {
  const resident = {
   userName,
   password,
   role: "Resident",
   status,
   name,
   flatNo,
   flatType,
   phone,
   email,
   picture,
  };

  ResidentRegistrationService.fnCreateResident(resident)
   .then((response) => {
    console.log(response.data);
    navigation("/residentcreationmessage");
   })
   .catch((error) => {
    console.log(error);
   });
 };

 const fnUpdate = () => {
  const resident = {
   id,
   userName,
   password,
   role: "Resident",
   status,
   name,
   flatNo,
   flatType,
   phone,
   email,
   picture,
  };

  ResidentRegistrationService.fnUpdateResident(id, resident)
   .then((response) => {
    console.log(response.data);
    navigation("/residentupdatemessage");
   })
   .catch((error) => {
    console.log(error);
   });
 };

 const fnDelete = () => {
  ResidentRegistrationService.fnDeleteResident(id)
   .then((response) => {
    console.log("Resident deleted:", response.data);
    navigation("/register-resident");
   })
   .catch((error) => {
    console.log(error);
   });
 };

 return (
  <div>
   <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
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
         <a className="nav-link" href="/signup">
          Signup
         </a>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </nav>

   <section className="form-section d-flex align-items-center justify-content-center mt-5">
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
       <form className="p-4 bg-light rounded shadow-sm">
        <h2 className="mb-4 text-center">Resident Registration</h2>
        <div className="form-group">
         <input
          type="text"
          className={inputClassName}
          placeholder="ID"
          onChange={(event) => setId(event.target.value)}
         />
         <input
          type="text"
          className={inputClassName}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
         />
         <input
          type="password"
          className={inputClassName}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
         />
         <input
          type="text"
          className={inputClassName}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
         />
         <input
          type="text"
          className={inputClassName}
          placeholder="Flat No"
          onChange={(event) => setFlatNo(event.target.value)}
         />
         <input
          type="text"
          className={inputClassName}
          placeholder="Flat Type"
          onChange={(event) => setFlatType(event.target.value)}
         />
         <input
          type="text"
          className={inputClassName}
          placeholder="Phone"
          onChange={(event) => setPhone(event.target.value)}
         />
         <input
          type="email"
          className={inputClassName}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
         />
         <input
          type="text"
          className={inputClassName}
          placeholder="Picture Link"
          onChange={(event) => setPicture(event.target.value)}
         />
        </div>
        <div className="d-flex justify-content-between mt-4">
         <button type="button" className="btn btn-primary" onClick={fnCreate}>
          Create Resident
         </button>
         {/* <button type="button" className="btn btn-warning" onClick={fnUpdate}>
          Update Resident
         </button>
         <button type="button" className="btn btn-danger" onClick={fnDelete}>
          Delete Resident
         </button> */}
        </div>
       </form>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};

export default ResidentRegistrationForm;
