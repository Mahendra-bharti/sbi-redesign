import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaFileInvoice, FaChartLine, FaSignOutAlt, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const sections = [
        { 
            title: "Account Summary", 
            icon: <FaChartLine />, 
            route: "/account_summary", 
            description: "View your account balances and key details." 
        },
        { 
            title: "Account Statement", 
            icon: <FaFileInvoice />, 
            route: "/account_statement", 
            description: "Check detailed transaction history." 
        },
        { 
            title: "Profile Management", 
            icon: <FaRegUserCircle />, 
            route: "/profile", 
            description: "Update your profile and settings." 
        },
    ];

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`min-h-screen py-12 px-6 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'}`}>
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-blue-700 text-white py-4 px-8 rounded-md shadow-md sticky top-0 z-50">
                <h1 className="text-2xl font-bold">SBI Online</h1>
                <div className="flex items-center space-x-4">
                    <motion.button 
                        className="bg-white text-blue-700 px-4 py-2 rounded-xl shadow-md hover:bg-blue-100 transition-all"
                        whileHover={{ scale: 1.1 }}
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </motion.button>

                    <motion.button 
                        className="bg-red-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-red-700 transition-all"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => navigate('/')}
                    >
                        <FaSignOutAlt /> Logout
                    </motion.button>
                </div>
            </nav>

            {/* Greeting Section */}
            <h2 className="text-center text-3xl font-semibold mt-8">Welcome, <span className="text-blue-600">Mahendra Bharti</span></h2>

            {/* Quick Links */}
            <div className="flex justify-center mt-6 space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Quick Link 1</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Quick Link 2</button>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        className={`p-6 shadow-lg rounded-lg cursor-pointer transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:scale-105 border-t-4 border-blue-600`}
                        whileHover={{ scale: 1.08 }}
                        onClick={() => navigate(section.route)}
                    >
                        <div className="text-5xl text-blue-600 mb-4">{section.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                        <p>{section.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;