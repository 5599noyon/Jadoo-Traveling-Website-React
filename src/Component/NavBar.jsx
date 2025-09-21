import { Link } from "react-router"
import MainIcon from "../assets/MainIcon.svg"
import Button from "./Button"
import { useRef } from "react"

const NavBar = () => {
  const navbar = useRef(null)
  console.log(navbar.current);
  window.addEventListener("scroll", ()=> {
    const value = window.scrollY
    if (value > 37) {
      navbar.current.classList.add("stickyNavbar")
    }else {
      navbar.current.classList.remove("stickyNavbar")
    }
    console.log(value);
    
  })
  
  return (
    <nav className=" fixed w-full " ref={navbar} >

     <div className="navbar container pt-[35px] pb-[22px] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li> <Link className=" text-[17px] text-p " to={"/desitnations"} >Desitnations</Link></li>
        <li>
          <Link className=" text-[17px] text-p " to={"/hotels"} > Hotels </Link>
        </li>
        <li><Link className=" text-[17px] text-p " to={"/flights"} >Flights</Link></li>
        <li> <Link className=" text-[17px] text-p " to={"/bookings"} >Bookings</Link> </li>
      </ul>
    </div>
    <Link className=" text-[17px] text-p " to={"/"} > <img src={MainIcon} alt={MainIcon} /> </Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-[55px] ">
      <li> <Link className=" text-[17px] text-p leading-10 font-semibold " to={"/desitnations"} >Desitnations</Link> </li>
      <li>
       <Link className=" text-[17px] text-p leading-10 font-semibold " to={"/hotels"} > Hotels </Link>
      </li>
      <li><Link className=" text-[17px] text-p leading-10 font-semibold " to={"/flights"} >Flights</Link></li>
      <li> <Link className=" text-[17px] text-p leading-10 font-semibold " to={"/bookings"} >Bookings</Link> </li>
    </ul>
  </div>
  <div className="navbar-end space-x-[52px] ">
    <Button > <Link to={"/login"} > Login </Link>  </Button>
    <Button btnStyle="secondery" > <Link to={"/signup"} > Sign up </Link>  </Button>
  </div>
  <select defaultValue="Pick a font " className="select-ghost ml-[42px] outline-none text-[17px] font-bold ">
  
  <option >EN</option>
  <option >BN</option>
</select>
</div>
      
    </nav>
  )
}

export default NavBar
