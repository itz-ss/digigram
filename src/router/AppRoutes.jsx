// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home";
import ServicePage from "../pages/ServicePage";



const AppRoutes = () => {
  return (
    <Routes>
      {/* All pages wrapped in MainLayout */}
      <Route element={<MainLayout />}>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/services/:slug" element={<ServicePage />} />



      </Route>
    </Routes>
  );
};

export default AppRoutes;
