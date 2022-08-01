import React,{useContext,useState} from 'react'
import "./admincom.css"
import { Link } from 'react-router-dom';
import AdminContext from '../../context/AdminContext';
import axios from "axios"
function ManageList() {
  let { admindata ,setAdmindata} = useContext(AdminContext);
  // console.log(admindata);
  let arr =admindata.filter((ele)=>ele.role !=="admin")
  let [removedata, setRemoveData] = useState(arr)

  const remove = async(val) => {
    console.log(val._id);

    let filtered = arr.filter((ele)=>ele._id!==val._id)
    setRemoveData(filtered)
    let res = axios.post("http://localhost:5000/register/remove",{id:val._id})
    console.log(res);
    
  }
    // let ownerList = admindata.filter(ele=>ele.role=="owner")
  return (
    <>
    <div style={{ backgroundColor: "lightcyan", height: "10vh", display: "flex", alignItems: "center", fontWeight: "bolder" }}> User List :-</div>
    <button><Link to="/dashboard" style={{textDecoration:"none"}}>Go Back to Dashboard</Link></button>
    <div className='ownerList'>
    {
          <table>
            <thead>
         <tr>
           {/* <th>id</th> */}
           <th>name</th>
           <th>email</th>
           <th>role</th>
           <th>Manage</th>
              </tr>
              </thead>
              <tbody>
            {
              removedata.length!==0 ?removedata.map((val, key) => {
                return (
                  <tr key={key}>
                    {/* <td>{val.id}</td> */}
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.role}</td>
                    <td><button onClick={()=>remove(val)}>Remove</button></td>
                    </tr>
                )
              }) :
              
                <tr>
                  <td>No data !!</td>
                  </tr>
                  
         }
         </tbody>
       </table>
        }
        </div>
</>
  )
}

export default ManageList