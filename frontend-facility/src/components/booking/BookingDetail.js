// src/components/BookingDetails.js
import React, { useState } from "react";
import BookingService from "../../services/BookingService";

const BookingDetail = () => {
 const [bookingId, setBookingId] = useState("");
 const [bookingDetails, setBookingDetails] = useState(null);
 const [error, setError] = useState("");
 const [message, setMessage] = useState("");

 const handleFetchDetails = async () => {
  try {
   const response = await BookingService.fnGetBookingById(bookingId);
   setBookingDetails(response.data); // Assuming response.data contains booking details
   setError("");
  } catch (err) {
   setError("Error fetching booking details");
   setBookingDetails(null);
  }
 };

 const inputClassName = "form-control mb-3";

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
   <div class="ResidentTable  mt-5 ">
    <div class="ResidentTable  mt-5 ">
     <br />
     <br />
     <br />
     <br />
     <h2>Get Booking Details</h2>
     <input
      type="text"
      className={inputClassName}
      value={bookingId}
      onChange={(e) => setBookingId(e.target.value)}
      placeholder="Enter Booking ID"
     />
     <input
      type="button"
      className="btn btn-dark mb-3 me-3"
      value="Get Booking Detail"
      onClick={handleFetchDetails}
     />

     {error && (
      <div
       style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #dc3545",
        borderRadius: "4px",
        backgroundColor: "#f8d7da",
        color: "#721c24",
       }}
      >
       <h2>Error</h2>
       <pre>{error}</pre>
      </div>
     )}

     {message && (
      <div
       style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #28a745",
        borderRadius: "4px",
        backgroundColor: "#d4edda",
        color: "#155724",
       }}
      >
       <h2>Success</h2>
       <pre>{message}</pre>
      </div>
     )}

     {bookingDetails && (
      <table className="styled-table">
       <thead>
        <tr>
         <th>Booking ID</th>
         <th>Booking Date</th>
         <th>Facility ID</th>
         <th>Resident ID</th>
         <th>Event Date</th>
         <th>Status</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>{bookingDetails.id}</td>
         <td>{new Date(bookingDetails.bookingDate).toLocaleString()}</td>
         <td>{bookingDetails.facilityId}</td>
         <td>{bookingDetails.residentId}</td>
         <td>{new Date(bookingDetails.eventDate).toLocaleString()}</td>
         <td>{bookingDetails.status}</td>
        </tr>
       </tbody>
      </table>
     )}
    </div>
   </div>
  </div>
 );
};

export default BookingDetail;
