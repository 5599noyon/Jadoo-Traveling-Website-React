import { Link } from "lucide-react"
import { FooterIcon } from "../ImportImages/ImportImages"

const Footer = () => {
  return (
    <>
      <footer className="pt-[60px] pb-[20px] bg-[#eff2f14e] shadow-companyCard ">
        <div className="container">

          <div className="footer_container footer sm:footer-horizontal  text-base-content p-10 ">
            <aside>
              <img src={FooterIcon} alt="footer" />
              <p className="text-text-crl leading-[124.5%] text-[15px] mt-[19px] max-w-[255px]">
                Book your trip in minute, get full
                Control for much longer.
              </p>
            </aside>
            <nav>
              <p className="text-[23px] font-bold text-[#080809] mb-[34px] ">Company</p>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">About</a>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">Career</a>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">Mobile</a>
            </nav>
            <nav>
              <h6 className="text-[23px] font-bold text-[#080809] mb-[34px]">Contact</h6>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">Help/FAQ</a>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">Press</a>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">Affiliates</a>
            </nav>
            <nav>
              <h6 className="text-[23px] font-bold text-[#080809] mb-[34px]">More</h6>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">AirlineFees</a>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">Airline</a>
              <a className="link link-hover text-[18px] leading-[124.5%] font-poppins text-text-crl">Low Fare Tips</a>
            </nav>

            <div>
              <div className="flex gap-[25px]">
                <div className=" cursor-pointer rounded-full w-[41px] h-[41px] shadow-3 flex items-center justify-center "> <img src="fb.svg" alt="icon" /></div>
                <div className=" cursor-pointer rounded-full w-[41px] h-[41px] shadow-3 flex items-center justify-center 
                [background:conic-gradient(from_180deg_at_50%_50%,#8B02F1_0%,#F29BA4_17%,#C68BF0_29%,#D164DA_43%,#C963E8_61%,#BFC2E8_72%,#FFC99D_80%,#DD8B9C_88%,#BAD0F1_93%,#CED8C6_100%,#FFFFFF_100%)] "> <img src="insta.svg" alt="icon" /></div>
                <div className=" cursor-pointer rounded-full w-[41px] h-[41px] shadow-3 flex items-center justify-center"> <img src="twit.svg" alt="icon" /> </div>

              </div>
            <div >
              <h4 className="text-[20px] font-medium text-text-crl leading-[124.5%] mt-[26px]"> Discover Our New App</h4>
             <div className="flex gap-4 mt-4">
              <img  className="cursor-pointer" src="Google Play.png" alt="icon" />
              <img className="cursor-pointer" src="Play Store.png" alt="icon" />
             </div>

            </div>

            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer