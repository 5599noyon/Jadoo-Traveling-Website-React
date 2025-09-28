import Banner from "../ComponentPages/Banner"
import BannerServices from "../ComponentPages/BannerServices"
import Company from "../ComponentPages/Company"
import Information from "../ComponentPages/Information"
import NextTrip from "../ComponentPages/NextTrip"
import Testimonials from "../ComponentPages/Testimonials"
import TopSell from "../ComponentPages/TopSell"


const HomePages = () => {
  const api = import.meta.env.VITE_apiKey
  return (
    <>

    <Banner />
    <BannerServices/>
    <TopSell/>
    <NextTrip/>
    <Testimonials/>
    <Company/>
    <Information/>
    </>
  )
}

export default HomePages
