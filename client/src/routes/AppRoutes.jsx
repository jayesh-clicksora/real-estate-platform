import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="properties" element={<Properties />} />

        <Route path="properties/:id" element={<PropertyDetails />} />

        <Route path="contact" element={<Contact />} />

        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />

        <Route path="profile" element={<Profile />} />

        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
