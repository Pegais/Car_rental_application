import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

function AdminRoute({isAdmin}) {
  return isAdmin ?<Outlet/> :<Navigate to='/' />
}

export default AdminRoute