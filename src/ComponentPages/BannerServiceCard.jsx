import { Link } from "lucide-react"
import { service_customization, service_dot, services_events, services_flight, services_weather } from "../ImportImages/ImportImages"


const BannerServiceCard = ({service}) => {
  return (
    <section className="relative" >

      <div className=" flex flex-col items-center mb-[70px] ml-[200%] " >
        <p className="font-semibold text-[18px] text-p  " >CATEGORY</p>
        <h1 className=" text-[50px] font-bold text-h1 text-nowrap leading-2 mt-[25px] " >We Offer Best Services</h1>
      </div>

      <div className=" grid grid-cols-4 gap-100 " >

        <div className=" text-center" >
        <div className=" relative z-[1]  after:absolute hover:after:transition-all after:bottom-0 after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-[#DF6951] after:translate-y-[40px] rounded-[36px] " >
        
        <div className=" w-[267px] h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard  rounded-[36px] " >

       <div className=" flex flex-col items-center text-center " >
         <div>
        <img className=" h-[78px] w-[92px] " src={services_weather} alt="weather" />
        </div>
        <div>
          <h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " >Calculated Weather </h3>
          <p className="text-[16px] leading-[26px] text-p" >Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
       </div>

        </div>
      </div>
      </div>

      <div className=" text-center" >
        <div className=" relative z-[1]  after:absolute hover:after:transition-all after:bottom-0 after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-[#DF6951] after:translate-y-[40px] rounded-[36px] " >
        
        <div className=" w-[267px] h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px]  " >

       <div className=" flex flex-col items-center text-center translate-y-[-70px] " >
         <div>
        <img className=" h-[153.33px] w-[166.87px] translate-y-[28px] " src={services_flight} alt="weather" />
        </div>
        <div>
          <h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " > Best Flights </h3>
          <p className=" text-[16px] leading-[26px] text-p " >Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
       </div>

        </div>
      </div>
      </div>

      <div className="  text-center " >
        <div className=" relative z-[1]  after:absolute hover:after:transition-all after:bottom-0 after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-[#DF6951] after:translate-y-[40px] rounded-[36px] " >
        
        <div className=" w-[267px] h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px]  " >

       <div className=" flex flex-col items-center text-center " >
         <div>
        <img className=" h-[75px] w-[67px] " src={services_events} alt="events" />
        </div>
        <div>
          <h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " >Calculated Weather </h3>
          <p className="text-[16px] leading-[26px] text-p">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
       </div>

        </div>
      </div>
      </div>

      <div className=" mx-auto " >
        <div className=" relative z-[1]  after:absolute hover:after:transition-all after:bottom-0 after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-[#DF6951] after:translate-y-[40px] rounded-[36px] " >
        
        <div className=" w-[267px] h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px]  " >

       <div className=" flex flex-col items-center text-center " >
         <div>
        <img className=" h-[66px] w-[77px] " src={service_customization} alt="weather" />
        </div>
        <div>
          <h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4  " >Customization </h3>
          <p className=" text-[16px] leading-[26px] text-p " >We deliver outsourced aviation services for military customers</p>
        </div>
       </div>

        </div>
      </div>
      </div>

      </div>

      <div className=" absolute z-20 top-0 right-0 translate-x-[820%] " >
        <img src={service_dot} alt="dot" />
      </div>

    </section>
  )
}

export default BannerServiceCard
