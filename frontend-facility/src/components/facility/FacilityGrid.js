// import { useEffect, useState } from "react";
// import FacilityService from "../../services/FacilityService";

// const FacilityGrid = () => {
//  const [facility, setFacility] = useState([]);
//  const [id, setId] = useState();

//  //we need a life cycle hook to call that service
//  useEffect(() => {
//   //call service here
//   FacilityService.fnGetAllFacilities()
//    .then((response) => {
//     setFacility(response.data);
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }, []);

//  const deleteFacility = (id) => {
//   FacilityService.fnDeleteFacility(id)
//    .then((response) => {
//     setFacility((prevFacility) =>
//      prevFacility.filter((facility) => facility.id !== id)
//     );
//    })
//    .catch((error) => {
//     console.error("There was an error deleting the resident!", error);
//    });
//  };

//  return (
//   <div>
//    <table className="table ">
//     <thead className="thead-dark">
//      <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Name</th>
//       <th scope="col">Status</th>
//       <th scope="col">Description</th>
//       <th scope="col">Picture</th>
//       <th scope="col">Actions</th>
//      </tr>
//     </thead>
//     <tbody>
//      {facility.map((f) => (
//       <tr key={f.id}>
//        <td>{f.id}</td>
//        <td>{f.name}</td>
//        <td>{f.status}</td>
//        <td>{f.description}</td>
//        <td>{f.picture}</td>
//        <td>
//         <button className="btn btn-danger" onClick={() => deleteFacility(f.id)}>
//          Delete
//         </button>
//        </td>
//       </tr>
//      ))}
//     </tbody>
//    </table>
//   </div>
//  );
// };
// export default FacilityGrid;

import { useEffect, useState } from "react";
import FacilityService from "../../services/FacilityService";
import { FaTrashAlt, FaEdit, FaInfoCircle } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";

const FacilityGrid = () => {
 const [facility, setFacility] = useState([]);
 const navigate = useNavigate();

 // Fetch all facilities when the component mounts
 useEffect(() => {
  FacilityService.fnGetAllFacilities()
   .then((response) => {
    setFacility(response.data);
   })
   .catch((error) => {
    console.log(error);
   });
 }, []);

 const deleteFacility = (id) => {
  FacilityService.fnDeleteFacility(id)
   .then((response) => {
    setFacility((prevFacility) =>
     prevFacility.filter((facility) => facility.id !== id)
    );
   })
   .catch((error) => {
    console.error("There was an error deleting the facility!", error);
   });
 };

 const editFacility = (id) => {
  navigate(`/edit-facility/${id}`);
 };

 const viewDetails = (id) => {
  navigate(`/facility-details/${id}`);
 };

 return (
  <div className="container mt-5">
   <h2 className="text-center mb-4">Facility List</h2>
   <table className="table table-hover table-bordered">
    <thead className="thead-dark">
     <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Status</th>
      <th>Description</th>
      <th>Picture</th>
      <th>Actions</th>
     </tr>
    </thead>
    <tbody>
     {facility.map((f) => (
      <tr key={f.id}>
       <td>{f.id}</td>
       <td>{f.name}</td>
       <td>{f.status}</td>
       <td>{f.description}</td>
       <td>
        <img
         src={f.picture}
         alt={f.name}
         className="img-thumbnail"
         style={{ maxWidth: "100px" }}
        />
       </td>
       <td>
        <button className="btn btn-info me-2" onClick={() => viewDetails(f.id)}>
         <FaInfoCircle /> Details
        </button>
        <button
         className="btn btn-warning me-2"
         onClick={() => editFacility(f.id)}
        >
         <FaEdit /> Edit
        </button>
        <button className="btn btn-danger" onClick={() => deleteFacility(f.id)}>
         <FaTrashAlt /> Delete
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default FacilityGrid;
