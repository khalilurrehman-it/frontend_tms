import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Sidebar from "../GlobalComponents/Sidebar";
import Footer from "../GlobalComponents/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="md:flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="md:flex-1 md:min-h-screen">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
