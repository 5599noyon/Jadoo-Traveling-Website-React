import { Outlet } from "react-router"
import NavBar from "../Component/NavBar"
import Footer from "../Component/Footer"


function MainLayout() {
  return (
    <main>

     <NavBar />
     <Outlet />
     <Footer />
      
    </main>
  )
}

export default MainLayout
