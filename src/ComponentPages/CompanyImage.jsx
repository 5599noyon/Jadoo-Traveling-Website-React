

const CompanyImage = ({src,alt}) => {
  return (
    <div className=" h-[86px] w-[172.86px] flex justify-center items-center overflow-hidden rounded-[10px] hover:shadow-companyCard cursor-pointer grayscale-100 hover:grayscale-0 hover:scale-110 transition-all ease-linear duration-150" >
    <img src={src} alt={alt} />
    </div>
  )
}

export default CompanyImage
