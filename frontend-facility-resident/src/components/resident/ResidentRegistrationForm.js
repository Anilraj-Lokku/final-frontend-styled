// import { useEffect, useRef, useState } from "react";
// import ResidentRegistrationService from "../../services/ResidentRegistrationService";
// import ResidentGrid from "./ResidentGrid";

// const ResidentRegistrationForm = () => {
//     const[id, setId]=useState("");
//     const[userName, setUsername]=useState("");
//     const[password, setPassword]=useState("");
//     const[status, setStatus]=useState("");
//     const[name, setName]=useState("");
//     const[flatNo, setFlatNo]=useState("");
//     const[flatType , setFlatType]=useState("");
//     const[phone, setPhone]=useState("");
//     const[email, setEmail]=useState("");
//     const[picture, setPicture]=useState("");
//     const [residentData, setResidentData] = useState({});
//     const [serverResponse, setServerResponse] = useState(null);

//     const classname = useRef();

//     useEffect (() => {
//         classname.id="form-control";
//         classname.userName="form-control";
//         classname.password="form-control";
//         classname.status="form-control";
//         classname.name="form-control";
//         classname.flatNo="form-control";
//         classname.flatType="form-control";
//         classname.phone="form-control";
//         classname.email="form-control";
//         classname.picture="form-control";
//     },[]);

//     function fnCreate()
//     {
//         var resident = {"userName":"","password":"","role":"Resident","status":"","name":"","flatNo":"","flatType":"","phone":"","email":"","picture":""};
//         resident.userName=userName;
//         resident.password=password;
//         resident.status=status;
//         resident.name=name;
//         resident.flatNo=flatNo;
//         resident.flatType=flatType;
//         resident.phone=phone;
//         resident.email=email;
//         resident.picture=picture;

//         ResidentRegistrationService.fnCreateResident(resident)
//         .then((response)=>{
//             console.log(response.data)
//             window.location.reload(false)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }

//     const fnUpdate = () => {
//         const updatedResident = {};

//         if (name) updatedResident.name = name;
//         if (status) updatedResident.status = status;
//         if (flatNo) updatedResident.flatNo = flatNo;
//         if (flatType) updatedResident.flatType = flatType;
//         if (phone) updatedResident.phone = phone;
//         if (email) updatedResident.email = email;
//         if (picture) updatedResident.picture = picture;

//         ResidentRegistrationService.fnUpdateResident(id, updatedResident)
//             .then((response) => {
//                 console.log('Facility updated:', response.data);
//             })
//             .catch((error) => {
//                 console.error('Error updating facility:', error);
//             });
//     };

//     const loadResidentData = () => {
//         ResidentRegistrationService.fnGetResidentById(id)
//             .then(response => {
//                 const resident = response.data;
//                 setResidentData(resident);
//                 setName(resident.name);
//                 setStatus(resident.status);
//                 setFlatNo(resident.flatNo);
//                 setFlatType(resident.flatType);
//                 setPhone(resident.phone);
//                 setEmail(resident.email);
//                 setPicture(resident.picture);
//             })
//             .catch(error => {
//                 console.error('Error loading facility data:', error);
//             });
//     };

//     // function fnUpdate()
//     // {
//     //     var resident = {"id":"","userName":"","password":"","role":"Resident","status":"","name":"","flatNo":"","flatType":"","phone":"","email":"","picture":""};
//     //     resident.id=id;
//     //     resident.userName=userName;
//     //     resident.password=password;
//     //     resident.status=status;
//     //     resident.name=name;
//     //     resident.flatNo=flatNo;
//     //     resident.flatType=flatType;
//     //     resident.phone=phone;
//     //     resident.email=email;
//     //     resident.picture=picture;

//     //     ResidentRegistrationService.fnUpdateResident(id)
//     //     .then((response)=>{
//     //         console.log(response.data)
//     //         window.location.reload(false)
//     //     })
//     //     .catch((error)=>{
//     //         console.log(error)
//     //     })
//     // }

//     function fnDelete()
//     {
//         ResidentRegistrationService.fnDeleteResident(id)
//         .then((response)=>{
//             console.log("response data delete is running");
//             console.log(response.data)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }

