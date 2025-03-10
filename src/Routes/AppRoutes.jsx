import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Sidebar from "../GlobalComponents/Sidebar";
import Footer from "../GlobalComponents/Footer";
import NotFoundPage from "../GlobalComponents/NotFoundPage";
import ScrollToTop from "../GlobalComponents/ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="md:flex bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content Area without sticky footer */}
        <div className="md:flex md:flex-col md:w-full mt-10 md:mt-0 md:ml-64">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
