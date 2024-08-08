import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FacilityService from "../../services/FacilityService";

const FacilityDetails = () => {
 const { id } = useParams();
 const [facility, setFacility] = useState(null);

 useEffect(() => {
  FacilityService.fnGetFacilityById(id)
   .then((response) => {
    setFacility(response.data);
   })
   .catch((error) => {
    console.error("There was an error fetching the facility data!", error);
   });
 }, [id]);

 if (!facility) {
  return <div>Loading...</div>;
 }

 return (
  <div className="container mt-5">
   <h2>Facility Details</h2>
   <table className="table table-bordered">
    <tbody>
     <tr>
      <th>ID</th>
      <td>{facility.id}</td>
     </tr>
     <tr>
      <th>Name</th>
      <td>{facility.name}</td>
     </tr>
     <tr>
      <th>Status</th>
      <td>{facility.status}</td>
     </tr>
     <tr>
      <th>Description</th>
      <td>{facility.description}</td>
     </tr>
     <tr>
      <th>Picture</th>
      <td>
       <img
        src={facility.picture}
        alt={facility.name}
        className="img-thumbnail"
        style={{ maxWidth: "200px" }}
       />
      </td>
     </tr>
    </tbody>
   </table>
  </div>
 );
};

export default FacilityDetails;