//     return <div className="form-container">
//         <h1>Resident Registration</h1>
//         ID : <input type="number" id="id" style={{ width: '300px' }} className={classname.id} onChange={(event)=>{setId(event.target.value)}} /><br/><br/>
//         Username : <input type="text" id="userName" style={{ width: '300px' }} className={classname.userName} onChange={(event)=>{setUsername(event.target.value)}} /><br/><br/>
//         Password : <input type="text" id="password" style={{ width: '300px' }} className={classname.password} onChange={(event)=>{setPassword(event.target.value)}} /><br/><br/>
//         Name : <input type="text" id="name" style={{ width: '300px' }} className={classname.name} onChange={(event)=>{setName(event.target.value)}} /><br/><br/>
//         Flat No : <input type="text" id="flatNo" style={{ width: '300px' }} className={classname.flatNo} onChange={(event)=>{setFlatNo(event.target.value)}} /><br/><br/>
//         Flat Type : <input type="text" id="flatType" style={{ width: '300px' }} className={classname.flatType} onChange={(event)=>{setFlatType(event.target.value)}} /><br/><br/>
//         Phone : <input type="number" id="phone" style={{ width: '300px' }} className={classname.phone} onChange={(event)=>{setPhone(event.target.value)}} /><br/><br/>
//         Email : <input type="text" id="email" style={{ width: '300px' }} className={classname.email} onChange={(event)=>{setEmail(event.target.value)}} /><br/><br/>
//         Picture : <input type="text" id="picture" style={{ width: '300px' }} className={classname.picture} onChange={(event)=>{setPicture(event.target.value)}} /><br/><br/>
//         <div>
//             <input type="button" className="btn btn-primary" value="Create Resident" onClick={fnCreate} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input type="button" className="btn btn-secondary" value="Update Resident" onClick={fnUpdate} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input type="button" className="btn btn-danger" value="Delete Resident" onClick={fnDelete} />
//         </div>
//         <div>
//             <br/><br/><br/>
//             <ResidentGrid />
//         </div>
//     </div>
// }
// export default ResidentRegistrationForm;

import { useEffect, useRef, useState } from "react";
import ResidentRegistrationService from "../../services/ResidentRegistrationService";
import ResidentGrid from "./ResidentGrid";
import "../../components/resident/ResidentGrid.css";

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
 const [residentData, setResidentData] = useState({});
 const [serverResponse, setServerResponse] = useState(null);

 useEffect(() => {
  // No need to set classes here, just use CSS
 }, []);

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
    window.location.reload(false);
   })
   .catch((error) => {
    console.log(error);
   });
 };

 const fnUpdate = () => {
  const updatedResident = {};

  if (name) updatedResident.name = name;
  if (status) updatedResident.status = status;
  if (flatNo) updatedResident.flatNo = flatNo;
  if (flatType) updatedResident.flatType = flatType;
  if (phone) updatedResident.phone = phone;
  if (email) updatedResident.email = email;
  if (picture) updatedResident.picture = picture;

  ResidentRegistrationService.fnUpdateResident(id, updatedResident)
   .then((response) => {
    console.log("Resident updated:", response.data);
   })
   .catch((error) => {
    console.error("Error updating resident:", error);
   });
 };

 const fnDelete = () => {
  ResidentRegistrationService.fnDeleteResident(id)
   .then((response) => {
    console.log("Resident deleted:", response.data);
   })
   .catch((error) => {
    console.log(error);
   });
 };

 return (
  <div className="form-container">
   <h1 className="form-title">Resident Registration</h1>
   <form className="resident-form">
    <label htmlFor="id">ID:</label>
    <input
     type="number"
     id="id"
     className="form-control"
     value={id}
     onChange={(e) => setId(e.target.value)}
    />
    <br />

    <label htmlFor="userName">Username:</label>
    <input
     type="text"
     id="userName"
     className="form-control"
     value={userName}
     onChange={(e) => setUsername(e.target.value)}
    />
    <br />

    <label htmlFor="password">Password:</label>
    <input
     type="password"
     id="password"
     className="form-control"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
    <br />

    <label htmlFor="name">Name:</label>
    <input
     type="text"
     id="name"
     className="form-control"
     value={name}
     onChange={(e) => setName(e.target.value)}
    />
    <br />

    <label htmlFor="flatNo">Flat No:</label>
    <input
     type="text"
     id="flatNo"
     className="form-control"
     value={flatNo}
     onChange={(e) => setFlatNo(e.target.value)}
    />
    <br />

    <label htmlFor="flatType">Flat Type:</label>
    <input
     type="text"
     id="flatType"
     className="form-control"
     value={flatType}
     onChange={(e) => setFlatType(e.target.value)}
    />
    <br />

    <label htmlFor="phone">Phone:</label>
    <input
     type="tel"
     id="phone"
     className="form-control"
     value={phone}
     onChange={(e) => setPhone(e.target.value)}
    />
    <br />

    <label htmlFor="email">Email:</label>
    <input
     type="email"
     id="email"
     className="form-control"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    />
    <br />

    <label htmlFor="picture">Picture URL:</label>
    <input
     type="text"
     id="picture"
     className="form-control"
     value={picture}
     onChange={(e) => setPicture(e.target.value)}
    />
    <br />

    <div className="form-buttons">
     <button type="button" className="btn btn-primary" onClick={fnCreate}>
      Create Resident
     </button>
     <button type="button" className="btn btn-secondary" onClick={fnUpdate}>
      Update Resident
     </button>
     <button type="button" className="btn btn-danger" onClick={fnDelete}>
      Delete Resident
     </button>
    </div>
   </form>
   <div className="resident-grid-container">
    <ResidentGrid />
   </div>
  </div>
 );
};

export default ResidentRegistrationForm;
