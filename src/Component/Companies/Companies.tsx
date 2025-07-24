import img1 from '../../assets/Companies/Flarie-2.webp';
import img2 from '../../assets/Companies/Frame-1321314136.webp';
import img3 from '../../assets/Companies/Goava-1.webp';
import img4 from '../../assets/Companies/Horizantal-Full-Colour-Logo-Black-1.webp';
import img5 from '../../assets/Companies/LIMESTONE-LAB-LIMITED.webp';
import img6 from '../../assets/Companies/Logo-2.webp';
import img7 from '../../assets/Companies/Mask-group-2.webp';
import img8 from '../../assets/Companies/NumberSkills-1.webp';
import img9 from '../../assets/Companies/Talrock-1.webp';
import img10 from '../../assets/Companies/Mask-group.webp';




const companyImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
];

const Companies = () => {
    return (
        <div>
            <h1 className="text-lg">50+ companies rely on our top 1% talent to scale their dev teams.</h1>

            <div className="grid grid-cols-5 gap-10 mt-12">
                {companyImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`Company ${idx + 1}`} className="h-12 w-40 object-contain" />
                ))}
            </div>
        </div>
    );
};

export default Companies;