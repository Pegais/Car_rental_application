import React, { useContext, useState } from 'react'
import "./user.css"
import rentCarContext from '../../context/RentCarContext'
import { Link } from "react-router-dom"
import statusContext from '../../context/statusContext'
import axios from 'axios'


function UserDashboard() {
    let { rentPrice, userName } = useContext(rentCarContext)
    let { ongoingStatus } = useContext(statusContext)
    console.log(rentPrice);
    console.log("onging trip ", ongoingStatus);
    let [showStatus, setShowStatus] = useState(false)

    const handleClick = async() => {
        setShowStatus(!showStatus)
        console.log(showStatus);
        let res = await axios.post("http://localhost:5000/ownerWallet", {
            name: userName,
            price:rentPrice
            
        })
        console.log(res.data);

    }

    return (
        //   userinfo compo
        <div className='user'>
            <div className='header'>
                <div className='title'>Welcome to your Dashboard @{userName}
                    <Link to="/home"><button>go to homePage</button></Link>
                </div>
                <div className='wallet'>Wallet Balance :Rs {2500 - rentPrice}</div>

            </div>
            <div className='body-car'>
                <div className='status-button'>
                    <button onClick={handleClick}>Show Status</button>
                </div>

                {
                    showStatus && <div className='status-bar'>
                        <div className='history-bar'>
                            <span>  <div style={{ height: "10px", width: "10px", backgroundColor: "red", borderRadius: "50%" }}></div></span>
                            <span><h4 style={{ textAlign: "center" }}> History Status</h4></span>
                            <span>no current history</span>

                        </div>
                        <div className='ongoing-bar'>
                            <span>  <div style={{ height: "10px", width: "10px", backgroundColor: "green", borderRadius: "50%" }}></div></span>
                            <span><h4 style={{ textAlign: "center" }}> Ongoing Status</h4></span>
                            {
                                ongoingStatus.length !== 0 ?
                                    ongoingStatus.map((ele, idx) => {
                                        return (
                                            <span key={idx}>
                                                <span style={{fontWeight:"bold",color:"red"}}>Vehicle rented by User is:---</span><br />
                                                <span style={{fontWeight:"bold"}}>Company Name:--{ele.company}</span><br />
                                                <span style={{fontWeight:"bold"}}>Modal Name:--{ele.modal}</span> <br />
                                                <span style={{fontWeight:"bold"}}>Rent Status:--Paid</span>


                                            </span>
                                        )
                                    })
                                    :
                                    <span>No rented trip</span>
                            }
                        </div>

                    </div>
                }

            </div>

        </div>
    )
}

export default UserDashboard