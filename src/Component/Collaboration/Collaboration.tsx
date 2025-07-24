type CollaborationProps = {
    number: string;
    bgColor: string;
    iconColor: string;
    text1: string;
    text2: string;
    description: string;
    link: string;
    linkText: string;
    numberColor: string;
};

const Collaboration = ({
    number,
    bgColor,
    iconColor,
    text1,
    text2,
    description,
    link,
    linkText,
    numberColor,
}: CollaborationProps) => {
    return (
        <div
            className={`relative w-68 h-[420px] rounded-[30px] overflow-hidden transition-all duration-500 group cursor-pointer`}
            style={{ backgroundColor: bgColor }}
        >
            {/* Top Icon + Number */}
            <div className="absolute top-4 left-4">
                <div className="w-6 h-6 rounded-full relative" style={{ backgroundColor: iconColor }}>
                    <div className="w-3 h-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: bgColor }}></div>
                </div>
            </div>

            <h1
                className="absolute top-4 right-4 text-[120px] font-bold leading-none"
                style={{ color: numberColor }}
            >
                {number}
            </h1>

            {/* Initial Content */}
            <div className="absolute bottom-20 left-4 transition-transform duration-300 group-hover:-translate-y-24">
                <div>
                    <h2 className="text-[24px] font-bold text-black leading-tight text-start">{text1}</h2>
                    <h2 className="text-[24px] font-bold text-black leading-tight text-start">{text2}</h2>
                </div>
            </div>

            {/* Hover Content */}
            <div className="absolute left-4 right-4 bottom-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-[#2B2B2B] text-sm leading-relaxed mb-4 text-start">
                    {description}
                </p>
                <a href={link} className="text-blue-600 font-medium hover:underline flex items-start">
                    {linkText} ↗
                </a>
            </div>
        </div>
    );
};

const CollaborationCards = () => (
    <div className="flex gap-6 flex-wrap">
        <Collaboration
            number="01"
            bgColor="#FAD7EB"
            iconColor="#000000"
            numberColor="#6B2D4C"
            text1="Team"
            text2="Augmentation"
            description="Deploy a dedicated tech team that integrates seamlessly with your business. They’ll tackle your project needs with precision."
            link="#"
            linkText="Explore Now"
        />
        <Collaboration
            number="02"
            bgColor="#D7FADF"
            iconColor="#2B6B2D"
            numberColor="#2B6B2D"
            text1="MVP"
            text2="Services"
            description="From idea to launch, we provide the essentials to build your startup’s minimum viable product effectively."
            link="#"
            linkText="Discover More"
        />
        <Collaboration
            number="03"
            bgColor="#D7E6FA"
            iconColor="#2D4C6B"
            numberColor="#2D4C6B"
            text1="Cloud"
            text2="Solutions"
            description="Scale your business with robust cloud solutions designed for flexibility and security."
            link="#"
            linkText="See Details"
        />
        <Collaboration
            number="04"
            bgColor="#FAF7D7"
            iconColor="#6B6B2D"
            numberColor="#6B6B2D"
            text1="UI/UX"
            text2="Design"
            description="Enhance user experience with creative UI/UX design that delights and engages your audience."
            link="#"
            linkText="Learn More"
        />
    </div>
);

export default CollaborationCards;