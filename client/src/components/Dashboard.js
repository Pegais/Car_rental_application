import React,{useEffect,useContext} from 'react'
import './admin.css'
import { Link } from "react-router-dom"
import axios from "axios"
import AdminContext from '../context/AdminContext';



function Dashboard() {
  let { setAdmindata, admindata } = useContext(AdminContext);
  useEffect(() => {

    const fetchData = async () => {
      
      let res = await axios.get("http://localhost:5000/register/data")
      // console.log(res.data.data);
      setAdmindata([...res.data.data])
    }
    fetchData();
  },[])
  // console.log("this is admindata",admindata);
   
  return (
    <>
       <div className='admin'>
      <h3>Welcome to Admin Dashboard:--</h3>
        <button>
          <Link to="/availablecar"style={{textDecoration:"none"}}>View available car</Link>
      </button>
      <button><Link to="/carcard" style={{textDecoration:"none"}}>View All Cars</Link></button>
        <button ><Link to="/" style={{textDecoration:"none"}}>Logout</Link></button>
      
      </div>
      <div className='admin-body'>
        <div className='admin-img'>
          
          <img src="/images/download.png" alt="" srcset="" /><br />
            <h4 ><Link to="/userlist" style={{textDecoration:"none"}}>View All Users</Link></h4>
            
          
        </div>
        <div className='admin-img'>
          <img src="/images/download.png" alt="" srcset="" /><br />
          <h4 ><Link to="/ownerlist" style={{textDecoration:"none"}}>View All Owners</Link></h4>
          
        </div>
        
        <div className='admin-img'>
          <img src="/images/download.png" alt="" srcset="" /><br />
          <h4 ><Link to="/managelist" style={{textDecoration:"none"}}>Manage Owners/Users</Link></h4>
          
        </div>
        <div className='admin-img'>
          <img src="/images/download.png" alt="" srcset="" /><br />
          <h4 ><Link to="/userlist" style={{textDecoration:"none"}}>Manage Car Advertisement</Link></h4>
          
        </div>
        

      </div>
    </>
  )
}

export default Dashboard;