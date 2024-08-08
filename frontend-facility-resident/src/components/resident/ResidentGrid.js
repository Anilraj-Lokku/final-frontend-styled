// import { useEffect, useState } from "react";
// import ResidentRegistrationService from "../../services/ResidentRegistrationService";

// const ResidentGrid = () => {
//     const [residents, setResidents] = useState([]);
//     const [id, setId]=useState();

//     useEffect(() => {
//         ResidentRegistrationService.fnGetAllResidents()
//             .then(response => {
//                 setResidents(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the resident data!", error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Residents List</h1>
//             <table className="styled-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Username</th>
//                         <th>Status</th>
//                         <th>Name</th>
//                         <th>Flat No</th>
//                         <th>Flat Type</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Picture</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {residents.map(resident => (
//                         <tr key={resident.id}>
//                             <td>{resident.id}</td>
//                             <td>{resident.userName}</td>
//                             <td>{resident.status}</td>
//                             <td>{resident.name}</td>
//                             <td>{resident.flatNo}</td>
//                             <td>{resident.flatType}</td>
//                             <td>{resident.phone}</td>
//                             <td>{resident.email}</td>
//                             <td>{resident.picture}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
// export default ResidentGrid;

import { useEffect, useState } from "react";
import ResidentRegistrationService from "../../services/ResidentRegistrationService";
import "../../components/resident/ResidentGrid.css";

const ResidentGrid = () => {
 const [residents, setResidents] = useState([]);

 useEffect(() => {
  ResidentRegistrationService.fnGetAllResidents()
   .then((response) => {
    setResidents(response.data);
   })
   .catch((error) => {
    console.error("There was an error fetching the resident data!", error);
   });
 }, []);

 return (
  <div className="resident-container">
   <h1 className="resident-title">Residents List</h1>
   <table className="styled-table">
    <thead>
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
        {resident.picture ? (
         <img
          src={resident.picture}
          alt="Resident"
          className="resident-picture"
         />
        ) : (
         "No Picture"
        )}
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default ResidentGrid;
