// import { Routes, Route } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";

// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Properties from "../pages/Properties/Properties";
// import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
// import Contact from "../pages/Contact/Contact";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
// import Profile from "../pages/Profile/Profile";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import NotFound from "../pages/NotFound/NotFound";
// import PostProperty from "../pages/PostProperty/PostProperty";

// // Importing your distinct real estate pages
// import Flats from "../pages/Flats/Flats";
// import ReadyToMove from "../pages/ReadyToMove/ReadyToMove";
// import NewProjects from "../pages/NewProjects/NewProjects";
// import Villas from "../pages/Villas/Villas";
// import Commercial from "../pages/Commercial/Commercial";
// import Shops from "../pages/Shops/Shops";
// import Industrial from "../pages/Industrial/Industrial";
// import Affordable from "../pages/Affordable/Affordable";
// import Under50Lakh from "../pages/Under50Lakh/Under50Lakh";
// import Luxury from "../pages/Luxury/Luxury";

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="properties" element={<Properties />} />
//         <Route path="properties/:id" element={<PropertyDetails />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="profile" element={<Profile />} />
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="post-property" element={<PostProperty />} />

//         {/* Integrated Sub-Page Routes */}
//         <Route path="flats" element={<Flats />} />
//         <Route path="ready-to-move" element={<ReadyToMove />} />
//         <Route path="new-projects" element={<NewProjects />} />
//         <Route path="villas" element={<Villas />} />
//         <Route path="commercial" element={<Commercial />} />
//         <Route path="shops" element={<Shops />} />
//         <Route path="industrial" element={<Industrial />} />
//         <Route path="affordable" element={<Affordable />} />
//         <Route path="under-50-lakh" element={<Under50Lakh />} />
//         <Route path="luxury" element={<Luxury />} />
//       </Route>

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default AppRoutes;

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
import PostProperty from "../pages/PostProperty/PostProperty";

// Real Estate Pages
import Flats from "../pages/Flats/Flats";
import ReadyToMove from "../pages/ReadyToMove/ReadyToMove";
import NewProjects from "../pages/NewProjects/NewProjects";
import Villas from "../pages/Villas/Villas";
import BuilderFloors from "../pages/BuilderFloors/BuilderFloors";
import Plots from "../pages/Plots/Plots";
import Commercial from "../pages/Commercial/Commercial";
import Shops from "../pages/Shops/Shops";
import Industrial from "../pages/Industrial/Industrial";
import Affordable from "../pages/Affordable/Affordable";
import Under50Lakh from "../pages/Under50Lakh/Under50Lakh";
import Luxury from "../pages/Luxury/Luxury";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Main Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/:id" element={<PropertyDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="post-property" element={<PostProperty />} />

        {/* Buyers Pages */}
        <Route path="flats" element={<Flats />} />
        <Route path="ready-to-move" element={<ReadyToMove />} />
        <Route path="new-projects" element={<NewProjects />} />
        <Route path="villas" element={<Villas />} />
        <Route path="builder-floors" element={<BuilderFloors />} />
        <Route path="plots" element={<Plots />} />

        {/* Commercial Pages */}
        <Route path="commercial" element={<Commercial />} />
        <Route path="shops" element={<Shops />} />
        <Route path="industrial" element={<Industrial />} />

        {/* Budget Pages */}
        <Route path="affordable" element={<Affordable />} />
        <Route path="under-50-lakh" element={<Under50Lakh />} />
        <Route path="luxury" element={<Luxury />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
