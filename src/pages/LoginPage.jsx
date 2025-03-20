import { useState } from "react";

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-white shadow-md rounded-lg max-w-md mx-auto p-6 mt-10">
            <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
                {isSignUp ? "Sign Up" : "Login"}
            </h2>

            <form className="space-y-4">
                {/* Name Field (Only for Signup) */}
                {isSignUp && (
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 border rounded-lg" 
                            placeholder="Enter your name" 
                        />
                    </div>
                )}

                <div>
                    <label className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        className="w-full px-4 py-2 border rounded-lg" 
                        placeholder="Enter your email" 
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Password</label>
                    <div className="relative">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="w-full px-4 py-2 border rounded-lg" 
                            placeholder="Enter your password" 
                        />
                        <span 
                            className="absolute right-3 top-3 cursor-pointer text-blue-700" 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "👁️" : "👁️‍🗨️"}
                        </span>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="bg-blue-700 text-white w-full py-2 rounded-lg"
                >
                    {isSignUp ? "Sign Up" : "Login"}
                </button>
            </form>

            {/* Toggle Button */}
            <p className="text-center mt-4 text-gray-600">
                {isSignUp ? "Already have an account?" : "Don't have an account?"} 
                <span 
                    className="text-blue-700 cursor-pointer ml-1"
                    onClick={() => setIsSignUp(!isSignUp)}
                >
                    {isSignUp ? "Login" : "Sign Up"}
                </span>
            </p>
        </div>
    );
};

export default AuthForm;
