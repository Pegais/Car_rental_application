import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

function OwnerRoute({isOwner}) {
  return isOwner ?<Outlet/> :<Navigate to='/' />
}

export default OwnerRoute