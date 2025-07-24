import Header from "../../Component/Header/Header";
import HeroSection from "../../Component/Hero/HeroSection";
const Home = () => {
    return (
        <div>
            <div className="sticky top-0 z-50 bg-white">
                <Header />
            </div>
            <HeroSection />
        </div>
    );
};

export default Home;