import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "../styles/managerview.css";

const Managerview = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(true);
 const navigate = useNavigate();

 const handleLogout = () => {
  AuthService.logout();
  setIsLoggedIn(false);
  navigate("/");
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
         <Link to="/" className="nav-link active" aria-current="page">
          Home
         </Link>
        </li>
        <li className="nav-item">
         {isLoggedIn ? (
          <button
           className="btn btn-danger nav-link active"
           onClick={handleLogout}
          >
           Logout
          </button>
         ) : (
          <Link
           to="/signupdashboard"
           className="nav-link active"
           aria-current="page"
          >
           SignIn
          </Link>
         )}
        </li>
       </ul>
      </div>
     </div>
    </div>
   </nav>

   <div className="container mt-5 d-flex align-items-center justify-content-center hero">
    <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
     <div className="col">
      <div className="card text-center">
       <div className="card-body">
        <h5 className="card-title">Update Manager</h5>
        <p className="card-text">Access the form to update manager details.</p>
        <Link to="/update-manager" className="btn btn-primary">
         Update Manager
        </Link>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card text-center">
       <div className="card-body">
        <h5 className="card-title">Register Resident Here</h5>
        <p className="card-text">
         Access the form to create, update, and delete a new resident.
        </p>
        <Link to="/register-resident" className="btn btn-success">
         Resident
        </Link>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card text-center">
       <div className="card-body">
        <h5 className="card-title">Approve Resident Status</h5>
        <p className="card-text">
         Login to approve or reject resident applications.
        </p>
        <Link to="/approve-resident" className="btn btn-danger">
         Login to Approve
        </Link>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card text-center">
       <div className="card-body">
        <h5 className="card-title">Create Facility</h5>
        <p className="card-text">
         Access the form to create, update, delete a new facility.
        </p>
        <Link to="/create-facility" className="btn btn-warning">
         Facility
        </Link>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card text-center">
       <div className="card-body">
        <h5 className="card-title">View All Facilities</h5>
        <p className="card-text">View a list of all registered facilities.</p>
        <Link to="/viewfacility" className="btn btn-info">
         View Facilities
        </Link>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card text-center">
       <div className="card-body">
        <h5 className="card-title">Create Booking</h5>
        <p className="card-text">Access the form to create a new booking.</p>
        <Link to="/create-booking" className="btn btn-secondary">
         Create Booking
        </Link>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card text-center">
       <div className="card-body">
        <h5 className="card-title">Approve Booking</h5>
        <p className="card-text">
         Approve, reject, or cancel booking requests.
        </p>
        <Link to="/view-booking" className="btn btn-light">
         Approve Bookings
        </Link>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card text-center">
       <div className="card-body">
        <h5 className="card-title">View Booking by ID</h5>
        <p className="card-text">View details of a booking by its ID.</p>
        <Link to="/booking-by-id" className="btn btn-dark">
         View Booking
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Managerview;
