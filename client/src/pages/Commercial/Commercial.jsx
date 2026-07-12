// import {
//   Building2,
//   MapPin,
//   Heart,
//   ArrowUpRight,
//   SlidersHorizontal,
//   Briefcase,
//   Layers,
//   Users,
//   ShieldCheck,
//   Zap,
// } from "lucide-react";

// // ─── 100% AUTHENTIC NON-REPETITIVE MODERN TECH-PARK & CORPORATE OFFICE IMAGES ───
// const RAW_OFFICE_STOCK = [
//   "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", // Iconic Glass Skyscraper
//   "https://images.unsplash.com/photo-1497366216548-37526070297c", // Luxury Corporate Boardroom
//   "https://images.unsplash.com/photo-1497215728101-856f4ea42174", // Modern Minimalist Open Desk
//   "https://images.unsplash.com/photo-1542838132-92c53300491e", // Tech Corporate Headquarters
//   "https://images.unsplash.com/photo-1556761175-5973dc0f32e7", // Silicon Valley Style Office
//   "https://images.unsplash.com/photo-1570126034659-12270444bc3d", // Premium Glass Facade Complex
//   "https://images.unsplash.com/photo-1512403754473-27855f33d4fc", // High-Rise Finance District Tower
//   "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122", // Mega Tech Campus Entry
//   "https://images.unsplash.com/photo-1606857521015-7f9fcf423740", // Executive Lounge & Cabins
//   "https://images.unsplash.com/photo-1524758631624-e2822e304c36", // Architectural Workspace Layout
//   "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7", // Premium Commercial Complex
//   "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", // Corporate Hub Workstations
// ];

// const OFFICE_LOCATIONS = [
//   "ORR Outer Ring Road Tech-Hub, Bangalore",
//   "Electronic City Phase 1 Smart Zone, Bangalore",
//   "Manyata Tech Park Enclave, Bangalore",
//   "EPIP Zone Industrial Area, Whitefield",
//   "CBD Residency Road Prime Grid, Bangalore",
//   "Bagmane Tech Park Corridor, Bangalore",
// ];

// const OFFICE_TITLES = [
//   "Nexus Cyber-Tower Matrix",
//   "Helix Premium Enterprise Block",
//   "Quantum Corporate IT Pavilion",
//   "Apex Executive High-Rise Suite",
//   "Stratum Co-Working Incubator Node",
//   "Vanguard Fortune-500 Mega Hub",
// ];

// const INFRASTRUCTURE_SPECS = [
//   "100% Power Back-up + Central HVAC",
//   "Grade-A LEED Certified Building",
//   "Double Glazed Glass Soundproofing",
//   "High-Speed Private Lift Access",
//   "Turnkey Warm-Shell Configuration",
// ];

// const DENSITY_RATIOS = [
//   "1:60 Sqft Extreme Efficiency",
//   "1:80 Sqft Standard Executive Layout",
//   "1:70 Sqft Linear Workstation Grid",
//   "Customizable Flexible Seating Plan",
// ];

// const PARKING_CAPACITIES = [
//   "25 Reserved Underground Bays",
//   "15 Covered Basements Spots",
//   "50 Mega Mechanical Stacks",
//   "10 Multi-Tier Smart Slots",
// ];

// // --- ADVANCED GENERATION ALGORITHM FOR 100 PREMIUM COMMERICAL OFFICES ---
// const GENERATED_OFFICES = Array.from({ length: 100 }, (_, index) => {
//   const id = index + 1;
//   const priceCrores = 6.2 + (id % 15) * 4.1;
//   const superBuiltUp = 4500 + (id % 9) * 2150;
//   const lockInPeriod = 3 + (id % 3) * 2;

//   // Bulletproof non-duplicating image dynamic engine
//   const baseImg = RAW_OFFICE_STOCK[index % RAW_OFFICE_STOCK.length];
//   const uniqueImage = `${baseImg}?auto=format&fit=crop&w=800&q=80&sig=corp-office-suite-${id}`;

//   const titleIdx = (index * 5 + 2) % OFFICE_TITLES.length;
//   const locIdx = (index * 3 + 4) % OFFICE_LOCATIONS.length;

