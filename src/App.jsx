import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layout/MainLayout";
import HomePages from "./Pages/HomePages";
import Desitnations from "./Pages/Desitnations";
import Hotels from "./Pages/Hotels";
import Flights from "./Pages/Flights";
import Bookings from "./Pages/Bookings";
import ErrorPage from "./Pages/ErrorPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import Customization from "./ComponentPages/Customization";

const router = createBrowserRouter([

  {
    path: "/",
    Component: MainLayout,
    children: [
      {index: true, Component: HomePages },
      {path:"/desitnations", Component: Desitnations },
      {path:"/hotels", Component: Hotels },
      {path:"/flights", Component: Flights },
      {path:"/bookings", Component: Bookings },
      {path:"/customization", Component: Customization},
    ]
  },

  {
    path: "*",
    Component: ErrorPage,
  },

  {
     path: "/signup",
    Component: SignupPage ,
  },

  {
     path: "/login",
    Component: LoginPage ,
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
