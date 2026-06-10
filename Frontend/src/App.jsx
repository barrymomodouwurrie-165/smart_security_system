import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import ChangeCode from "./Pages/ChangeCode";
import { Routes, Route } from "react-router";
import { AuthProvider } from "./useContext/userContext";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen w-full h-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#63e_120%)]"></div>
        <AuthProvider>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/change-code" element={<ChangeCode />} />
      </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
