import React, { useContext } from 'react'
import AdminContext from '../../context/AdminContext';
import "./admincom.css"
import {Link} from "react-router-dom"

function UserCol() {
    let { admindata } = useContext(AdminContext);
    let ownerList = admindata.filter(ele=>ele.role=="user")
    return (
        <>
            <div style={{ backgroundColor: "lightcyan", height: "10vh", display: "flex", alignItems: "center", fontWeight: "bolder" }}> User List :-</div>
            <button><Link to="/dashboard" style={{textDecoration:"none"}}>Go Back to Dashboard</Link></button>
            <div className='ownerList'>
            {
                 <table>
                 <tr>
                   {/* <th>id</th> */}
                   <th>name</th>
                   <th>email</th>
                   <th>role</th>
                 </tr>
                 {ownerList.map((val, key) => {
                   return (
                     <tr key={key}>
                       {/* <td>{val.id}</td> */}
                       <td>{val.name}</td>
                       <td>{val.email}</td>
                       <td>{val.role}</td>
                     </tr>
                   )
                 })}
               </table>
                }
                </div>
        </>
    )
}

export default UserCol