//   return {
//     id,
//     title: `${OFFICE_TITLES[titleIdx]} (Level ${(id % 18) + 2})`,
//     location: OFFICE_LOCATIONS[locIdx],
//     price: `₹${priceCrores.toFixed(2)} Cr`,
//     area: `${superBuiltUp.toLocaleString()} Sq.Ft. SBA`,
//     infra: INFRASTRUCTURE_SPECS[id % INFRASTRUCTURE_SPECS.length],
//     density: DENSITY_RATIOS[id % DENSITY_RATIOS.length],
//     parking: PARKING_CAPACITIES[id % PARKING_CAPACITIES.length],
//     lockIn: `${lockInPeriod} Years Standard Lock-in`,
//     image: uniqueImage,
//     compliance:
//       id % 2 === 0 ? "BMRDA / BBMP Compliant" : "100% Commercial OC Available",
//   };
// });

// function Commercial() {
//   const [favorites, setFavorites] = useState([]);
//   const [imageErrors, setImageErrors] = useState({});
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState("ALL");
//   const [selectedLockIn, setSelectedLockIn] = useState("ALL");

//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
//     );
//   };

//   const filteredOffices = GENERATED_OFFICES.filter((office) => {
//     const matchesLocation =
//       selectedLocation === "ALL" || office.location === selectedLocation;
//     const matchesLockIn =
//       selectedLockIn === "ALL" || office.lockIn.startsWith(selectedLockIn);
//     return matchesLocation && matchesLockIn;
//   });

//   return (
//     <div className="min-h-screen bg-[#070B0E] font-sans antialiased text-[#E2E8F0]">
//       {/* ─── CORPORATE CYBER-BLUE HIGH-TECH HERO HEADER ─── */}
//       <div className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-cyan-500/10">
//         <div className="absolute top-10 left-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
//         <div className="absolute bottom-5 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left relative z-10">
//           <div className="space-y-4">
//             <span className="inline-flex items-center gap-1.5 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 border border-cyan-500/20 rounded-md">
//               <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Grade-A
//               Commercial Index
//             </span>
//             <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-none">
//               Office Spaces <br />
//               <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent italic font-normal tracking-wide font-serif lowercase">
//                 & institutional tech-parks
//               </span>
//             </h1>
//           </div>
//           <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-medium leading-relaxed border-l-2 border-cyan-400 pl-4 py-1">
//             Institutional corporate assets, pre-certified floorplates, and
//             premium boardrooms engineered for enterprise scale operations and
//             high-yield returns.
//           </p>
//         </div>
//       </div>

//       {/* ─── CORPORATE LEDGER SYSTEM / FILTERS ─── */}
//       <div className="max-w-7xl mx-auto px-6 mt-10 relative z-10">
//         <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-900 pb-5">
//           <span className="text-xs font-semibold text-slate-500 font-mono text-left">
//             [SYSTEM_STATUS]: RECOVERY_FOUND_{filteredOffices.length}
//             _COMMERCIAL_UNITS
//           </span>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold tracking-wider uppercase px-5 py-3 hover:from-cyan-700 hover:to-blue-700 transition-all cursor-pointer rounded-md shadow-lg shadow-cyan-900/20 self-start sm:self-auto"
//           >
//             <SlidersHorizontal className="w-3.5 h-3.5" /> Toggle Ledger
//             Parameters
//           </button>
//         </div>

