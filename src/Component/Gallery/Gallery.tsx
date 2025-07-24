import img1 from '../../assets/Developer-team-Meeting.webp';
import img2 from '../../assets/Engineers-Meeting-Vivasoft.webp';
import img3 from '../../assets/Skilled-Enginner-Vivasoft-Limited-1.webp';
import img4 from '../../assets/Vivasoft-Developer-1.webp';
import img5 from '../../assets/Vivasoft-Developer-Software-Company-1.webp';
import img6 from '../../assets/Vivasoft-Engineer-1.webp';
import img7 from '../../assets/meeting-vivasoft.webp';
import img8 from '../../assets/vivasoft-developer.webp';
import img9 from '../../assets/vivasoft-developers-team-collaboration-6627a11fdcfbd-768x454-1.webp';
import { FaRegFilePdf } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

const CompanyStats = () => {
    return (
        <div className="relative">
            {/* Header Buttons */}
            <div className=" flex gap-4 mb-8 justify-center absolute top-0 left-0 right-0">
                <button className="flex justify-center items-center gap-4 bg-blue-700 text-white text-base font-semibold px-20 py-4 rounded-2xl mt-6 hover:shadow-lg  transition-shadow duration-200 cursor-pointer">
                    See Company Profile
                    <span>
                        <FaRegFilePdf />
                    </span>
                </button>
                <button className="flex justify-center items-center gap-4 bg-blue-700 text-white px-20 py-4 rounded-2xl ml-4 mt-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                    Hire The Best Team
                    <span>
                        <FaArrowRightLong />
                    </span>
                </button>
            </div>

            {/* Main Grid Layout */}



            <div className="grid grid-cols-8 grid-rows-1 gap-4">
                <div className="row-span-2">
                    <img src={img4} alt="Developer Team Meeting" className="w-full h-full object-fill rounded-tl-[30%]" />
                </div>
                <div className="col-span-2 col-start-1 row-start-3">
                    <img src={img2} alt="Developer Team Meeting" className="w-full h-full object-cover rounded-tr-[30%]" />
                </div>
                <div className="col-start-2 row-start-2 bg-sky-200 text-black text-base font-semibold flex flex-col justify-center items-center p-4 rounded-tr-[80px]">
                    <h1 className='text-xl'>top telents</h1>
                    <h1 className='text-3xl'>300+</h1>
                </div>
                <div className="col-start-3 row-start-2">
                    <img src={img8} alt="Developer Team Meeting" className="w-full h-full object-cover rounded-tr-[40%]" />
                </div>
                <div className="col-start-3 row-start-3  bg-pink-200 text-black text-base font-semibold flex flex-col justify-center items-center p-4 rounded-tr-[80px]">
                    <h1 className='text-xl'>Projects</h1>
                    <h1 className='text-3xl'>100+</h1>
                </div>
                <div className="row-span-2 col-start-4 row-start-2">
                    <img src={img7} alt="Developer Team Meeting" className="w-full h-full object-cover rounded-tr-[120px]" />
                </div>
                <div className="col-start-5 row-start-2 bg-green-200 text-black text-base font-semibold flex flex-col justify-center items-center p-4 rounded-tr-[80px]">
                    <h1 className='text-xl'>Happy Clients</h1>
                    <h1 className='text-3xl'>100+</h1>
                </div>
                <div className="col-start-5 row-start-3 flex items-end">
                    <img src={img1} alt="Developer Team Meeting" className="w-full object-cover rounded-tr-[80px] h-[80%]" />
                </div>
                <div className="col-start-6 row-start-2">
                    <img src={img5} alt="Developer Team Meeting" className="w-full h-full object-cover rounded-tl-[80px]" />
                </div>
                <div className="col-start-7 row-start-2 bg-purple-200 text-black text-base font-semibold flex flex-col justify-center items-center p-4 rounded-tr-[80px]">
                    <h1 className='text-xl'>Tech Stack</h1>
                    <h1 className='text-3xl'>20+</h1>
                </div>
                <div className="col-span-2 col-start-6 row-start-3">
                    <img src={img9} alt="Developer Team Meeting" className="w-full h-full object-cover rounded-tr-[80px]" />
                </div>
                <div className="row-span-2 col-start-8 row-start-1">
                    <img src={img6} alt="Developer Team Meeting" className="w-full h-full object-cover rounded-tl-[80px]" />
                </div>
                <div className="col-start-8 row-start-3">
                    <img src={img3} alt="Developer Team Meeting" className="w-full h-full object-cover rounded-tr-[80px]" />
                </div>
            </div>



        </div>
    );
};

export default CompanyStats;
