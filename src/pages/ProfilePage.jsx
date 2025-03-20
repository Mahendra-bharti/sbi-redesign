import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaCheck, FaTimes, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: "Mahendra Bharti",
        email: "mahendra.bharti@example.com",
        phone: "9876543210",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSave = () => {
        setIsEditing(false);
        alert("Profile updated successfully!");
    };

    return (
        <motion.div
            className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen py-12 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Back Button */}
            <motion.button
                className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center space-x-2 hover:bg-blue-800 transition-all duration-300 mb-6"
                onClick={() => navigate(-1)}
                whileHover={{ scale: 1.05 }}
            >
                <FaArrowLeft />
                <span>Back</span>
            </motion.button>

            <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8 drop-shadow-md">
                Profile Page
            </h1>

            <motion.div
                className="max-w-md mx-auto bg-white p-8 shadow-xl rounded-xl border-t-4 border-blue-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <div className="flex items-center space-x-4 mb-6">
                    <FaUser className="text-blue-700 text-5xl" />
                    <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
                </div>

                <div className="space-y-4">
                    <ProfileField
                        icon={<FaEnvelope />}
                        label="Email"
                        value={userData.email}
                        isEditing={isEditing}
                        onChange={handleChange}
                        name="email"
                    />
                    <ProfileField
                        icon={<FaPhone />}
                        label="Phone"
                        value={userData.phone}
                        isEditing={isEditing}
                        onChange={handleChange}
                        name="phone"
                    />
                </div>

                {/* Buttons Section */}
                <div className="flex space-x-4 mt-6">
                    {isEditing ? (
                        <>
                            <motion.button
                                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
                                onClick={handleSave}
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaCheck />
                                <span>Save Changes</span>
                            </motion.button>

                            <motion.button
                                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2"
                                onClick={() => setIsEditing(false)}
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaTimes />
                                <span>Cancel</span>
                            </motion.button>
                        </>
                    ) : (
                        <motion.button
                            className="bg-blue-700 text-white w-full py-2 rounded-lg hover:bg-blue-800 flex items-center justify-center space-x-2"
                            onClick={() => setIsEditing(true)}
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaEdit />
                            <span>Edit Profile</span>
                        </motion.button>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProfileField = ({ icon, label, value, isEditing, onChange, name }) => (
    <motion.div
        className="flex items-center space-x-4 border-b pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
    >
        <div className="text-2xl text-blue-700">{icon}</div>
        <div className="flex-1">
            <label className="text-gray-600 block text-sm">{label}</label>
            {isEditing ? (
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full px-3 py-2 border rounded-lg mt-1"
                />
            ) : (
                <p className="text-gray-800 font-semibold mt-1">{value}</p>
            )}
        </div>
    </motion.div>
);

export default ProfilePage;
