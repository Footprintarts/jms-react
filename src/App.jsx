import "./index.css";
import { Routes, Route } from "react-router";

import Layout from "./Components/Layout";

import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DoctorDetailsPage from "./pages/DoctorDetailsPage";
import AppointmentPage from "./pages/AppointmentPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* Cards & Details */}
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
        {/* ---- */}

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Route>
    </Routes>
  );
};

export default App;
