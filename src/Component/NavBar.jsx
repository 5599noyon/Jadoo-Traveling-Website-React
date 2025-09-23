import { Link, NavLink } from "react-router"
import MainIcon from "../assets/MainIcon.svg"
import Button from "./Button"
import { useRef } from "react"

const NavBar = () => {
  const navbar = useRef(null)

  const NavStyle = ({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? " text-[17px] text-black bg-[#59B1E6] leading-10 font-semibold shadow-companyCard " : " text-[17px] text-p leading-10 font-semibold ",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  

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
        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        <li> <NavLink className= {NavStyle}  to={"/desitnations"} >Desitnations</NavLink></li>
        <li>
          <NavLink className= {NavStyle}  to={"/hotels"} > Hotels </NavLink>
        </li>
        <li><NavLink className= {NavStyle}  to={"/flights"} >Flights</NavLink></li>
        <li> <NavLink className= {NavStyle}  to={"/bookings"} >Bookings</NavLink> </li>
      </ul>
    </div>
    <NavLink className=" text-[17px] text-p " to={"/"} > <img src={MainIcon} alt={MainIcon} /> </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-[55px] ">
      <li> <NavLink className={NavStyle} to={"/desitnations"} >Desitnations</NavLink> </li>
      <li>
       <NavLink className={NavStyle} to={"/hotels"} > Hotels </NavLink>
      </li>
      <li><NavLink className={NavStyle} to={"/flights"} >Flights</NavLink></li>
      <li> <NavLink className={NavStyle} to={"/bookings"} >Bookings</NavLink> </li>
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
