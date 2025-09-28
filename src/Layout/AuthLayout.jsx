import { Outlet } from "react-router"
import NavBar from "../Component/NavBar"


function AuthLayout() {
  return (
    <main>
     <Outlet />
    </main>
  )
}

export default AuthLayout