//         {showFilters && (
//           <div className="mt-4 p-6 bg-[#0B1116] text-left grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-900 rounded-xl shadow-2xl">
//             <div className="space-y-3">
//               <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">
//                 Corporate Tenure Commitment (Lock-in)
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {["ALL", "3", "5", "7"].map((term) => (
//                   <button
//                     key={term}
//                     onClick={() => setSelectedLockIn(term)}
//                     className={`px-4 py-1.5 text-[11px] font-bold font-mono transition-all border cursor-pointer rounded-md ${
//                       selectedLockIn === term
//                         ? "bg-cyan-500 border-cyan-500 text-black font-black"
//                         : "bg-transparent border-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200"
//                     }`}
//                   >
//                     {term === "ALL" ? "All Tenures" : `${term} Years Lock-in`}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-3">
//               <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">
//                 Enterprise Node Micro-Markets
//               </label>
//               <select
//                 value={selectedLocation}
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//                 className="w-full bg-[#070B0E] border border-slate-900 px-3 py-2.5 text-xs font-bold font-mono text-slate-300 focus:outline-none focus:border-cyan-500 rounded-md cursor-pointer"
//               >
//                 <option value="ALL">All Prime Enterprise Zones</option>
//                 {OFFICE_LOCATIONS.map((loc, idx) => (
//                   <option key={idx} value={loc}>
//                     {loc}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ─── CORPORATE SUITE BLOCK GRID ─── */}
//       <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
//         {filteredOffices.length === 0 ? (
//           <div className="bg-[#0B1116] p-20 text-center border border-slate-900 rounded-xl">
//             <Building2 className="w-8 h-8 text-slate-700 mx-auto mb-2" />
//             <p className="text-sm font-mono text-slate-500">
//               No Grade-A office pipelines match the criteria index.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredOffices.map((office) => {
//               const isFav = favorites.includes(office.id);
//               const hasError = imageErrors[office.id];

//               return (
//                 <div
//                   key={office.id}
//                   className="bg-[#0B1116] border border-slate-900 rounded-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
//                 >
//                   {/* PANORAMIC VIEWPORT LAYER */}
//                   <div className="w-full h-52 bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-900">
//                     {!hasError ? (
//                       <img
//                         src={office.image}
//                         alt={office.title}
//                         className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
//                         loading="lazy"
//                         onError={() =>
//                           setImageErrors((prev) => ({
//                             ...prev,
//                             [office.id]: true,
//                           }))
//                         }
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-[#0B1116] flex items-center justify-center">
//                         <Building2 className="w-8 h-8 text-slate-800" />
//                       </div>
//                     )}

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0B1116] via-transparent to-black/40" />

//                     {/* Left Top Identifiers */}
//                     <div className="absolute top-4 left-4 flex flex-col gap-1.5">
//                       <span className="text-[8px] font-mono font-black tracking-widest bg-black/80 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20 uppercase">
//                         SUITE-B{5000 + office.id}
//                       </span>
//                       <span className="text-[8px] font-mono font-black tracking-widest bg-blue-950/80 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 uppercase w-fit flex items-center gap-0.5">
//                         <Zap className="w-2 h-2 text-cyan-400" />{" "}
//                         {office.lockIn.split(" ")[0]}YR LOCK
//                       </span>
//                     </div>

//                     {/* Favorite System */}
//                     <button
//                       onClick={() => toggleFavorite(office.id)}
//                       className={`absolute top-4 right-4 p-2 rounded-md backdrop-blur-md border shadow-md transition-all cursor-pointer ${
//                         isFav
//                           ? "bg-cyan-500 border-cyan-500 text-black"
//                           : "bg-black/50 border-slate-800 text-slate-300 hover:bg-white hover:text-black"
//                       }`}
//                     >
//                       <Heart
//                         className={`w-3 h-3 ${isFav ? "fill-current" : ""}`}
//                       />
//                     </button>

//                     {/* Compliance Bottom Ribbon */}
//                     <div className="absolute bottom-3 left-4 bg-[#070B0E]/90 px-2.5 py-0.5 rounded border border-slate-900">
//                       <span className="text-[8px] font-mono font-bold text-slate-400 flex items-center gap-1">
//                         <ShieldCheck className="w-3 h-3 text-cyan-400" />{" "}
//                         {office.compliance}
//                       </span>
//                     </div>
//                   </div>

//                   {/* SPECIFICATION INVENTORY DATA */}
//                   <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                     <div className="space-y-1.5 text-left">
//                       <div className="flex items-center justify-between gap-2">
//                         <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
//                           Grade-A Commercial
//                         </span>
//                         <span className="text-[10px] text-cyan-400 font-mono font-bold">
//                           {office.area.split(" ")[0]} SQFT
//                         </span>
//                       </div>
//                       <h3 className="text-base font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-1">
//                         {office.title}
//                       </h3>
//                       <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
//                         <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />{" "}
//                         <span className="truncate">{office.location}</span>
//                       </p>
//                     </div>

//                     {/* Operational Dashboard Core */}
//                     <div className="bg-[#070B0E] border border-slate-900 p-3 rounded-lg space-y-1.5 text-[11px] text-slate-400 text-left font-mono">
//                       <div className="flex items-center gap-1.5">
//                         <Layers className="w-3.5 h-3.5 text-slate-600 shrink-0" />
//                         <span className="truncate text-slate-300">
//                           {office.infra}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-1.5 border-t border-slate-900/60 pt-1.5">
//                         <Users className="w-3.5 h-3.5 text-slate-600 shrink-0" />
//                         <span className="truncate text-slate-300">
//                           {office.density}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Outlay Metric & Action Lock */}
//                     <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-900 text-left">
//                       <div>
//                         <span className="block text-[7px] uppercase font-bold text-slate-500 tracking-wider font-mono">
//                           Capital Valuation
//                         </span>
//                         <span className="text-lg font-black text-white tracking-tight">
//                           {office.price}
//                         </span>
//                       </div>

//                       <button className="inline-flex items-center gap-1 bg-[#12191E] border border-slate-800 text-slate-300 text-[9px] font-mono font-bold uppercase tracking-wider px-3.5 py-2.5 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all cursor-pointer rounded-md">
//                         Feasibility <ArrowUpRight className="w-3 h-3.5" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Commercial;

import { useState } from "react";
import {
  Building2,
  MapPin,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  Briefcase,
  Layers,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

// ─── 100% AUTHENTIC NON-REPETITIVE MODERN TECH-PARK & CORPORATE OFFICE IMAGES ───
const RAW_OFFICE_STOCK = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", // Iconic Glass Skyscraper
  "https://images.unsplash.com/photo-1497366216548-37526070297c", // Luxury Corporate Boardroom
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174", // Modern Minimalist Open Desk
  "https://images.unsplash.com/photo-1542838132-92c53300491e", // Tech Corporate Headquarters
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7", // Silicon Valley Style Office
  "https://images.unsplash.com/photo-1570126034659-12270444bc3d", // Premium Glass Facade Complex
  "https://images.unsplash.com/photo-1512403754473-27855f33d4fc", // High-Rise Finance District Tower
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122", // Mega Tech Campus Entry
  "https://images.unsplash.com/photo-1606857521015-7f9fcf423740", // Executive Lounge & Cabins
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36", // Architectural Workspace Layout
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7", // Premium Commercial Complex
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", // Corporate Hub Workstations
];

const OFFICE_LOCATIONS = [
  "ORR Outer Ring Road Tech-Hub, Bangalore",
  "Electronic City Phase 1 Smart Zone, Bangalore",
  "Manyata Tech Park Enclave, Bangalore",
  "EPIP Zone Industrial Area, Whitefield",
  "CBD Residency Road Prime Grid, Bangalore",
  "Bagmane Tech Park Corridor, Bangalore",
];

const OFFICE_TITLES = [
  "Nexus Cyber-Tower Matrix",
  "Helix Premium Enterprise Block",
  "Quantum Corporate IT Pavilion",
  "Apex Executive High-Rise Suite",
  "Stratum Co-Working Incubator Node",
  "Vanguard Fortune-500 Mega Hub",
];

const INFRASTRUCTURE_SPECS = [
  "100% Power Back-up + Central HVAC",
  "Grade-A LEED Certified Building",
  "Double Glazed Glass Soundproofing",
  "High-Speed Private Lift Access",
  "Turnkey Warm-Shell Configuration",
];

const DENSITY_RATIOS = [
  "1:60 Sqft Extreme Efficiency",
  "1:80 Sqft Standard Executive Layout",
  "1:70 Sqft Linear Workstation Grid",
  "Customizable Flexible Seating Plan",
];

const PARKING_CAPACITIES = [
  "25 Reserved Underground Bays",
  "15 Covered Basements Spots",
  "50 Mega Mechanical Stacks",
  "10 Multi-Tier Smart Slots",
];

// --- ADVANCED GENERATION ALGORITHM FOR 100 PREMIUM COMMERICAL OFFICES ---
const GENERATED_OFFICES = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const priceCrores = 6.2 + (id % 15) * 4.1;
  const superBuiltUp = 4500 + (id % 9) * 2150;
  const lockInPeriod = 3 + (id % 3) * 2;

  // Bulletproof non-duplicating image dynamic engine
  const baseImg = RAW_OFFICE_STOCK[index % RAW_OFFICE_STOCK.length];
  const uniqueImage = `${baseImg}?auto=format&fit=crop&w=800&q=80&sig=corp-office-suite-${id}`;

  const titleIdx = (index * 5 + 2) % OFFICE_TITLES.length;
  const locIdx = (index * 3 + 4) % OFFICE_LOCATIONS.length;

  return {
    id,
    title: `${OFFICE_TITLES[titleIdx]} (Level ${(id % 18) + 2})`,
    location: OFFICE_LOCATIONS[locIdx],
    price: `₹${priceCrores.toFixed(2)} Cr`,
    area: `${superBuiltUp.toLocaleString()} Sq.Ft. SBA`,
    infra: INFRASTRUCTURE_SPECS[id % INFRASTRUCTURE_SPECS.length],
    density: DENSITY_RATIOS[id % DENSITY_RATIOS.length],
    parking: PARKING_CAPACITIES[id % PARKING_CAPACITIES.length],
    lockIn: `${lockInPeriod} Years Standard Lock-in`,
    image: uniqueImage,
    compliance:
      id % 2 === 0 ? "BMRDA / BBMP Compliant" : "100% Commercial OC Available",
  };
});

function Commercial() {
  const [favorites, setFavorites] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [selectedLockIn, setSelectedLockIn] = useState("ALL");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  const filteredOffices = GENERATED_OFFICES.filter((office) => {
    const matchesLocation =
      selectedLocation === "ALL" || office.location === selectedLocation;
    const matchesLockIn =
      selectedLockIn === "ALL" || office.lockIn.startsWith(selectedLockIn);
    return matchesLocation && matchesLockIn;
  });

  return (
    <div className="min-h-screen bg-[#070B0E] font-sans antialiased text-[#E2E8F0]">
      {/* ─── CORPORATE CYBER-BLUE HIGH-TECH HERO HEADER ─── */}
      <div className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-cyan-500/10">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left relative z-10">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 border border-cyan-500/20 rounded-md">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Grade-A
              Commercial Index
            </span>
            <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-none">
              Office Spaces <br />
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent italic font-normal tracking-wide font-serif lowercase">
                & institutional tech-parks
              </span>
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-medium leading-relaxed border-l-2 border-cyan-400 pl-4 py-1">
            Institutional corporate assets, pre-certified floorplates, and
            premium boardrooms engineered for enterprise scale operations and
            high-yield returns.
          </p>
        </div>
      </div>

      {/* ─── CORPORATE LEDGER SYSTEM / FILTERS ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-10 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-900 pb-5">
          <span className="text-xs font-semibold text-slate-500 font-mono text-left">
            [SYSTEM_STATUS]: RECOVERY_FOUND_{filteredOffices.length}
            _COMMERCIAL_UNITS
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold tracking-wider uppercase px-5 py-3 hover:from-cyan-700 hover:to-blue-700 transition-all cursor-pointer rounded-md shadow-lg shadow-cyan-900/20 self-start sm:self-auto"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Toggle Ledger
            Parameters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-6 bg-[#0B1116] text-left grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-900 rounded-xl shadow-2xl">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">
                Corporate Tenure Commitment (Lock-in)
              </label>
              <div className="flex flex-wrap gap-2">
                {["ALL", "3", "5", "7"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSelectedLockIn(term)}
                    className={`px-4 py-1.5 text-[11px] font-bold font-mono transition-all border cursor-pointer rounded-md ${
                      selectedLockIn === term
                        ? "bg-cyan-500 border-cyan-500 text-black font-black"
                        : "bg-transparent border-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    {term === "ALL" ? "All Tenures" : `${term} Years Lock-in`}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">
                Enterprise Node Micro-Markets
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#070B0E] border border-slate-900 px-3 py-2.5 text-xs font-bold font-mono text-slate-300 focus:outline-none focus:border-cyan-500 rounded-md cursor-pointer"
              >
                <option value="ALL">All Prime Enterprise Zones</option>
                {OFFICE_LOCATIONS.map((loc, idx) => (
                  <option key={idx} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ─── CORPORATE SUITE BLOCK GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {filteredOffices.length === 0 ? (
          <div className="bg-[#0B1116] p-20 text-center border border-slate-900 rounded-xl">
            <Building2 className="w-8 h-8 text-slate-700 mx-auto mb-2" />
            <p className="text-sm font-mono text-slate-500">
              No Grade-A office pipelines match the criteria index.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffices.map((office) => {
              const isFav = favorites.includes(office.id);
              const hasError = imageErrors[office.id];
              return (
                <div
                  key={office.id}
                  className="bg-[#0B1116] border border-slate-900 rounded-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
                >
                  {/* PANORAMIC VIEWPORT LAYER */}
                  <div className="w-full h-52 bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-900">
                    {!hasError ? (
                      <img
                        src={office.image}
                        alt={office.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [office.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0B1116] flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-slate-800" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B1116] via-transparent to-black/40" />

                    {/* Left Top Identifiers */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      <span className="text-[8px] font-mono font-black tracking-widest bg-black/80 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20 uppercase">
                        SUITE-B{5000 + office.id}
                      </span>
                      <span className="text-[8px] font-mono font-black tracking-widest bg-blue-950/80 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 uppercase w-fit flex items-center gap-0.5">
                        <Zap className="w-2 h-2 text-cyan-400" />{" "}
                        {office.lockIn.split(" ")[0]}YR LOCK
                      </span>
                    </div>

                    {/* Favorite System */}
                    <button
                      onClick={() => toggleFavorite(office.id)}
                      className={`absolute top-4 right-4 p-2 rounded-md backdrop-blur-md border shadow-md transition-all cursor-pointer ${
                        isFav
                          ? "bg-cyan-500 border-cyan-500 text-black"
                          : "bg-black/50 border-slate-800 text-slate-300 hover:bg-white hover:text-black"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 ${isFav ? "fill-current" : ""}`}
                      />
                    </button>

                    {/* Compliance Bottom Ribbon */}
                    <div className="absolute bottom-3 left-4 bg-[#070B0E]/90 px-2.5 py-0.5 rounded border border-slate-900">
                      <span className="text-[8px] font-mono font-bold text-slate-400 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-cyan-400" />{" "}
                        {office.compliance}
                      </span>
                    </div>
                  </div>

                  {/* SPECIFICATION INVENTORY DATA */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                          Grade-A Commercial
                        </span>
                        <span className="text-[10px] text-cyan-400 font-mono font-bold">
                          {office.area.split(" ")[0]} SQFT
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-1">
                        {office.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />{" "}
                        <span className="truncate">{office.location}</span>
                      </p>
                    </div>

                    {/* Operational Dashboard Core */}
                    <div className="bg-[#070B0E] border border-slate-900 p-3 rounded-lg space-y-1.5 text-[11px] text-slate-400 text-left font-mono">
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        <span className="truncate text-slate-300">
                          {office.infra}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 border-t border-slate-900/60 pt-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        <span className="truncate text-slate-300">
                          {office.density}
                        </span>
                      </div>
                    </div>

                    {/* Outlay Metric & Action Lock */}
                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-900 text-left">
                      <div>
                        <span className="block text-[7px] uppercase font-bold text-slate-500 tracking-wider font-mono">
                          Capital Valuation
                        </span>
                        <span className="text-lg font-black text-white tracking-tight">
                          {office.price}
                        </span>
                      </div>
                      <button className="inline-flex items-center gap-1 bg-[#12191E] border border-slate-800 text-slate-300 text-[9px] font-mono font-bold uppercase tracking-wider px-3.5 py-2.5 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all cursor-pointer rounded-md">
                        Feasibility <ArrowUpRight className="w-3 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Commercial;
