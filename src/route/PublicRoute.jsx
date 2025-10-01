import React from 'react'
import { useAuth } from '../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router'
import Loading from '../ComponentPages/Loading'

const PublicRoute = ({children}) => {
     const {currentUser, loading} = useAuth()
     const location = useLocation()

     if (loading) return <Loading/>

     // if (currentUser) {
     //      return <Navigate to={"/"} state={{from: location}} replace />
     // }

    if (currentUser && currentUser.emailVerified) {
        return <Navigate to={"/"} state={{from: location}} replace />
    }

  return children
}

export default PublicRoute
