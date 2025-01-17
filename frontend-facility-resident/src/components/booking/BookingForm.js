// import { useState } from "react";
// import BookingService from "../../services/BookingService";
// import FacilityGrid from "../facility/FacilityGrid";

// // Function to format date for datetime-local input
// const formatDateForInput = (date) => {
//     if (!date) return ''; // Return empty string if date is not set

//     const localDate = new Date(date);
//     const year = localDate.getFullYear();
//     const month = String(localDate.getMonth() + 1).padStart(2, '0');
//     const day = String(localDate.getDate()).padStart(2, '0');
//     const hours = String(localDate.getHours()).padStart(2, '0');
//     const minutes = String(localDate.getMinutes()).padStart(2, '0');

//     return `${year}-${month}-${day}T${hours}:${minutes}`;
// };

// // Function to convert date to ISO string
// const convertToISO = (date) => {
//     if (!date) return ''; // Return empty string if date is not set

//     return new Date(date).toISOString(); // This includes milliseconds and 'Z'
// };

// const BookingForm = () => {
//     const [id, setId] = useState("");
//     const [bookingDate, setBookingDate] = useState("");
//     const [facilityId, setFacilityId] = useState("");
//     const [residentId, setResidentId] = useState("");
//     const [eventDate, setEventDate] = useState("");
//     const [status, setStatus] = useState("Available");

//     const [responseMessage, setResponseMessage] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");

//     const handleBookingDate = (event) => {
//         setBookingDate(event.target.value);
//     };

//     const handleEventDate = (event) => {
//         setEventDate(event.target.value);
//     };

//     const fnCreate = () => {
//         const booking = {
//             id: id,
//             bookingDate: convertToISO(bookingDate),
//             facilityId: facilityId,
//             residentId: residentId,
//             eventDate: convertToISO(eventDate),
//             status: status
//         };

//         BookingService.fnCreateBooking(booking)
//         .then((response) => {
//             console.log("Response Data:", response.data); // Log the response to check its structure

//             // Access the id from bookingDto in the response data
//             const bookingDto = response.data.bookingDto;
//             if (bookingDto && bookingDto.id) {
//                 setId(bookingDto.id); // Set autogenerated ID from response
//                 setResponseMessage(`Booking created successfully: ${JSON.stringify(response.data)}`);
//             } else {
//                 setErrorMessage("Error: Response does not contain booking ID.");
//             }
//             setErrorMessage(""); // Clear any previous error message
//         })
//         .catch((error) => {
//             // Handle and display error
//             if (error.response) {
//                 setErrorMessage(`Error: ${error.response.data}`);
//             } else if (error.request) {
//                 setErrorMessage("Request made but no response received.");
//             } else {
//                 setErrorMessage(`Error: ${error.message}`);
//             }
//             setResponseMessage(""); // Clear any previous response message
//         });
//     };

//     return (
//         <div>
//             <h1>Book a Facility</h1>
//             {/* ID: <input type="number" id="id" style={{ width: '300px' }} value={id} onChange={(event) => setId(event.target.value)} /><br /><br /> */}
//             Booking Date: <input type="datetime-local" id="bookingDate" style={{ width: '300px' }} value={formatDateForInput(bookingDate)} onChange={handleBookingDate} /><br /><br />
//             Facility Id: <input type="number" id="facilityId" style={{ width: '300px' }} value={facilityId} onChange={(event) => setFacilityId(event.target.value)} /><br /><br />
//             Resident Id: <input type="number" id="residentId" style={{ width: '300px' }} value={residentId} onChange={(event) => setResidentId(event.target.value)} /><br /><br />
//             Event Date: <input type="datetime-local" id="eventDate" style={{ width: '300px' }} value={formatDateForInput(eventDate)} onChange={handleEventDate} /><br /><br />
//             {/* Status: <input type="text" id="status" style={{ width: '300px' }} value={status} onChange={(event) => setStatus(event.target.value)} /><br /><br /> */}
//             <div>
//                 <input type="button" className="btn btn-primary" value="Create Booking" onClick={fnCreate} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             </div>
//             {responseMessage && (
//                 <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #28a745', borderRadius: '4px', backgroundColor: '#d4edda', color: '#155724' }}>
//                     <h2>Booking Details</h2>
//                     <h4>Save this Detail. You will not be able to access it again</h4>
//                     <div>
//                         <strong>ID:</strong> {id}
//                     </div>
//                     <div>
//                         <strong>Booking Date:</strong> {bookingDate}
//                     </div>
//                     <div>
//                         <strong>Facility Id:</strong> {facilityId}
//                     </div>
//                     <div>
//                         <strong>Resident Id:</strong> {residentId}
//                     </div>
//                     <div>
//                         <strong>Event Date:</strong> {eventDate}
//                     </div>
//                     <div>
//                         <strong>Status:</strong> {status}
//                     </div>
//                 </div>
//             )}
//             {errorMessage && (
//                 <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #dc3545', borderRadius: '4px', backgroundColor: '#f8d7da', color: '#721c24' }}>
//                     <h2>Error</h2>
//                     <pre>{errorMessage}</pre>
//                 </div>
//             )}
//             {/* {responseMessage && (
//                 <div>
//                     <h2>Response</h2>
//                     <p>{responseMessage}</p>
//                 </div>
//             )}
//             {errorMessage && (
//                 <div>
//                     <h2>Error</h2>
//                     <p>{errorMessage}</p>
//                 </div>
//             )} */}
//             <div>
//                 <FacilityGrid />
//             </div>
//         </div>
//     );
// };

