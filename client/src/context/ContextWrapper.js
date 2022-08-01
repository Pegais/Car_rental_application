import React, { createContext, useState } from 'react';
import rentCarContext from './RentCarContext';
import statusContext from './statusContext';
import AdminContext from './AdminContext';
const ContextWrapper = ({ children }) => {
    let [rentPrice, setRentPrice] = useState(0)
    let [addcar, setAddCar] = useState([]);
    let [userName, setUsername] = useState('')
    let [ownerName, setOwnername] = useState('')
    let [ongoingStatus, setOngoingStatus] = useState([])
    let [isAdmin, setAdmin] = useState(false)
    let [isOwner, setOwner] = useState(false)
    let [isUser, setUser] = useState(false)
    let [admindata, setAdmindata] = useState([]);
    let [carData,setCarData] =useState([])
    return (
        <rentCarContext.Provider value={{ rentPrice, setRentPrice, addcar, setAddCar, userName, setUsername, ownerName, setOwnername,carData,setCarData }}>
            <statusContext.Provider value={{ ongoingStatus, setOngoingStatus, isAdmin, isOwner, isUser, setAdmin, setOwner, setUser }}>
                <AdminContext.Provider value={{admindata,setAdmindata}}>
                    {children}
                </AdminContext.Provider>
            </statusContext.Provider>
        </rentCarContext.Provider>
    )
}

export default ContextWrapper;