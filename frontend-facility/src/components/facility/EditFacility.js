import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FacilityService from "../../services/FacilityService";

const EditFacility = () => {
 const { id } = useParams();
 const [facility, setFacility] = useState({
  name: "",
  status: "",
  description: "",
  picture: "",
 });
 const navigate = useNavigate();

 useEffect(() => {
  FacilityService.fnGetFacilityById(id)
   .then((response) => {
    setFacility(response.data);
   })
   .catch((error) => {
    console.error("Error fetching facility data:", error);
   });
 }, [id]);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFacility((prevFacility) => ({
   ...prevFacility,
   [name]: value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  FacilityService.fnUpdateFacility(id, facility)
   .then(() => {
    // Navigate back to the list of facilities after successful update
    navigate("/viewfacility");
   })
   .catch((error) => {
    console.error("Error updating facility:", error);
   });
 };

 return (
  <div className="container mt-5">
   <h2>Edit Facility</h2>
   <form onSubmit={handleSubmit}>
    <div className="mb-3">
     <label htmlFor="name" className="form-label">
      Name
     </label>
     <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      value={facility.name}
      onChange={handleChange}
      required
     />
    </div>
    <div className="mb-3">
     <label htmlFor="status" className="form-label">
      Status
     </label>
     <input
      type="text"
      className="form-control"
      id="status"
      name="status"
      value={facility.status}
      onChange={handleChange}
      required
     />
    </div>
    <div className="mb-3">
     <label htmlFor="description" className="form-label">
      Description
     </label>
     <textarea
      className="form-control"
      id="description"
      name="description"
      rows="3"
      value={facility.description}
      onChange={handleChange}
      required
     ></textarea>
    </div>
    <div className="mb-3">
     <label htmlFor="picture" className="form-label">
      Picture URL
     </label>
     <input
      type="text"
      className="form-control"
      id="picture"
      name="picture"
      value={facility.picture}
      onChange={handleChange}
      required
     />
    </div>
    <button type="submit" className="btn btn-primary ">
     Save Changes
    </button>
   </form>
  </div>
 );
};

export default EditFacility;
