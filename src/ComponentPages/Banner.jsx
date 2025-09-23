import BgGirlImg from "../assets/BgGirlImg.png"
import AroPlain from "../assets/AroPlainIcon.svg"
import GirlIcon from "../assets/girlicon.svg"
import Polyicon from "../assets/Polyicon.svg"
import Button from "../Component/Button"

const bgStyle = {
     backgroundImage: `url(${BgGirlImg})`,
     backgroundRepeat: " no-repeat ",
     backgroundPosition: "right top",
     
}

function Banner() {
  return (
    <section className=" h-[1018px] py-10 md:pt-[130px] " style={bgStyle} >

     <div className="container ">

          <div className="grid grid-cols-2 items-center gap-4 " >

               <div className=" min-w-[630px] " >
                    <h2 className=" font-bold uppercase text-[20px] text-[#DF6951] leading-auto " >Best Destinations around the world</h2>
                    <h1 className=" font-bold text-[84px] text-[#181E4B] leading-[89px] mt-[24px] max-w-[590px] " >Travel, <span className=" travel_h1 relative z-[1] " >enjoy</span> and live a new and full life
                    </h1>
                    <p className=" text-[16px] text-[#5E6282] leading-[30px] mt-[30px] max-w-[410px] " >Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div className=" flex items-center space-x-[44px] mt-[34px] " >
                         <Button btnStyle="third" > Find out more </Button>
                         <div className=" flex items-center gap-[21px] " >
                         <div><Button btnStyle="play" > <img src={Polyicon} alt={Polyicon} /> </Button></div>
                         <div className=" text-text-crl text-[17px] " >Play Demo</div>
                         </div>
                    </div>
               </div>

               <div className=" relative z-20 " >
                    <img src={GirlIcon} alt={GirlIcon} />
                   <div className="  " >
                     <img className=" absolute top-0 right-0 translate-x-[-460px] translate-y-[50px] " src={AroPlain} alt="icon" />
                    <img className=" absolute top-0 right-0 translate-x-[20px] translate-y-[100px] -z-10 " src={AroPlain} alt="icon" />
                   </div>
               </div>

          </div>

     </div>
      
    </section>
  )
}

export default Banner
