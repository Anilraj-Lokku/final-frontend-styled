// import { useEffect, useState } from "react";
// import ManagerServiceRegistration from "../../services/ManagerServiceRegistration";
// import "../styles/residenttable.css";
// import { FaTrashAlt, FaEdit, FaEye, FaTimes, FaCheck } from "react-icons/fa";

// const ResidentTable = () => {
//  const [residents, setResidents] = useState([]);
//  const [id, setId] = useState();

//  useEffect(() => {
//   ManagerServiceRegistration.getAllResidents()
//    .then((response) => {
//     setResidents(response.data);
//    })
//    .catch((error) => {
//     console.error("There was an error fetching the resident data!", error);
//    });
//  }, []);

//  const updateStatus = (userName) => {
//   ManagerServiceRegistration.approveResident(userName)
//    .then((response) => {
//     setResidents((prevResidents) =>
//      prevResidents.map((resident) =>
//       resident.userName === userName
//        ? { ...resident, status: "Approved" }
//        : resident
//      )
//     );
//    })
//    .catch((error) => {
//     console.error("There was an error approving the resident status!", error);
//    });
//  };

//  const deleteStatus = (userName) => {
//   ManagerServiceRegistration.declineResident(userName)
//    .then((response) => {
//     setResidents((prevResidents) =>
//      prevResidents.map((resident) =>
//       resident.userName === userName
//        ? { ...resident, status: "Declined" }
//        : resident
//      )
//     );
//    })
//    .catch((error) => {
//     console.error("There was an error declining the resident status!", error);
//    });
//  };

//  const deleteResident = (id) => {
//   ManagerServiceRegistration.deleteResident(id)
//    .then((response) => {
//     setResidents((prevResidents) =>
//      prevResidents.filter((resident) => resident.id !== id)
//     );
//    })
//    .catch((error) => {
//     console.error("There was an error deleting the resident!", error);
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

//    <div class="ResidentTable  mt-5 ">
//     <h1 class="mt-5">Residents List</h1>
//     <table className="table table-striped table-bordered shadow mt-5">
//      <thead>
//       <tr>
//        <th>ID</th>
//        <th>Username</th>
//        <th>Status</th>
//        <th>Name</th>
//        <th>Flat No</th>
//        <th>Flat Type</th>
//        <th>Phone</th>
//        <th>Email</th>
//        <th>Picture</th>
//        <th>Actions</th>
//       </tr>
//      </thead>
//      <tbody>
//       {residents.map((resident) => (
//        <tr key={resident.id}>
//         <td>{resident.id}</td>
//         <td>{resident.userName}</td>
//         <td>{resident.status}</td>
//         <td>{resident.name}</td>
//         <td>{resident.flatNo}</td>
//         <td>{resident.flatType}</td>
//         <td>{resident.phone}</td>
//         <td>{resident.email}</td>
//         <td>
//          <img
//           src={resident.picture}
//           alt="Resident"
//           style={{ width: "100px", height: "100px" }}
//          />
//         </td>
//         <td class="d-flex">
//          <button
//           className="btn btn-dark mb-1"
//           onClick={() => updateStatus(resident.userName)}
//           disabled={resident.status === "Approved"}
//          >
//           {/* Approve */}
//           <FaCheck />
//          </button>
//          &nbsp;&nbsp;&nbsp;&nbsp;
//          <button
//           className="btn btn-danger mb-1"
//           onClick={() => deleteStatus(resident.userName)}
//           disabled={resident.status === "Declined"}
//          >
//           {/* Decline */}
//           <FaTimes />
//          </button>
//          &nbsp;&nbsp;&nbsp;&nbsp;
//          <button
//           className="btn btn-danger mb-1"
//           onClick={() => deleteResident(resident.id)}
//          >
//           {/* Delete */}
//           <FaTrashAlt />
//          </button>
//         </td>
//        </tr>
//       ))}
//      </tbody>
//     </table>
//    </div>
//   </div>
//  );
// };

// export default ResidentTable;

import { useEffect, useState } from "react";
import ManagerServiceRegistration from "../../services/ManagerServiceRegistration";
import "../styles/residenttable.css";
import { FaTrashAlt, FaTimes, FaCheck, FaTrash } from "react-icons/fa";

const ResidentTable = () => {
 const [residents, setResidents] = useState([]);

 useEffect(() => {
  ManagerServiceRegistration.getAllResidents()
   .then((response) => {
    setResidents(response.data);
   })
   .catch((error) => {
    console.error("There was an error fetching the resident data!", error);
   });
 }, []);

 const updateStatus = (userName) => {
  ManagerServiceRegistration.approveResident(userName)
   .then(() => {
    setResidents((prevResidents) =>
     prevResidents.map((resident) =>
      resident.userName === userName
       ? { ...resident, status: "Approved" }
       : resident
     )
    );
   })
   .catch((error) => {
    console.error("There was an error approving the resident status!", error);
   });
 };

 const deleteStatus = (userName) => {
  ManagerServiceRegistration.declineResident(userName)
   .then(() => {
    setResidents((prevResidents) =>
     prevResidents.map((resident) =>
      resident.userName === userName
       ? { ...resident, status: "Declined" }
       : resident
     )
    );
   })
   .catch((error) => {
    console.error("There was an error declining the resident status!", error);
   });
 };

 const deleteResident = (id) => {
  ManagerServiceRegistration.deleteResident(id)
   .then(() => {
    setResidents((prevResidents) =>
     prevResidents.filter((resident) => resident.id !== id)
    );
   })
   .catch((error) => {
    console.error("There was an error deleting the resident!", error);
   });
 };

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
        {/* <li className="nav-item">
         <a className="nav-link" href="page.html">
          Signup
         </a>
        </li> */}
       </ul>
      </div>
     </div>
    </div>
   </nav>

   <div className="container mt-5">
    <h1 className="mb-4">Residents List</h1>
    <div className="table-responsive">
     <table className="table table-striped table-bordered table-hover shadow-sm">
      <thead className="table-dark">
       <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Status</th>
        <th>Name</th>
        <th>Flat No</th>
        <th>Flat Type</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Picture</th>
        <th>Actions</th>
       </tr>
      </thead>
      <tbody>
       {residents.map((resident) => (
        <tr key={resident.id}>
         <td>{resident.id}</td>
         <td>{resident.userName}</td>
         <td>{resident.status}</td>
         <td>{resident.name}</td>
         <td>{resident.flatNo}</td>
         <td>{resident.flatType}</td>
         <td>{resident.phone}</td>
         <td>{resident.email}</td>
         <td>
          <img
           src={resident.picture}
           alt="Resident"
           className="img-thumbnail"
           style={{ width: "100px", height: "auto" }}
          />
         </td>
         <td>
          <button
           className="btn btn-success me-2"
           onClick={() => updateStatus(resident.userName)}
           disabled={resident.status === "Approved"}
          >
           <FaCheck /> {/* Approve icon */}
          </button>
          <button
           className="btn btn-dark me-2"
           onClick={() => deleteStatus(resident.userName)}
           disabled={resident.status === "Declined"}
          >
           <FaTimes /> {/* Decline icon */}
          </button>
          <button
           className="btn btn-danger"
           onClick={() => deleteResident(resident.id)}
          >
           <FaTrash /> {/* Delete icon */}
          </button>
         </td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </div>
  </div>
 );
};

export default ResidentTable;
