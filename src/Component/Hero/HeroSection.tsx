import Collaboration from "../Collaboration/Collaboration";
import Companies from "../Companies/Companies";
import Expertises from "../Expertises/Expertises";
import Gallery from "../Gallery/Gallery";

const HeroSection = () => {
    return (
        <div className=" bg-[linear-gradient(180deg,_#f1f8ff_0%,_#f5feff_70%)] flex flex-col justify-center items-center text-center">
            <div className="mt-20">
                <div className="flex justify-center items-center">
                    <h4 className=" bg-orange-200 px-6 rounded-2xl py-2 w-94 text-center">Top Software Development Company</h4>
                </div>
                <div>
                    <h1 className="text-6xl font-semibold text-center mt-6 ">We Deploy World Class Agile</h1>
                    <h1 className="text-6xl font-semibold text-center mt-6 ">Product Teams on Demand</h1>
                </div>
                <div className="mt-8">
                    <p>Unlock superior software solutions with Vivasoft, a leading offshore development firm delivering <br /> creativity and expertise.</p>
                </div>
            </div>
            <div className="mt-20 w-full px-4">
                <Gallery />
            </div>
            <div className="mt-12 w-[80%] mx-auto">
                <Companies />
            </div>
            <div className="w-full bg-[#0c0a25] h-full mt-20 flex flex-col justify-center items-center py-20">

                <div className="w-[80%] mx-auto">
                    <div className="flex items-center justify-between text-white my-30">
                        <div className="w-[50%]">
                            <h1 className="text-6xl font-bold text-center">Our Methodology to Collaboration</h1>
                        </div>
                        <div className="w-[45%]">
                            <h1 className="text-lg">We follow an agile development methodology and guarantee the timely delivery of high-quality software products.</h1>
                        </div>

                    </div>
                    <Collaboration />
                </div>
            </div>
            <div className="w-full ] h-full bg-[#0c0a25] py-20">
                <Expertises />
            </div>
        </div>
    );
};

export default HeroSection;













