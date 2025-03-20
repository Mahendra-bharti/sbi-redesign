import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./pages/LoginPage";
import AccountSummaryPage from "./pages/AccountSummaryPage";
import AccountStatementPage from "./pages/AccountStatementPage";
import ProfilePage from "./pages/ProfilePage";
import ServicesPage from "./components/Services";
import Dashboard from "./pages/Dashboad";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/account_summary" element={<AccountSummaryPage />} />
                <Route path="/account_statement" element={<AccountStatementPage />} />
                <Route path="/services" element={<ServicesPage/>} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    );
}

export default App;
