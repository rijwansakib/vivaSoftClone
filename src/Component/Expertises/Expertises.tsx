/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    FaBuilding, FaStore, FaMobileAlt, FaHome, FaLaptopCode, FaHeartbeat,
    FaCar, FaCamera, FaBriefcase, FaRocket, FaVrCardboard, FaBalanceScale,
    FaHandsHelping, FaUniversity, FaDumbbell, FaGamepad, FaTshirt,
    FaBolt, FaSeedling, FaTruck
} from "react-icons/fa";

const industryData = [
    { name: "Finance & Banking", icon: <FaBuilding />, color: "bg-blue-400" },
    { name: "E-commerce", icon: <FaStore />, color: "bg-green-400" },
    { name: "Telecom", icon: <FaMobileAlt />, color: "bg-purple-400" },
    { name: "Real Estate", icon: <FaHome />, color: "bg-red-400" },
    { name: "Software", icon: <FaLaptopCode />, color: "bg-yellow-400" },
    { name: "Health & Fitness", icon: <FaHeartbeat />, color: "bg-pink-400" },
    { name: "Automotive", icon: <FaCar />, color: "bg-indigo-400" },
    { name: "Photo & Video", icon: <FaCamera />, color: "bg-teal-400" },
    { name: "Business", icon: <FaBriefcase />, color: "bg-rose-400" },
    { name: "Startup", icon: <FaRocket />, color: "bg-orange-400" },
    { name: "AR/VR", icon: <FaVrCardboard />, color: "bg-cyan-400" },
    { name: "Legal Services", icon: <FaBalanceScale />, color: "bg-fuchsia-400" },
    { name: "Non-profit", icon: <FaHandsHelping />, color: "bg-lime-400" },
    { name: "Govt. & Public Sector", icon: <FaUniversity />, color: "bg-amber-400" },
    { name: "Sports & Fitness", icon: <FaDumbbell />, color: "bg-emerald-400" },
    { name: "Gaming", icon: <FaGamepad />, color: "bg-violet-400" },
    { name: "Fashion & Apparel", icon: <FaTshirt />, color: "bg-pink-400" },
    { name: "Energy & Utilities", icon: <FaBolt />, color: "bg-yellow-400" },
    { name: "Agriculture", icon: <FaSeedling />, color: "bg-green-400" },
    { name: "Logistics", icon: <FaTruck />, color: "bg-purple-400" },
];

const Box = ({ icon, name, color }: any) => (
    <div
        className={`w-[180px] h-[120px] flex flex-col justify-center items-center text-center p-4 ${color} text-white rounded-tl-[20%] rounded-br-[30%] shadow-lg hover:scale-105 transform transition-all duration-300`}
    >
        <div className="text-3xl mb-2">{icon}</div>
        <div className="text-base font-semibold leading-tight">{name}</div>
    </div>
);

const Expertises = () => {
    const row1 = industryData.slice(0, 7);
    const row2 = industryData.slice(7, 13);
    const row3 = industryData.slice(13, 20);

    return (
        <div className="py-20 px-5  text-white">
            <div className="flex flex-col items-center gap-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Our Industry Expertises</h1>
                <p className="max-w-2xl text-lg">
                    Our deep understanding of diverse industries empowers us to design customized software solutions. Let our expertise be the catalyst for your next triumph.
                </p>
            </div>

            <div className="mt-12 flex flex-col gap-8 items-center">
                <div className="flex gap-6 flex-wrap justify-center">{row1.map((item, i) => <Box key={i} {...item} />)}</div>
                <div className="flex gap-6 flex-wrap justify-center">{row2.map((item, i) => <Box key={i} {...item} />)}</div>
                <div className="flex gap-6 flex-wrap justify-center">{row3.map((item, i) => <Box key={i} {...item} />)}</div>
            </div>
        </div>
    );
};

export default Expertises;
