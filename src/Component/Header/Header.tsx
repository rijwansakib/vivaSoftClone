import { useState } from "react";
import logo from "../../assets/Logo-1.svg";
import { FaAngleDown } from "react-icons/fa";

const menuItems = [
    { label: "Service", dropdown: ["Service 1", "Service 2", "Service 3"] },
    { label: "Academy", dropdown: ["Academy 1", "Academy 2"] },
];

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex items-center justify-between py-6 px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-40" />
                </div>

                {/* Navigation Menu */}
                <nav className="flex items-center space-x-6">
                    {menuItems.map((item, i) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => setOpenDropdown(i)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            {/* Dropdown Trigger Button */}
                            <button className="flex justify-center items-center gap-2 text-gray-700 font-semibold hover:text-blue-600 focus:outline-none transition-colors duration-200">
                                {item.label}
                                <span>
                                    <FaAngleDown />
                                </span>
                            </button>

                            {/* Dropdown Menu */}
                            {openDropdown === i && (
                                <div className="absolute left-0 top-full w-54 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <ul className="py-2 px-2">
                                        {item.dropdown.map((sub, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href="#"
                                                    className="block px-5 py-3 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 rounded"
                                                >
                                                    {sub}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Static Menu Items */}
                    <li className="list-none cursor-pointer text-gray-700 font-semibold hover:text-blue-500 transition-colors duration-200">
                        Career
                    </li>
                    <li className="list-none cursor-pointer text-gray-700 font-semibold hover:text-blue-500 transition-colors duration-200">
                        Blog
                    </li>
                    <li className="list-none cursor-pointer text-gray-700 font-semibold hover:text-blue-500 transition-colors duration-200">
                        Contact
                    </li>

                    {/* CTA Button */}
                    <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition duration-300">
                        Schedule a Call
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
