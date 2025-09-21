import Banner from "../ComponentPages/Banner"
import BannerServices from "../ComponentPages/BannerServices"
import Company from "../ComponentPages/Company"
import Information from "../ComponentPages/Information"
import NextTrip from "../ComponentPages/NextTrip"
import TopSell from "../ComponentPages/TopSell"


const HomePages = () => {
  return (
    <>

    <Banner />
    <BannerServices/>
    <TopSell/>
    <NextTrip/>
    <Company/>
    <Information/>
    </>
  )
}

export default HomePages
