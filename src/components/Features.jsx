export const Feature = ({ icon, title, description }) => (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <div className="text-4xl text-blue-700 mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
    </div>
);
