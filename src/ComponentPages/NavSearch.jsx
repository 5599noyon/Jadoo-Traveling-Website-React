
const NavSearch = () => {
  return (
    <div className="  ">
      <label className="input bg-transparent focus-within:bg-white focus:outline-none active:outline-none focus-within:outline-none focus-within:border-none focus:border-none active:border-none rounded-[10px] ">
  <svg className="h-[1.5em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
    </div>
  )
}

export default NavSearch
