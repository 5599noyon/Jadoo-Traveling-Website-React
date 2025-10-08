import { useAuth } from '../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router'
import Loading from '../ComponentPages/Loading'

const ProtectedRoute = ({ children }) => {
     const { currentUser, loading } = useAuth()
     const location = useLocation()

     if (loading) return <Loading />

     if (
          currentUser?.providerData[0]?.providerId === "facebook.com" ||
          currentUser?.isAnonymous
     ) {
          return children
     }

     if (!currentUser) {
          return <Navigate to={"/auth/login"} state={{ from: location }} replace />
     }

     if (currentUser && currentUser.emailVerified === false) {
          return <Navigate to={"/auth/login"} state={{ from: location }} replace />
     }

     return children
}

export default ProtectedRoute