// export default BookingForm;

import { useState } from "react";
import BookingService from "../../services/BookingService";
import FacilityGrid from "../facility/FacilityGrid";
import "./BookingForm.css";

// Function to format date for datetime-local input
const formatDateForInput = (date) => {
 if (!date) return ""; // Return empty string if date is not set

 const localDate = new Date(date);
 const year = localDate.getFullYear();
 const month = String(localDate.getMonth() + 1).padStart(2, "0");
 const day = String(localDate.getDate()).padStart(2, "0");
 const hours = String(localDate.getHours()).padStart(2, "0");
 const minutes = String(localDate.getMinutes()).padStart(2, "0");

 return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// Function to convert date to ISO string
const convertToISO = (date) => {
 if (!date) return ""; // Return empty string if date is not set

 return new Date(date).toISOString(); // This includes milliseconds and 'Z'
};

const BookingForm = () => {
 const [id, setId] = useState("");
 const [bookingDate, setBookingDate] = useState("");
 const [facilityId, setFacilityId] = useState("");
 const [residentId, setResidentId] = useState("");
 const [eventDate, setEventDate] = useState("");
 const [status, setStatus] = useState("Available");

 const [responseMessage, setResponseMessage] = useState("");
 const [errorMessage, setErrorMessage] = useState("");

 const handleBookingDate = (event) => {
  setBookingDate(event.target.value);
 };

 const handleEventDate = (event) => {
  setEventDate(event.target.value);
 };

 const fnCreate = () => {
  const booking = {
   id: id,
   bookingDate: convertToISO(bookingDate),
   facilityId: facilityId,
   residentId: residentId,
   eventDate: convertToISO(eventDate),
   status: status,
  };

  BookingService.fnCreateBooking(booking)
   .then((response) => {
    console.log("Response Data:", response.data); // Log the response to check its structure

    // Access the id from bookingDto in the response data
    const bookingDto = response.data.bookingDto;
    if (bookingDto && bookingDto.id) {
     setId(bookingDto.id); // Set autogenerated ID from response
     setResponseMessage(
      `Booking created successfully: ${JSON.stringify(response.data)}`
     );
    } else {
     setErrorMessage("Error: Response does not contain booking ID.");
    }
    setErrorMessage(""); // Clear any previous error message
   })
   .catch((error) => {
    // Handle and display error
    if (error.response) {
     setErrorMessage(`Error: ${error.response.data}`);
    } else if (error.request) {
     setErrorMessage("Request made but no response received.");
    } else {
     setErrorMessage(`Error: ${error.message}`);
    }
    setResponseMessage(""); // Clear any previous response message
   });
 };

 return (
  <div className="container mt-5">
   <div className="card shadow-sm booking-card">
    <div className="card-body">
     <h2 className="card-title mb-4">Book a Facility</h2>
     <form>
      <div className="form-group mb-3">
       <label htmlFor="bookingDate" className="form-label">
        Booking Date
       </label>
       <input
        type="datetime-local"
        id="bookingDate"
        className="form-control"
        value={formatDateForInput(bookingDate)}
        onChange={handleBookingDate}
       />
      </div>
      <div className="form-group mb-3">
       <label htmlFor="facilityId" className="form-label">
        Facility ID
       </label>
       <input
        type="number"
        id="facilityId"
        className="form-control"
        value={facilityId}
        onChange={(event) => setFacilityId(event.target.value)}
       />
      </div>
      <div className="form-group mb-3">
       <label htmlFor="residentId" className="form-label">
        Resident ID
       </label>
       <input
        type="number"
        id="residentId"
        className="form-control"
        value={residentId}
        onChange={(event) => setResidentId(event.target.value)}
       />
      </div>
      <div className="form-group mb-3">
       <label htmlFor="eventDate" className="form-label">
        Event Date
       </label>
       <input
        type="datetime-local"
        id="eventDate"
        className="form-control"
        value={formatDateForInput(eventDate)}
        onChange={handleEventDate}
       />
      </div>
      <button type="button" className="btn btn-primary" onClick={fnCreate}>
       Create Booking
      </button>
     </form>
     {responseMessage && (
      <div className="alert alert-success mt-4">
       <h4 className="alert-heading">Booking Details</h4>
       <p>Save this detail. You will not be able to access it again.</p>
       <hr />
       <div>
        <strong>ID:</strong> {id}
       </div>
       <div>
        <strong>Booking Date:</strong> {bookingDate}
       </div>
       <div>
        <strong>Facility ID:</strong> {facilityId}
       </div>
       <div>
        <strong>Resident ID:</strong> {residentId}
       </div>
       <div>
        <strong>Event Date:</strong> {eventDate}
       </div>
       <div>
        <strong>Status:</strong> {status}
       </div>
      </div>
     )}
     {errorMessage && (
      <div className="alert alert-danger mt-4">
       <h4 className="alert-heading">Error</h4>
       <p>{errorMessage}</p>
      </div>
     )}
    </div>
   </div>
   <div className="mt-5">
    <FacilityGrid />
   </div>
  </div>
 );
};

export default BookingForm;
