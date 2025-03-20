import { motion } from "framer-motion";
import { FaShieldAlt, FaMoneyCheckAlt, FaMobileAlt, FaHeadset, FaUserCheck, FaStar  ,FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-blue-50 min-h-screen flex flex-col">

            {/* Navbar */}
            <nav className="bg-blue-700 text-white py-4 px-6 shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>
                    SBI Online
                </h1>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl focus:outline-none"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                    <motion.button
                        className="bg-transparent border-2 border-white px-4 py-2 rounded-xl shadow-md hover:bg-white hover:text-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => navigate('/dashboard')}
                    >
                        Dashboard
                    </motion.button>
                    <motion.button
                        className="bg-transparent border-2 border-white px-4 py-2 rounded-xl shadow-md hover:bg-white hover:text-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation (Dropdown) */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-3">
                    <motion.button
                        className="block w-full text-left bg-transparent border-2 border-white px-4 py-2 rounded-xl shadow-md hover:bg-white hover:text-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate('/dashboard')}
                    >
                        Dashboard
                    </motion.button>
                    <motion.button
                        className="block w-full text-left bg-transparent border-2 border-white px-4 py-2 rounded-xl shadow-md hover:bg-white hover:text-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </motion.button>
                </div>
            )}
        </nav>

            {/* Hero Section */}
            <motion.section 
    className="flex flex-col items-center text-center py-24 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
>
    {/* Heading */}
    <motion.h1 
        className="text-6xl font-extrabold mb-6 leading-tight"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
    >
        Empower Your Banking Experience
    </motion.h1>

    {/* Subheading */}
    <p className="text-lg max-w-3xl leading-relaxed">
        Enjoy seamless banking with secure transactions, user-friendly features, and 24/7 support at your fingertips.
    </p>

    {/* Buttons */}
    <div className="mt-8 space-x-6">
        <motion.button 
            className="bg-white text-blue-700 px-8 py-3 rounded-xl shadow-md hover:bg-blue-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate('/services')}
        >
            Get Started
        </motion.button>

        <motion.button 
            className="bg-transparent border-2 border-white px-8 py-3 rounded-xl shadow-md hover:bg-white hover:text-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
        >
            Learn More
        </motion.button>
    </div>
</motion.section>


            {/* Why Choose Us Section */}
            <motion.section 
                className="py-12 px-8 bg-white"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose SBI?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard icon={<FaShieldAlt />} title="Top Security" description="Bank with confidence using multi-layered security protocols." />
                    <FeatureCard icon={<FaMoneyCheckAlt />} title="Instant Transfers" description="Send money faster than ever before." />
                    <FeatureCard icon={<FaMobileAlt />} title="Mobile Banking" description="Manage everything right from your smartphone." />
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section 
                className="py-12 px-8 bg-blue-100"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TestimonialCard name="Ravi Kumar" feedback="SBI's net banking has simplified my life. Highly recommend!" />
                    <TestimonialCard name="Priya Sharma" feedback="Fast transactions and amazing customer support." />
                    <TestimonialCard name="Amit Singh" feedback="Best banking app with a user-friendly interface." />
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section 
                className="py-12 px-8 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
                <ul className="space-y-4 max-w-4xl mx-auto">
                    <li>🔹 How can I register for SBI Net Banking?</li>
                    <li>🔹 What should I do if I forget my password?</li>
                    <li>🔹 How can I check my account balance online?</li>
                </ul>
            </motion.section>

            {/* Footer */}
            <footer className="bg-blue-700 text-white text-center py-6 mt-auto">
                <p>&copy; 2025 SBI Online. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <motion.div 
    className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl border-2 border-blue-700"
    whileHover={{ scale: 1.05 }}
>
    <div className="text-4xl text-blue-700 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
</motion.div>

);

const TestimonialCard = ({ name, feedback }) => (
    <motion.div 
        className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
        whileHover={{  scale: 1.05 }}
    >
        <FaStar className="text-yellow-400 text-4xl mx-auto mb-2" />
        <p className="text-lg font-semibold">{feedback}</p>
        <p className="text-blue-700 mt-2">— {name}</p>
    </motion.div>
);

export default LandingPage;
