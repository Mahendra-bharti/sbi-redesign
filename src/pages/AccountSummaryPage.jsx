import { motion } from "framer-motion";
import { FaRupeeSign, FaArrowUp, FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountSummaryPage = () => {
    const navigate = useNavigate();

    const accountDetails = [
        { 
            title: "Account Balance", 
            amount: "₹1,25,000", 
            icon: <FaRupeeSign />, 
            color: "bg-green-100 text-green-600 border-green-400" 
        },
        { 
            title: "Total Deposits", 
            amount: "₹75,000", 
            icon: <FaArrowUp />, 
            color: "bg-blue-100 text-blue-600 border-blue-400" 
        },
        { 
            title: "Total Withdrawals", 
            amount: "₹50,000", 
            icon: <FaArrowDown />, 
            color: "bg-red-100 text-red-600 border-red-400" 
        }
    ];

    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen py-12 px-6">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 mb-4"
            >
                <FaArrowLeft />
                <span>Back</span>
            </button>

            <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8 drop-shadow-md">
                Account Summary
            </h1>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                        opacity: 1,
                        transition: { staggerChildren: 0.2 } // Delay for cascading effect
                    }
                }}
            >
                {accountDetails.map((detail, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-8 text-center border-t-4 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        {/* Icon Container */}
                        <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full border-4 ${detail.color}`}>
                            {detail.icon}
                        </div>

                        {/* Title & Amount */}
                        <h3 className="text-2xl font-bold text-gray-800 mt-4">{detail.title}</h3>
                        <p className="text-lg font-bold text-gray-700 mt-2">{detail.amount}</p>

                        {/* View Details Button */}
                        <motion.button 
                            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            View Details
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default AccountSummaryPage;