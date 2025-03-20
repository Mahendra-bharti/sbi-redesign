import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-700 text-white py-4 px-8 shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">SBI Online</h1>
                <div className="space-x-4">
                    <Link to="/" className="bg-white text-blue-700 px-4 py-2 rounded-lg">Home</Link>
                    <Link to="/login" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Login</Link>
                    <Link to="/account-summary" className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">Account Summary</Link>
                    <Link to="/account-statement" className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">Account Statement</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
