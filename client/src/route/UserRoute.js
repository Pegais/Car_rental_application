import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

function UserRoute({isUser}) {
  return isUser ?<Outlet/> :<Navigate to='/' />
}

export default UserRoute