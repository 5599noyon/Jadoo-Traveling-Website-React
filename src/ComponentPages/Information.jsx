import { Link, Mail } from 'lucide-react';
import Button from '../Component/Button';
import { InformationAro } from '../ImportImages/ImportImages';

const Information = () => {
  return (
    <section className=" relative information container ">
      <div className=' flex flex-col items-center ' >
          <h1 className=' text-[33px] font-semibold leading-[58px] text-text-crl max-w-[859px] text-center mb-[75px] ' >Subscribe to get information, latest news and other interesting offers about Jadoo</h1>
          <div className="relative space-x-[24px] mb-[78px] ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <Mail color="#3b3b3b" className="h-5 w-5 mb-[20px] text-gray-400 translate-y-[11px] " /> 
              </div>
              <input
                type="text"
                placeholder="Your email"
                className="w-[421px] h-[68px] pl-10 pr-4 py-3 border  border-gray-300 rounded-lg focus:outline-none bg-white "
              />
               <Button btnStyle='information' > Subscribe </Button>
            </div>

            <div className=' informationAro absolute top-0 right-0 ' >
               <img src={InformationAro} alt="arrow" /> 
            </div>
              
      </div>
    </section>
  )
}

export default Information
