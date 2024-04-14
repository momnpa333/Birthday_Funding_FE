import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "../src/pages/LoginPage";
import LandingPage from "../src/pages/LandingPage";
import LoginSuccessPage from "./pages/LoginSuccessPage";
import RedirectionPage from "./pages/RedirectionPage";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/loginSuccess" element={<LoginSuccessPage />} />
            <Route path="/redirection" element={<RedirectionPage />} />
        </Routes>
    );
}

export default App;
