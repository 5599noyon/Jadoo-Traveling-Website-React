import React from 'react'
import { useAuth } from '../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router'

const PublicRoute = ({children}) => {
     const {currentUser} = useAuth()
     const location = useLocation()
     if (currentUser) {
          return <Navigate to={"/"} state={{from: location}} replace />
     }

  return children
}

export default PublicRoute
