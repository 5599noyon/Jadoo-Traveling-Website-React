
import { Company1, Company2, Company3, Company4, Company5 } from "../ImportImages/ImportImages"
import CompanyImage from "./CompanyImage"

const Company = () => {
  return (
    <div className="container mt-[140px] mb-[124px]">
     <div className="flex items-center justify-between gap-3">
     <CompanyImage src={Company1} />
     <CompanyImage src={Company2} />
     <CompanyImage src={Company3} />
     <CompanyImage src={Company4} />
     <CompanyImage src={Company5} />
     </div>
    </div>
  )
}


export default Company