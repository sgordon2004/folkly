import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import LandingPage from "./components/pages/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LandingPage />} />
    </Routes>
  );
}