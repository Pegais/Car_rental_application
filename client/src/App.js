import Login from "./register/Login";
import Signup from "./register/Signup";
import { useState ,useEffect } from "react"
import AdminRoute from "./route/AdminRoute";
import LandingHeader from "./LandingPage/LandingHeader";
import UserDashboard from "./components/userdashboard/UserDashboard";
import RentCar from "./carCardComponents/RentCar";
import AvailableCar from "./components/adminComponents/AvailableCar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import CardCar from "./carCardComponents/CardCar";
import { useContext } from "react";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Owner from "./components/owner dashboard/Owner"
import statusContext from "./context/statusContext";
import UserCol from "./components/adminComponents/UserCol";
import OwnerCol from "./components/adminComponents/OwnerCol";
import ManageList from "./components/adminComponents/ManageList";
import OwnerRoute from "./route/OwnerRoute";
import UserRoute from "./route/UserRoute";

function App() {
  // let navigate =useNavigate()
  let {setAdmin,setOwner,setUser,isAdmin,isOwner,isUser} = useContext(statusContext)
 

  
  return (
    <Router>

      <Routes>
        <Route element={<LandingHeader/>} path="/" />
        <Route element={<Login set={{setAdmin,setOwner,setUser}} />} path="/login" />
        <Route element={<AdminRoute isAdmin={isAdmin} />} >
          <Route element={<Dashboard/>} path="/dashboard" />
        </Route>
        <Route element={<OwnerRoute isOwner={isOwner} />} >
        <Route element={<Owner />} path="/owner" /> 
        </Route>
        <Route element={<UserRoute isUser={isUser} />} >
        <Route element={<Home />} path="/home" />
        </Route>
        <Route element={<Signup />} path="/register" />
        <Route element={<UserDashboard/> } path="/userDashboard" />
      
        <Route path="/carcard" element={<CardCar />} />
        <Route path="/rentcar" element={<RentCar/>} />
        <Route path="/availablecar" element={<AvailableCar/>} />
        <Route path="/userlist" element={<UserCol/>} />
        <Route path="/ownerlist" element={<OwnerCol />} />
        <Route path="/managelist" element={<ManageList/>} />
        
      </Routes>

   </Router>
  );
}

export default App;
