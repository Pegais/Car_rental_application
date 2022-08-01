import React from 'react'

import './subcomponent.css'
import { Link } from 'react-router-dom'

function Header() {
    const handleclick = () => {
        console.log("hii");
    }
  
    return (

        <div className='layout-header'>
            <div className='image'>
                {/* <img src={logo} /> */}
            </div>
            <div>
                <Link to="/userDashboard">
                    <button style={{border:"none"}}>
                      User Dashboard
                    </button>
                </Link>
            </div>
            
            <div>
            <Link to="/carcard">
                    <button style={{border:"none"}}>
                     View Cars
                    </button>
                </Link>
            </div>
            <div className='logout'>
            <Link to="/login">
                    <button onClick={handleclick}>
                     Logout
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Header
