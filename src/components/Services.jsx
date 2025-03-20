import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaCreditCard, FaMobileAlt, FaPiggyBank, FaUniversity, FaGlobe, FaExchangeAlt, FaShieldAlt, FaArrowLeft } from "react-icons/fa";

const ServicesPage = () => {
    const navigate = useNavigate();

    const services = [
        { title: "Personal Banking", icon: <FaUserShield />, description: "Manage your accounts, deposits, and savings efficiently." },
        { title: "Credit Cards", icon: <FaCreditCard />, description: "Enjoy exclusive offers and rewards with our credit cards." },
        { title: "Mobile Banking", icon: <FaMobileAlt />, description: "Seamless banking experience on your mobile devices." },
        { title: "Loan Services", icon: <FaPiggyBank />, description: "Quick and easy loan approvals with minimal paperwork." },
        { title: "Education Loan", icon: <FaUniversity />, description: "Flexible education loan plans for students and parents." },
        { title: "International Banking", icon: <FaGlobe />, description: "Experience smooth overseas transactions and accounts." },
        { title: "Forex Services", icon: <FaExchangeAlt />, description: "Fast and reliable foreign exchange solutions." },
        { title: "Insurance Services", icon: <FaShieldAlt />, description: "Secure your future with our trusted insurance plans." }
    ];

    return (
        <div className="bg-blue-50 min-h-screen py-12 px-6">
            {/* Back Button */}
            <motion.button
                className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center space-x-2 hover:bg-blue-800 transition-all duration-300 mb-6"
                onClick={() => navigate(-1)} // Navigates back to the previous page
                whileHover={{ scale: 1.05 }}
            >
                <FaArrowLeft />
                <span>Back</span>
            </motion.button>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Services</h1>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white shadow-md rounded-lg p-6 text-center border-t-4 hover:shadow-xl hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl text-blue-700 mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
