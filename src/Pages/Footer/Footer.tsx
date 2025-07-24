import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-black py-16 px-5 font-sans">
            <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
                <div className="flex flex-col">
                    <img
                        src="/src/assets/Logo-1.svg"
                        alt="Vivasoft Logo"
                        className="w-[150px] mb-5"
                    />
                    <p className="text-sm leading-6 text-black">
                        We are a software development company that provides high-quality,
                        cost-effective services to help our clients improve their business
                        operations and achieve their goals.
                    </p>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-5 text-black">Services</h3>
                    <ul className="list-none p-0 m-0">
                        {['Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud & DevOps', 'QA & Testing'].map(
                            (service) => (
                                <li key={service} className="mb-2.5">
                                    <a
                                        href="#"
                                        className="text-sm text-black no-underline transition-colors duration-300 hover:text-black"
                                    >
                                        {service}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-5 text-black">Company</h3>
                    <ul className="list-none p-0 m-0">
                        {['About Us', 'Careers', 'Blog', 'Contact Us'].map((item) => (
                            <li key={item} className="mb-2.5">
                                <a
                                    href="#"
                                    className="text-sm text-black no-underline transition-colors duration-300 hover:text-black"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-5 text-black">Contact</h3>
                    <div className="text-sm text-black mb-5">
                        <p className="mb-2">Email: info@vivasoft.com</p>
                        <p className="mb-2">Phone: +1 234 567 890</p>
                        <p>Address: 123 Tech Street, Silicon Valley, CA</p>
                    </div>
                    <div className="flex gap-4">
                        {/* Replace "FB", "TW", "LI" with actual icons if possible */}
                        <a href="#" className="text-black text-xl no-underline transition-colors duration-300 hover:text-blue-600">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-black text-xl no-underline transition-colors duration-300 hover:text-blue-600">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-black text-xl no-underline transition-colors duration-300 hover:text-blue-600">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#333333] mt-10 pt-5 flex justify-between items-center text-xs text-black">
                <p>&copy; {new Date().getFullYear()} Vivasoft. All rights reserved.</p>
                <div>
                    <a href="#" className="text-black no-underline ml-4 hover:text-black">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-black no-underline ml-4 hover:text-black">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
