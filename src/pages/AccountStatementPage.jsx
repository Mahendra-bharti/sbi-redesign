import { useState } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountStatementPage = () => {
    const navigate = useNavigate();
    const transactions = [
        { date: "2025-03-01", description: "Online Transfer", amount: "₹10,000", type: "Credit" },
        { date: "2025-03-05", description: "ATM Withdrawal", amount: "₹5,000", type: "Debit" },
        { date: "2025-03-10", description: "Salary Credit", amount: "₹50,000", type: "Credit" },
        { date: "2025-03-12", description: "Bill Payment", amount: "₹2,000", type: "Debit" }
    ];

    const [filter, setFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTransactions = transactions.filter((txn) =>
        (filter === "" || txn.type.toLowerCase() === filter.toLowerCase()) &&
        (txn.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
        txn.date.includes(searchTerm))
    );

    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-center relative mb-4">
    <FaArrowLeft 
        className="absolute left-4 sm:left-0 text-blue-700 text-2xl cursor-pointer" 
        onClick={() => navigate(-1)} 
    />
    <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 drop-shadow-md text-center">
        Account Statement
    </h1>
</div>

            <div className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg">
                {/* Filter and Search Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                    {/* Search Bar */}
                    <div className="relative w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="w-full border border-blue-400 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute top-3 right-3 text-blue-700" />
                    </div>

                    {/* Filter Dropdown */}
                    <select
                        className="border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                </div>

                {/* Responsive Table */}
                <div className="overflow-x-auto rounded-lg">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-blue-700 text-white">
                            <tr>
                                <th className="py-2 px-4">Date</th>
                                <th className="py-2 px-4">Description</th>
                                <th className="py-2 px-4">Amount</th>
                                <th className="py-2 px-4">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((txn, index) => (
                                <tr
                                    key={index}
                                    className={`border-t hover:bg-blue-100 ${
                                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                                >
                                    <td className="py-2 px-4">{txn.date}</td>
                                    <td className="py-2 px-4">{txn.description}</td>
                                    <td className={`py-2 px-4 ${txn.type === "Credit" ? "text-green-600" : "text-red-600"}`}>
                                        {txn.amount}
                                    </td>
                                    <td className="py-2 px-4">{txn.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* No Transactions Found */}
                {filteredTransactions.length === 0 && (
                    <p className="text-center text-red-500 mt-4">
                        🚫 No transactions found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default AccountStatementPage;