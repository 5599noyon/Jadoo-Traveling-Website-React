import { icons } from "lucide-react"
import BannerServiceCard from "./BannerServiceCard"
import { services_weather } from "../ImportImages/ImportImages"

// const servicesData = [
//   {
//     id: 1,
//     icon: services_weather ,
//     title:"Calculated Weather ",
//     details:"Built Wicket longer admire do barton vanity itself do in it.",
//   },
//   {
//     id: 1,
//     icon: services_weather ,
//     title:"Calculated Weather ",
//     details:"Built Wicket longer admire do barton vanity itself do in it.",
//   },
//   {
//     id: 1,
//     icon: services_weather ,
//     title:"Calculated Weather ",
//     details:"Built Wicket longer admire do barton vanity itself do in it.",
//   },
//   {
//     id: 1,
//     icon: services_weather ,
//     title:"Calculated Weather ",
//     details:"Built Wicket longer admire do barton vanity itself do in it.",
//   }
// ]

const BannerServices= () => {
  return (
    <section>
      <div className=" container mb-[123px] " >
        <div className=" grid grid-cols-4 " >
          <BannerServiceCard/>
        </div>
      </div>
    </section>
  )
}

export default BannerServices
