// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import LocationModal from "./LocationModal"; // Already imported by you (Step 2)
// import {
//   Menu,
//   Search,
//   ChevronDown,
//   UserCircle2,
//   Mic,
//   LocateFixed,
//   X,
//   ChevronRight,
//   Sparkles,
// } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("Bangalore");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // 🏙️ Step 3: Location Modal State Management
//   const [showLocationModal, setShowLocationModal] = useState(false);

//   // 🎯 Scroll tracking engine
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-500 ease-in-out ${
//         isScrolled
//           ? "bg-[#0A1128] border-b border-white/10 shadow-xl h-16" // Sleek dark theme on scroll with search
//           : "bg-gradient-to-b from-black/50 to-transparent h-20" // 99acres style transparent glass overlay on top banner
//       }`}
//     >
//       <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300">
//         {/* ─── LEFT SECTION: BRANDING & CITY DROPBOARD ─── */}
//         <div className="flex items-center gap-4 lg:gap-8 shrink-0">
//           <Link
//             to="/"
//             className="text-2xl md:text-3xl font-light tracking-tight text-white transition-colors duration-300"
//           >
//             Estate<span className="font-semibold text-[#0073e1]">Pro</span>
//           </Link>

//           {/* Location Trigger Area */}
//           <div className="relative hidden lg:block">
//             {/* 🏙️ Step 4: Click event attached directly on selectedCity / All India element */}
//             <button
//               onClick={() => setShowLocationModal(true)}
//               className="flex items-center gap-1 text-white/80 hover:text-white font-bold text-xs tracking-wide uppercase transition-colors cursor-pointer"
//             >
//               {selectedCity}
//               <ChevronDown size={14} className="text-white/60" />
//             </button>
//           </div>
//         </div>

//         {/* ─── CENTER NAVIGATION LINKS (99acres Style - Only visible at top) ─── */}
//         {!isScrolled && (
//           <div className="hidden xl:flex items-center gap-6 text-white/90 font-medium text-xs tracking-wide transition-all duration-300">
//             <Link
//               to="/buy"
//               className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#0073e1] after:transition-all"
//             >
//               For Buyers
//             </Link>
//             <Link
//               to="/rent"
//               className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#0073e1] after:transition-all"
//             >
//               For Tenants
//             </Link>
//             <Link
//               to="/owners"
//               className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#0073e1] after:transition-all"
//             >
//               For Owners
//             </Link>
//             <Link
//               to="/dealers"
//               className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#0073e1] after:transition-all"
//             >
//               For Dealers
//             </Link>
//             <Link
//               to="/insights"
//               className="hover:text-white flex items-center gap-1 transition-colors py-1"
//             >
//               Insights
//               <span className="bg-rose-500 text-white font-extrabold text-[8px] px-1 rounded-xs uppercase scale-90 animate-pulse">
//                 NEW
//               </span>
//             </Link>
//           </div>
//         )}

//         {/* ─── CENTRAL SEARCH MATRIX (Only pops in when user scrolls down) ─── */}
//         <div
//           className={`hidden lg:flex flex-1 max-w-xl xl:max-w-2xl bg-white border border-slate-200 rounded-xl overflow-hidden h-10 text-slate-800 shadow-md transition-all duration-300 ease-in-out transform ${
//             isScrolled
//               ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
//               : "opacity-0 scale-95 pointer-events-none -translate-y-4 absolute"
//           }`}
//         >
//           <select className="px-3 bg-slate-50/50 text-slate-600 font-bold text-xs outline-none border-r border-slate-100 cursor-pointer appearance-none">
//             <option>Buy</option>
//             <option>Rent</option>
//             <option>Commercial</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Search Locality / Project / Landmark"
//             className="flex-1 px-3 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
//           />

//           <button className="w-10 flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
//             <LocateFixed size={15} />
//           </button>

//           <button className="w-10 flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
//             <Mic size={15} />
//           </button>

//           <button className="w-11 flex items-center justify-center bg-[#0073e1] hover:bg-blue-600 text-white transition-colors cursor-pointer shrink-0">
//             <Search size={15} />
//           </button>
//         </div>

//         {/* ─── RIGHT ACTION LINK UTILITIES ─── */}
//         <div className="hidden lg:flex items-center gap-4 shrink-0">
//           <Link
//             to="/post-property"
//             className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer border ${
//               isScrolled
//                 ? "bg-white/10 hover:bg-white/15 text-white border-white/10"
//                 : "bg-white text-slate-900 hover:bg-slate-50 border-transparent shadow-md"
//             }`}
//           >
//             Post Property
//             <span className="rounded-xs bg-emerald-500 px-1 py-0.5 text-[8px] text-white font-black tracking-wider">
//               FREE
//             </span>
//           </Link>

//           <Link
//             to="/login"
//             className="text-white/80 hover:text-white transition-colors cursor-pointer"
//             title="Account"
//           >
//             <UserCircle2 size={24} />
//           </Link>

//           <button
//             onClick={() => setIsOpen(true)}
//             className="text-white/80 hover:text-white transition-colors cursor-pointer p-1"
//             title="Menu"
//           >
//             <Menu size={24} />
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="lg:hidden text-white hover:text-white transition-colors cursor-pointer p-1"
//         >
//           <Menu size={26} />
//         </button>
//       </div>

//       {/* ─── DRAWER OVERLAY & PANEL MODULE ─── */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       <div
//         className={`fixed top-0 right-0 h-screen w-80 md:w-[350px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="h-20 px-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
//           <Link
//             to="/login"
//             onClick={() => setIsOpen(false)}
//             className="flex items-center gap-2.5 text-[#0A1128] hover:text-[#0073e1] transition-colors group"
//           >
//             <UserCircle2
//               size={22}
//               className="text-slate-400 group-hover:text-[#0073e1]"
//             />
//             <span className="text-xs font-bold uppercase tracking-wider">
//               Login / Profile Hub
//             </span>
//           </Link>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl p-1.5 transition-all cursor-pointer"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Scrollable Inside Items */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-8 text-left">
//           <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-100/50 rounded-2xl p-4 space-y-3 shadow-2xs">
//             <div className="flex items-center gap-2 text-[#0073e1]">
//               <Sparkles size={16} />
//               <h4 className="text-xs font-bold uppercase tracking-wider">
//                 Premium Placement
//               </h4>
//             </div>
//             <p className="text-xs text-slate-600 font-medium leading-relaxed">
//               Monetize, lease, or liquidate your corporate real estate assets
//               faster.
//             </p>
//             <Link
//               to="/post-property"
//               onClick={() => setIsOpen(false)}
//               className="block w-full text-center bg-[#0A1128] hover:bg-slate-900 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all"
//             >
//               Launch Free Listing Now
//             </Link>
//           </div>

//           <div className="space-y-1">
//             <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mb-3 pl-2">
//               Corporate Directory
//             </span>
//             {[
//               { label: "About Corporate Ecosystem", path: "/about" },
//               { label: "Active Asset Portfolio", path: "/properties" },
//               { label: "Global Concierge Support", path: "/contact" },
//             ].map((link, idx) => (
//               <Link
//                 key={idx}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className="group flex items-center justify-between text-slate-700 font-semibold py-2.5 px-2 rounded-xl hover:bg-slate-50 transition-all text-xs"
//               >
//                 <div className="flex items-center gap-3">
//                   <ChevronRight
//                     size={14}
//                     className="text-slate-300 group-hover:text-[#0073e1] group-hover:translate-x-0.5 transition-all"
//                   />
//                   <span className="group-hover:text-slate-900 transition-colors">
//                     {link.label}
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className="p-5 border-t border-slate-100 bg-slate-50/50 text-center text-[10px] font-bold text-slate-400 tracking-wider uppercase shrink-0">
//           Support Matrix: 1800 41 99099
//         </div>
//       </div>

//       {/* ─── 🏙️ Step 5: Modal Render Injection Module at the end ─── */}
//       {showLocationModal && (
//         <LocationModal onClose={() => setShowLocationModal(false)} />
//       )}
//     </header>
//   );
// }

// export default Navbar;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import LocationModal from "./LocationModal";
// import NavMegaMenu from "./NavMegaMenu"; // 🔥 Imported your Mega Menu Component
// import {
//   Menu,
//   Search,
//   ChevronDown,
//   UserCircle2,
//   Mic,
//   LocateFixed,
//   X,
//   ChevronRight,
//   Sparkles,
// } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("Bangalore");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // 🏙️ Location Modal State Management
//   const [showLocationModal, setShowLocationModal] = useState(false);

//   // 🔥 Mega Menu Hover State Tracking
//   const [hoveredMenu, setHoveredMenu] = useState(null);

//   // 🎯 Scroll tracking engine
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-500 ease-in-out ${
//         isScrolled
//           ? "bg-[#0A1128] border-b border-white/10 shadow-xl h-16" // Sleek dark theme on scroll with search
//           : "bg-gradient-to-b from-black/50 to-transparent h-20" // 99acres style transparent glass overlay on top banner
//       }`}
//     >
//       <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300">
//         {/* ─── LEFT SECTION: BRANDING & CITY DROPBOARD ─── */}
//         <div className="flex items-center gap-4 lg:gap-8 shrink-0">
//           <Link
//             to="/"
//             className="text-2xl md:text-3xl font-light tracking-tight text-white transition-colors duration-300"
//           >
//             Estate<span className="font-semibold text-[#0073e1]">Pro</span>
//           </Link>

//           {/* Location Trigger Area */}
//           <div className="relative hidden lg:block">
//             {/* 🏙️ Click event attached directly on selectedCity / All India element */}
//             <button
//               onClick={() => setShowLocationModal(true)}
//               className="flex items-center gap-1 text-white/80 hover:text-white font-bold text-xs tracking-wide uppercase transition-colors cursor-pointer"
//             >
//               {selectedCity}
//               <ChevronDown size={14} className="text-white/60" />
//             </button>
//           </div>
//         </div>

//         {/* ─── CENTER NAVIGATION LINKS (99acres Style - Only visible at top) ─── */}
//         {!isScrolled && (
//           <div
//             className="hidden xl:flex items-center gap-6 text-white/90 font-medium text-xs tracking-wide transition-all duration-300 relative"
//             onMouseLeave={() => setHoveredMenu(null)} // Mouse center layout se bahar jaate hi menu close
//           >
//             {/* 1. For Buyers */}
//             <div
//               className="relative py-4"
//               onMouseEnter={() => setHoveredMenu("buyers")}
//             >
//               <Link
//                 to="/buy"
//                 className={`hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
//                   hoveredMenu === "buyers"
//                     ? "text-white after:w-full"
//                     : "after:w-0"
//                 }`}
//               >
//                 For Buyers
//               </Link>
//               {hoveredMenu === "buyers" && (
//                 <NavMegaMenu activeMenu="buyers" currentCity={selectedCity} />
//               )}
//             </div>

//             {/* 2. For Tenants */}
//             <div
//               className="relative py-4"
//               onMouseEnter={() => setHoveredMenu("tenants")}
//             >
//               <Link
//                 to="/rent"
//                 className={`hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
//                   hoveredMenu === "tenants"
//                     ? "text-white after:w-full"
//                     : "after:w-0"
//                 }`}
//               >
//                 For Tenants
//               </Link>
//               {hoveredMenu === "tenants" && (
//                 <NavMegaMenu activeMenu="tenants" currentCity={selectedCity} />
//               )}
//             </div>

//             {/* 3. For Owners */}
//             <div
//               className="relative py-4"
//               onMouseEnter={() => setHoveredMenu("owners")}
//             >
//               <Link
//                 to="/owners"
//                 className={`hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
//                   hoveredMenu === "owners"
//                     ? "text-white after:w-full"
//                     : "after:w-0"
//                 }`}
//               >
//                 For Owners
//               </Link>
//               {hoveredMenu === "owners" && (
//                 <NavMegaMenu activeMenu="owners" currentCity={selectedCity} />
//               )}
//             </div>

//             {/* 4. For Dealers */}
//             <div
//               className="relative py-4"
//               onMouseEnter={() => setHoveredMenu("dealers")}
//             >
//               <Link
//                 to="/dealers"
//                 className={`hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
//                   hoveredMenu === "dealers"
//                     ? "text-white after:w-full"
//                     : "after:w-0"
//                 }`}
//               >
//                 For Dealers
//               </Link>
//               {hoveredMenu === "dealers" && (
//                 <NavMegaMenu activeMenu="dealers" currentCity={selectedCity} />
//               )}
//             </div>

//             {/* 5. Insights */}
//             <div
//               className="relative py-4"
//               onMouseEnter={() => setHoveredMenu("insights")}
//             >
//               <Link
//                 to="/insights"
//                 className="hover:text-white flex items-center gap-1 transition-colors py-1"
//               >
//                 Insights
//                 <span className="bg-rose-500 text-white font-extrabold text-[8px] px-1 rounded-xs uppercase scale-90 animate-pulse">
//                   NEW
//                 </span>
//               </Link>
//               {hoveredMenu === "insights" && (
//                 <NavMegaMenu activeMenu="insights" currentCity={selectedCity} />
//               )}
//             </div>
//           </div>
//         )}

//         {/* ─── CENTRAL SEARCH MATRIX (Only pops in when user scrolls down) ─── */}
//         <div
//           className={`hidden lg:flex flex-1 max-w-xl xl:max-w-2xl bg-white border border-slate-200 rounded-xl overflow-hidden h-10 text-slate-800 shadow-md transition-all duration-300 ease-in-out transform ${
//             isScrolled
//               ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
//               : "opacity-0 scale-95 pointer-events-none -translate-y-4 absolute"
//           }`}
//         >
//           <select className="px-3 bg-slate-50/50 text-slate-600 font-bold text-xs outline-none border-r border-slate-100 cursor-pointer appearance-none">
//             <option>Buy</option>
//             <option>Rent</option>
//             <option>Commercial</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Search Locality / Project / Landmark"
//             className="flex-1 px-3 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
//           />

//           <button className="w-10 flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
//             <LocateFixed size={15} />
//           </button>

//           <button className="w-10 flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
//             <Mic size={15} />
//           </button>

//           <button className="w-11 flex items-center justify-center bg-[#0073e1] hover:bg-blue-600 text-white transition-colors cursor-pointer shrink-0">
//             <Search size={15} />
//           </button>
//         </div>

//         {/* ─── RIGHT ACTION LINK UTILITIES ─── */}
//         <div className="hidden lg:flex items-center gap-4 shrink-0">
//           <Link
//             to="/post-property"
//             className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer border ${
//               isScrolled
//                 ? "bg-white/10 hover:bg-white/15 text-white border-white/10"
//                 : "bg-white text-slate-900 hover:bg-slate-50 border-transparent shadow-md"
//             }`}
//           >
//             Post Property
//             <span className="rounded-xs bg-emerald-500 px-1 py-0.5 text-[8px] text-white font-black tracking-wider">
//               FREE
//             </span>
//           </Link>

//           <Link
//             to="/login"
//             className="text-white/80 hover:text-white transition-colors cursor-pointer"
//             title="Account"
//           >
//             <UserCircle2 size={24} />
//           </Link>

//           <button
//             onClick={() => setIsOpen(true)}
//             className="text-white/80 hover:text-white transition-colors cursor-pointer p-1"
//             title="Menu"
//           >
//             <Menu size={24} />
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="lg:hidden text-white hover:text-white transition-colors cursor-pointer p-1"
//         >
//           <Menu size={26} />
//         </button>
//       </div>

//       {/* ─── DRAWER OVERLAY & PANEL MODULE ─── */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       <div
//         className={`fixed top-0 right-0 h-screen w-80 md:w-[350px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="h-20 px-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
//           <Link
//             to="/login"
//             onClick={() => setIsOpen(false)}
//             className="flex items-center gap-2.5 text-[#0A1128] hover:text-[#0073e1] transition-colors group"
//           >
//             <UserCircle2
//               size={22}
//               className="text-slate-400 group-hover:text-[#0073e1]"
//             />
//             <span className="text-xs font-bold uppercase tracking-wider">
//               Login / Profile Hub
//             </span>
//           </Link>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl p-1.5 transition-all cursor-pointer"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Scrollable Inside Items */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-8 text-left">
//           <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-100/50 rounded-2xl p-4 space-y-3 shadow-2xs">
//             <div className="flex items-center gap-2 text-[#0073e1]">
//               <Sparkles size={16} />
//               <h4 className="text-xs font-bold uppercase tracking-wider">
//                 Premium Placement
//               </h4>
//             </div>
//             <p className="text-xs text-slate-600 font-medium leading-relaxed">
//               Monetize, lease, or liquidate your corporate real estate assets
//               faster.
//             </p>
//             <Link
//               to="/post-property"
//               onClick={() => setIsOpen(false)}
//               className="block w-full text-center bg-[#0A1128] hover:bg-slate-900 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all"
//             >
//               Launch Free Listing Now
//             </Link>
//           </div>

//           <div className="space-y-1">
//             <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mb-3 pl-2">
//               Corporate Directory
//             </span>
//             {[
//               { label: "About Corporate Ecosystem", path: "/about" },
//               { label: "Active Asset Portfolio", path: "/properties" },
//               { label: "Global Concierge Support", path: "/contact" },
//             ].map((link, idx) => (
//               <Link
//                 key={idx}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className="group flex items-center justify-between text-slate-700 font-semibold py-2.5 px-2 rounded-xl hover:bg-slate-50 transition-all text-xs"
//               >
//                 <div className="flex items-center gap-3">
//                   <ChevronRight
//                     size={14}
//                     className="text-slate-300 group-hover:text-[#0073e1] group-hover:translate-x-0.5 transition-all"
//                   />
//                   <span className="group-hover:text-slate-900 transition-colors">
//                     {link.label}
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className="p-5 border-t border-slate-100 bg-slate-50/50 text-center text-[10px] font-bold text-slate-400 tracking-wider uppercase shrink-0">
//           Support Matrix: 1800 41 99099
//         </div>
//       </div>

//       {/* ─── 🏙️ Location Modal Render Injection Module ─── */}
//       {showLocationModal && (
//         <LocationModal onClose={() => setShowLocationModal(false)} />
//       )}
//     </header>
//   );
// }

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocationModal from "./LocationModal";
import NavMegaMenu from "./NavMegaMenu";
import {
  Menu,
  Search,
  ChevronDown,
  UserCircle2,
  Mic,
  LocateFixed,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [isScrolled, setIsScrolled] = useState(false);

  // 🏙️ Location Modal State Management
  const [showLocationModal, setShowLocationModal] = useState(false);

  // 🔥 Mega Menu Hover State Tracking
  const [hoveredMenu, setHoveredMenu] = useState(null);

  // 🎯 Scroll tracking engine
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#0A1128] border-b border-white/10 shadow-xl h-16"
          : "bg-gradient-to-b from-black/50 to-transparent h-20"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300">
        {/* ─── LEFT SECTION: BRANDING & CITY DROPBOARD ─── */}
        <div className="flex items-center gap-4 lg:gap-8 shrink-0">
          <Link
            to="/"
            onClick={() => setHoveredMenu(null)}
            className="text-2xl md:text-3xl font-light tracking-tight text-white transition-colors duration-300"
          >
            Estate<span className="font-semibold text-[#0073e1]">Pro</span>
          </Link>

          {/* Location Trigger Area */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowLocationModal(true)}
              className="flex items-center gap-1 text-white/80 hover:text-white font-bold text-xs tracking-wide uppercase transition-colors cursor-pointer"
            >
              {selectedCity}
              <ChevronDown size={14} className="text-white/60" />
            </button>
          </div>
        </div>

        {/* ─── CENTER NAVIGATION LINKS (99acres Style) ─── */}
        {!isScrolled && (
          <div
            className="hidden xl:flex items-center gap-6 text-white/90 font-medium text-xs tracking-wide transition-all duration-300 relative h-full"
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {/* 1. For Buyers */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu("buyers")}
            >
              <Link
                to="/buy"
                className={`hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
                  hoveredMenu === "buyers"
                    ? "text-white after:w-full"
                    : "after:w-0"
                }`}
              >
                For Buyers
              </Link>
              {hoveredMenu === "buyers" && (
                <NavMegaMenu
                  activeMenu="buyers"
                  currentCity={selectedCity}
                  onLinkClick={() => setHoveredMenu(null)}
                />
              )}
            </div>

            {/* 2. For Tenants */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu("tenants")}
            >
              <Link
                to="/rent"
                className={`hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
                  hoveredMenu === "tenants"
                    ? "text-white after:w-full"
                    : "after:w-0"
                }`}
              >
                For Tenants
              </Link>
              {hoveredMenu === "tenants" && (
                <NavMegaMenu
                  activeMenu="tenants"
                  currentCity={selectedCity}
                  onLinkClick={() => setHoveredMenu(null)}
                />
              )}
            </div>

            {/* 3. For Owners */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu("owners")}
            >
              <Link
                to="/owners"
                className={`hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
                  hoveredMenu === "owners"
                    ? "text-white after:w-full"
                    : "after:w-0"
                }`}
              >
                For Owners
              </Link>
              {hoveredMenu === "owners" && (
                <NavMegaMenu
                  activeMenu="owners"
                  currentCity={selectedCity}
                  onLinkClick={() => setHoveredMenu(null)}
                />
              )}
            </div>

            {/* 4. For Dealers */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu("dealers")}
            >
              <Link
                to="/dealers"
                className={`hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
                  hoveredMenu === "dealers"
                    ? "text-white after:w-full"
                    : "after:w-0"
                }`}
              >
                For Dealers
              </Link>
              {hoveredMenu === "dealers" && (
                <NavMegaMenu
                  activeMenu="dealers"
                  currentCity={selectedCity}
                  onLinkClick={() => setHoveredMenu(null)}
                />
              )}
            </div>

            {/* 5. Insights */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu("insights")}
            >
              <Link
                to="/insights"
                className={`hover:text-white flex items-center gap-1 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0073e1] after:transition-all ${
                  hoveredMenu === "insights"
                    ? "text-white after:w-full"
                    : "after:w-0"
                }`}
              >
                Insights
                <span className="bg-rose-500 text-white font-extrabold text-[8px] px-1 rounded-xs uppercase scale-90 animate-pulse shrink-0">
                  NEW
                </span>
              </Link>
              {hoveredMenu === "insights" && (
                <NavMegaMenu
                  activeMenu="insights"
                  currentCity={selectedCity}
                  onLinkClick={() => setHoveredMenu(null)}
                />
              )}
            </div>
          </div>
        )}

        {/* ─── CENTRAL SEARCH MATRIX (Only pops in when user scrolls down) ─── */}
        <div
          className={`hidden lg:flex flex-1 max-w-xl xl:max-w-2xl bg-white border border-slate-200 rounded-xl overflow-hidden h-10 text-slate-800 shadow-md transition-all duration-300 ease-in-out transform ${
            isScrolled
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-4 absolute"
          }`}
        >
          <select className="px-3 bg-slate-50/50 text-slate-600 font-bold text-xs outline-none border-r border-slate-100 cursor-pointer appearance-none">
            <option>Buy</option>
            <option>Rent</option>
            <option>Commercial</option>
          </select>

          <input
            type="text"
            placeholder="Search Locality / Project / Landmark"
            className="flex-1 px-3 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
          />

          <button className="w-10 flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
            <LocateFixed size={15} />
          </button>

          <button className="w-10 flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
            <Mic size={15} />
          </button>

          <button className="w-11 flex items-center justify-center bg-[#0073e1] hover:bg-blue-600 text-white transition-colors cursor-pointer shrink-0">
            <Search size={15} />
          </button>
        </div>

        {/* ─── RIGHT ACTION LINK UTILITIES ─── */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            to="/post-property"
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer border ${
              isScrolled
                ? "bg-white/10 hover:bg-white/15 text-white border-white/10"
                : "bg-white text-slate-900 hover:bg-slate-50 border-transparent shadow-md"
            }`}
          >
            Post Property
            <span className="rounded-xs bg-emerald-500 px-1 py-0.5 text-[8px] text-white font-black tracking-wider">
              FREE
            </span>
          </Link>

          <Link
            to="/login"
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            title="Account"
          >
            <UserCircle2 size={24} />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="text-white/80 hover:text-white transition-colors cursor-pointer p-1"
            title="Menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white hover:text-white transition-colors cursor-pointer p-1"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* ─── DRAWER OVERLAY & PANEL MODULE ─── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-80 md:w-[350px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-20 px-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 text-[#0A1128] hover:text-[#0073e1] transition-colors group"
          >
            <UserCircle2
              size={22}
              className="text-slate-400 group-hover:text-[#0073e1]"
            />
            <span className="text-xs font-bold uppercase tracking-wider">
              Login / Profile Hub
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl p-1.5 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Inside Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 text-left">
          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-100/50 rounded-2xl p-4 space-y-3 shadow-2xs">
            <div className="flex items-center gap-2 text-[#0073e1]">
              <Sparkles size={16} />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Premium Placement
              </h4>
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Monetize, lease, or liquidate your corporate real estate assets
              faster.
            </p>
            <Link
              to="/post-property"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#0A1128] hover:bg-slate-900 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all"
            >
              Launch Free Listing Now
            </Link>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mb-3 pl-2">
              Corporate Directory
            </span>
            {[
              { label: "About Corporate Ecosystem", path: "/about" },
              { label: "Active Asset Portfolio", path: "/properties" },
              { label: "Global Concierge Support", path: "/contact" },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between text-slate-700 font-semibold py-2.5 px-2 rounded-xl hover:bg-slate-50 transition-all text-xs"
              >
                <div className="flex items-center gap-3">
                  <ChevronRight
                    size={14}
                    className="text-slate-300 group-hover:text-[#0073e1] group-hover:translate-x-0.5 transition-all"
                  />
                  <span className="group-hover:text-slate-900 transition-colors">
                    {link.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 text-center text-[10px] font-bold text-slate-400 tracking-wider uppercase shrink-0">
          Support Matrix: 1800 41 99099
        </div>
      </div>

      {/* ─── 🏙️ Location Modal Render Injection Module ─── */}
      {showLocationModal && (
        <LocationModal onClose={() => setShowLocationModal(false)} />
      )}
    </header>
  );
}

export default Navbar;
