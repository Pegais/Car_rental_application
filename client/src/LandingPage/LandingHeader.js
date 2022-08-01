import React from 'react'
import "./page.css"
import {Link} from "react-router-dom"



function LandingHeader() {
    return (
        <>
            <div className='container'>
                <nav>
                    <span>Welcome to CarBay :-</span>
                    <ul>
                        <li style={{fontWeight:"bolder"}}>Our service :--</li>
                        <li>Tours</li>
                        <li>Weekend trips</li>
                        <li>Long-Route trips</li>
                    </ul>
                </nav>
                <div className="content">
                    <h1>Renting Car at Affordable price</h1>
                    <button type='button'><Link to="/register" style={{textDecoration:"none"}}>Register here</Link></button>
                    <button type='button'> <Link to="/login"style={{textDecoration:"none"}}>Login here</Link></button>
                </div>
                <img src="/images/car.png"  className='car-image'/>
           </div>
        </>
    )
}

export default LandingHeader