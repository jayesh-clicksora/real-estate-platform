// import React, { useState } from "react";
// import {
//   Factory,
//   MapPin,
//   Heart,
//   ArrowUpRight,
//   SlidersHorizontal,
//   Truck,
//   Layers,
//   HardHat,
// } from "lucide-react";

// // ─── 100% AUTHENTIC NON-REPETITIVE HEAVY INDUSTRY SOURCE ASSETS ───
// const RAW_INDUSTRIAL_STOCK = [
//   "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", // Mega Logistics Hub
//   "https://images.unsplash.com/photo-1565610222536-ef125c59da2e", // Modern Factory Floor
//   "https://images.unsplash.com/photo-1541888946425-d81bb19240f5", // Construction & Pipeline Yard
//   "https://images.unsplash.com/photo-1504307651254-35680f356dfd", // Industrial Crane Setup
//   "https://images.unsplash.com/photo-1513828583688-c52646db42da", // Manufacturing Unit
//   "https://images.unsplash.com/photo-1587293852726-70cdb56c2866", // High-Tech Warehouse Docking
//   "https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d", // Automation Assembly
//   "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122", // Engineering Infrastructure Land
//   "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07", // Steel Refinery Grid
//   "https://images.unsplash.com/photo-1578575437130-527eed3abbec", // Heavy Freight Depot
//   "https://images.unsplash.com/photo-1516937941344-00b4e0337589", // Industrial Power Unit
//   "https://images.unsplash.com/photo-1527142879-95b61a0b8226", // Commercial Chemical Plant
// ];

// const INDUSTRIAL_LOCATIONS = [
//   "Peenya Industrial Area, Phase 4, Bangalore",
//   "Bommasandra Industrial Corridor, Bangalore",
//   "Bidadi Manufacturing Cluster, Bangalore",
//   "Dabaspete Heavy Tech Zone, Bangalore",
//   "Hosote Logistics & Warehousing Park, Bangalore",
//   "Whitefield Export Promotion Industrial Park, Bangalore",
// ];

// const INDUSTRIAL_TITLES = [
//   "Titan Logistics & Cold-Chain Hub",
//   "Vanguard Heavy Engineering Plot",
//   "Matrix Smart-Warehousing Mega Block",
//   "Apex Manufacturing & Assembly Yard",
//   "Integrity Multi-Modal Logistics Node",
//   "Sovereign Tech-Park Industrial Zone",
// ];

// const COMPLIANCES = [
//   "Red Zone Certified",
//   "Orange Category Allowed",
//   "Green Pollution Free Zone",
//   "Logistics Exempted Node",
//   "100% Export Oriented Unit",
// ];
// const POWER_LOADS = [
//   "500 KVA Dedicated Line",
//   "1 MVA Heavy Transformer",
//   "250 KVA Grid Connectivity",
//   "2 MVA High-Tension Substation",
// ];
// const ROAD_WIDTHS = [
//   "80 Feet Container Access",
//   "60 Feet Industrial Internal Road",
//   "120 Feet Highway Face Arterial",
//   "40 Feet Light-Vehicle Lane",
// ];

// // --- COMMERCIAL ADVANCED ENGINE GENERATING 100 UNIQUE INDUSTRIAL PLOTS ---
// const GENERATED_PLOTS = Array.from({ length: 100 }, (_, index) => {
//   const id = index + 1;
//   const priceCrores = 2.4 + (id % 18) * 1.5;
//   const totalAcres = 0.5 + (id % 10) * 0.75;

//   // Exact mathematically scattered signature logic to ensure zero duplication and seamless loads
//   const baseImg = RAW_INDUSTRIAL_STOCK[index % RAW_INDUSTRIAL_STOCK.length];
//   const uniqueImage = `${baseImg}?auto=format&fit=crop&w=800&q=80&sig=ind-blueprint-asset-${id}`;

//   const titleIdx = (index * 3 + 5) % INDUSTRIAL_TITLES.length;
//   const locIdx = (index * 6 + 2) % INDUSTRIAL_LOCATIONS.length;

//   return {
//     id,
//     title: `${INDUSTRIAL_TITLES[titleIdx]} (Sector ${(id % 5) + 1})`,
//     location: INDUSTRIAL_LOCATIONS[locIdx],
//     price: `₹${priceCrores.toFixed(2)} Cr`,
//     area: `${totalAcres.toFixed(2)} Acres Net Plot`,
//     power: POWER_LOADS[id % POWER_LOADS.length],
//     road: ROAD_WIDTHS[id % ROAD_WIDTHS.length],
//     compliance: COMPLIANCES[id % COMPLIANCES.length],
//     image: uniqueImage,
//     clearance:
//       id % 2 === 0
//         ? "KIADB Approved / Immediate Allotment"
//         : "Industrial Non-Agri Converted",
//   };
// });

// function Industrial() {
//   const [favorites, setFavorites] = useState([]);
//   const [imageErrors, setImageErrors] = useState({});
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState("ALL");
//   const [selectedCompliance, setSelectedCompliance] = useState("ALL");

//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
//     );
//   };

//   const filteredPlots = GENERATED_PLOTS.filter((plot) => {
//     const matchesLocation =
//       selectedLocation === "ALL" || plot.location === selectedLocation;
//     const matchesCompliance =
//       selectedCompliance === "ALL" || plot.compliance === selectedCompliance;
//     return matchesLocation && matchesCompliance;
//   });

//   return (
//     <div className="min-h-screen bg-[#14191C] font-mono antialiased text-[#D1D9E0]">
//       {/* ─── INDUSTRIAL GRAPHITE HERO HEADER ─── */}
//       <div className="pt-36 pb-16 px-6 max-w-7xl mx-auto border-b border-[#EAB308]/20">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
//           <div className="space-y-4">
//             <span className="inline-flex items-center gap-1.5 bg-[#EAB308]/10 text-[#EAB308] text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#EAB308]/30">
//               <HardHat className="w-3.5 h-3.5" /> High-Capacity Zone Index
//             </span>
//             <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none">
//               Industrial Plots <br />
//               <span className="font-sans italic font-normal text-[#EAB308] tracking-normal lowercase">
//                 & logistics infrastructures
//               </span>
//             </h1>
//           </div>
//           <p className="text-[11px] text-stone-400 max-w-xs font-medium leading-relaxed border-l border-stone-700 pl-4">
//             B2B heavy manufacturing sectors, distribution facilities, and open
//             land aggregates calibrated for heavy-freight configurations.
//           </p>
//         </div>
//       </div>

//       {/* ─── SPECIFICATION CONTROL LEDGER ─── */}
//       <div className="max-w-7xl mx-auto px-6 mt-8">
//         <div className="flex justify-between items-center border-b border-stone-800 pb-4">
//           <span className="text-xs italic text-stone-400 text-left">
//             Found {filteredPlots.length} Heavy-Industrial land blueprints
//           </span>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="inline-flex items-center gap-2 bg-[#EAB308] text-black text-[11px] font-black tracking-widest uppercase px-5 py-2.5 hover:bg-yellow-500 transition-all cursor-pointer rounded-xs"
//           >
//             <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Parameters
//           </button>
//         </div>

//         {showFilters && (
//           <div className="mt-4 p-6 bg-[#1A2126] text-left grid grid-cols-1 md:grid-cols-2 gap-6 border border-stone-800 rounded-xs transition-all">
//             <div className="space-y-2">
//               <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
//                 Environmental Zone Classification
//               </label>
//               <div className="flex flex-wrap gap-1.5">
//                 {["ALL", ...COMPLIANCES].map((cmp) => (
//                   <button
//                     key={cmp}
//                     onClick={() => setSelectedCompliance(cmp)}
//                     className={`px-3 py-1.5 text-xs font-bold transition-all border cursor-pointer rounded-xs ${
//                       selectedCompliance === cmp
//                         ? "bg-[#EAB308] border-[#EAB308] text-black"
//                         : "bg-transparent border-stone-700 text-stone-400 hover:border-stone-500"
//                     }`}
//                   >
//                     {cmp === "ALL"
//                       ? "All Hazards Allowed"
//                       : cmp.split(" ")[0] + " Zone"}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
//                 Strategic Freight Corridor
//               </label>
//               <select
//                 value={selectedLocation}
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//                 className="w-full bg-[#14191C] border border-stone-700 px-3 py-2 text-xs font-bold text-stone-300 focus:outline-none focus:border-[#EAB308] rounded-xs cursor-pointer"
//               >
//                 <option value="ALL">All Manufacturing Hubs</option>
//                 {INDUSTRIAL_LOCATIONS.map((loc, idx) => (
//                   <option key={idx} value={loc}>
//                     {loc}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ─── TRIPLE-DATA SPLIT BLUEPRINT INDUSTRIAL GRID ─── */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {filteredPlots.length === 0 ? (
//           <div className="bg-[#1A2126] p-16 text-center border-2 border-dashed border-stone-800 rounded-xs">
//             <p className="text-sm italic text-stone-500">
//               No factory sites detected within current pipeline coordinates.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {filteredPlots.map((plot) => {
//               const isFav = favorites.includes(plot.id);
//               const hasError = imageErrors[plot.id];

//               return (
//                 <div
//                   key={plot.id}
//                   className="bg-[#1A2126] border border-stone-800 rounded-xs hover:border-[#EAB308] transition-all duration-300 flex flex-col sm:flex-row items-stretch group text-left relative overflow-hidden"
//                 >
//                   {/* LEFT PANORAMIC VIEWPORT */}
//                   <div className="w-full sm:w-[200px] bg-stone-900 relative overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-stone-800 flex items-center justify-center">
//                     {!hasError ? (
//                       <img
//                         src={plot.image}
//                         alt={plot.title}
//                         className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 aspect-[4/3] sm:aspect-auto"
//                         loading="lazy"
//                         onError={() =>
//                           setImageErrors((prev) => ({
//                             ...prev,
//                             [plot.id]: true,
//                           }))
//                         }
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-stone-900 flex items-center justify-center min-h-[160px]">
//                         <Factory className="w-6 h-6 text-stone-600" />
//                       </div>
//                     )}

//                     {/* Industrial Code Overlay */}
//                     <div className="absolute top-3 left-3">
//                       <span className="text-[8px] font-black tracking-widest bg-[#EAB308] text-black px-1.5 py-0.5 rounded-xs uppercase">
//                         ID-P{plot.id + 400}
//                       </span>
//                     </div>

//                     <button
//                       onClick={() => toggleFavorite(plot.id)}
//                       className={`absolute top-3 right-3 p-1.5 rounded-full border shadow-xs transition-all cursor-pointer ${
//                         isFav
//                           ? "bg-[#EAB308] border-[#EAB308] text-black"
//                           : "bg-black/60 border-stone-700 text-stone-300 hover:bg-black"
//                       }`}
//                     >
//                       <Heart
//                         className={`w-3 h-3 ${isFav ? "fill-current" : ""}`}
//                       />
//                     </button>

//                     <div className="absolute bottom-3 left-3 bg-black/80 px-2 py-0.5 border border-stone-800">
//                       <span className="text-[8px] font-bold text-stone-400">
//                         ⚡ {plot.power.split(" ")[0]} Loaded
//                       </span>
//                     </div>
//                   </div>

//                   {/* RIGHT BLUEPRINT TECHNICAL SPECIFICATION SHEET */}
//                   <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between gap-2">
//                         <span className="text-[9px] font-black text-[#EAB308] bg-[#EAB308]/5 border border-[#EAB308]/20 px-2 py-0.5 rounded-xs uppercase tracking-wide">
//                           ⚠️ {plot.compliance}
//                         </span>
//                         <span className="text-[9px] text-stone-500 font-bold">
//                           {plot.area}
//                         </span>
//                       </div>

//                       <h3 className="text-base font-black text-white tracking-tight group-hover:text-[#EAB308] transition-colors line-clamp-1">
//                         {plot.title}
//                       </h3>

//                       <p className="text-xs font-semibold text-stone-400 flex items-center gap-1 truncate">
//                         <MapPin className="w-3.5 h-3.5 text-stone-600 shrink-0" />{" "}
//                         {plot.location}
//                       </p>
//                     </div>

//                     {/* Operational Blueprint Dashboard */}
//                     <div className="bg-[#14191C] border border-stone-800 p-2.5 space-y-1.5 text-[10px] text-stone-300">
//                       <div className="flex items-center gap-1.5">
//                         <Truck className="w-3.5 h-3.5 text-stone-500 shrink-0" />
//                         <span>{plot.road}</span>
//                       </div>
//                       <div className="flex items-center gap-1.5 border-t border-stone-800/60 pt-1.5">
//                         <Layers className="w-3.5 h-3.5 text-stone-500 shrink-0" />
//                         <span className="truncate text-stone-400">
//                           {plot.clearance}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Valuation & Procurement Lock */}
//                     <div className="flex items-center justify-between gap-3 pt-2 border-t border-stone-800">
//                       <div>
//                         <span className="block text-[7px] uppercase font-bold text-stone-500 tracking-wider">
//                           Estimated Outlay
//                         </span>
//                         <span className="text-base font-black text-white tracking-tight">
//                           {plot.price}
//                         </span>
//                       </div>

//                       <button className="inline-flex items-center gap-1 bg-[#222B30] border border-stone-700 text-stone-200 text-[9px] font-bold uppercase tracking-widest px-3.5 py-2.5 hover:bg-[#EAB308] hover:text-black hover:border-[#EAB308] transition-all cursor-pointer rounded-xs">
//                         Request Feasibility{" "}
//                         <ArrowUpRight className="w-3.5 h-3.5" />
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

// export default Industrial;

import { useState } from "react";
import {
  Factory,
  MapPin,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  Truck,
  Layers,
  HardHat,
} from "lucide-react";

// ─── 100% AUTHENTIC NON-REPETITIVE HEAVY INDUSTRY SOURCE ASSETS ───
const RAW_INDUSTRIAL_STOCK = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", // Mega Logistics Hub
  "https://images.unsplash.com/photo-1565610222536-ef125c59da2e", // Modern Factory Floor
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5", // Construction & Pipeline Yard
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd", // Industrial Crane Setup
  "https://images.unsplash.com/photo-1513828583688-c52646db42da", // Manufacturing Unit
  "https://images.unsplash.com/photo-1587293852726-70cdb56c2866", // High-Tech Warehouse Docking
  "https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d", // Automation Assembly
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122", // Engineering Infrastructure Land
  "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07", // Steel Refinery Grid
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec", // Heavy Freight Depot
  "https://images.unsplash.com/photo-1516937941344-00b4e0337589", // Industrial Power Unit
  "https://images.unsplash.com/photo-1527142879-95b61a0b8226", // Commercial Chemical Plant
];

const INDUSTRIAL_LOCATIONS = [
  "Peenya Industrial Area, Phase 4, Bangalore",
  "Bommasandra Industrial Corridor, Bangalore",
  "Bidadi Manufacturing Cluster, Bangalore",
  "Dabaspete Heavy Tech Zone, Bangalore",
  "Hosote Logistics & Warehousing Park, Bangalore",
  "Whitefield Export Promotion Industrial Park, Bangalore",
];

const INDUSTRIAL_TITLES = [
  "Titan Logistics & Cold-Chain Hub",
  "Vanguard Heavy Engineering Plot",
  "Matrix Smart-Warehousing Mega Block",
  "Apex Manufacturing & Assembly Yard",
  "Integrity Multi-Modal Logistics Node",
  "Sovereign Tech-Park Industrial Zone",
];

const COMPLIANCES = [
  "Red Zone Certified",
  "Orange Category Allowed",
  "Green Pollution Free Zone",
  "Logistics Exempted Node",
  "100% Export Oriented Unit",
];
const POWER_LOADS = [
  "500 KVA Dedicated Line",
  "1 MVA Heavy Transformer",
  "250 KVA Grid Connectivity",
  "2 MVA High-Tension Substation",
];
const ROAD_WIDTHS = [
  "80 Feet Container Access",
  "60 Feet Industrial Internal Road",
  "120 Feet Highway Face Arterial",
  "40 Feet Light-Vehicle Lane",
];

// --- COMMERCIAL ADVANCED ENGINE GENERATING 100 UNIQUE INDUSTRIAL PLOTS ---
const GENERATED_PLOTS = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const priceCrores = 2.4 + (id % 18) * 1.5;
  const totalAcres = 0.5 + (id % 10) * 0.75;

  // Exact mathematically scattered signature logic to ensure zero duplication and seamless loads
  const baseImg = RAW_INDUSTRIAL_STOCK[index % RAW_INDUSTRIAL_STOCK.length];
  const uniqueImage = `${baseImg}?auto=format&fit=crop&w=800&q=80&sig=ind-blueprint-asset-${id}`;

  const titleIdx = (index * 3 + 5) % INDUSTRIAL_TITLES.length;
  const locIdx = (index * 6 + 2) % INDUSTRIAL_LOCATIONS.length;

  return {
    id,
    title: `${INDUSTRIAL_TITLES[titleIdx]} (Sector ${(id % 5) + 1})`,
    location: INDUSTRIAL_LOCATIONS[locIdx],
    price: `₹${priceCrores.toFixed(2)} Cr`,
    area: `${totalAcres.toFixed(2)} Acres Net Plot`,
    power: POWER_LOADS[id % POWER_LOADS.length],
    road: ROAD_WIDTHS[id % ROAD_WIDTHS.length],
    compliance: COMPLIANCES[id % COMPLIANCES.length],
    image: uniqueImage,
    clearance:
      id % 2 === 0
        ? "KIADB Approved / Immediate Allotment"
        : "Industrial Non-Agri Converted",
  };
});

function Industrial() {
  const [favorites, setFavorites] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [selectedCompliance, setSelectedCompliance] = useState("ALL");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  const filteredPlots = GENERATED_PLOTS.filter((plot) => {
    const matchesLocation =
      selectedLocation === "ALL" || plot.location === selectedLocation;
    const matchesCompliance =
      selectedCompliance === "ALL" || plot.compliance === selectedCompliance;
    return matchesLocation && matchesCompliance;
  });

  return (
    <div className="min-h-screen bg-[#14191C] font-mono antialiased text-[#D1D9E0]">
      {/* ─── INDUSTRIAL GRAPHITE HERO HEADER ─── */}
      <div className="pt-36 pb-16 px-6 max-w-7xl mx-auto border-b border-[#EAB308]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#EAB308]/10 text-[#EAB308] text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#EAB308]/30">
              <HardHat className="w-3.5 h-3.5" /> High-Capacity Zone Index
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none">
              Industrial Plots <br />
              <span className="font-sans italic font-normal text-[#EAB308] tracking-normal lowercase">
                & logistics infrastructures
              </span>
            </h1>
          </div>
          <p className="text-[11px] text-stone-400 max-w-xs font-medium leading-relaxed border-l border-stone-700 pl-4">
            B2B heavy manufacturing sectors, distribution facilities, and open
            land aggregates calibrated for heavy-freight configurations.
          </p>
        </div>
      </div>

      {/* ─── SPECIFICATION CONTROL LEDGER ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex justify-between items-center border-b border-stone-800 pb-4">
          <span className="text-xs italic text-stone-400 text-left">
            Found {filteredPlots.length} Heavy-Industrial land blueprints
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 bg-[#EAB308] text-black text-[11px] font-black tracking-widest uppercase px-5 py-2.5 hover:bg-yellow-500 transition-all cursor-pointer rounded-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Parameters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-6 bg-[#1A2126] text-left grid grid-cols-1 md:grid-cols-2 gap-6 border border-stone-800 rounded-xs transition-all">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                Environmental Zone Classification
              </label>
              <div className="flex flex-wrap gap-1.5">
                {["ALL", ...COMPLIANCES].map((cmp) => (
                  <button
                    key={cmp}
                    onClick={() => setSelectedCompliance(cmp)}
                    className={`px-3 py-1.5 text-xs font-bold transition-all border cursor-pointer rounded-xs ${
                      selectedCompliance === cmp
                        ? "bg-[#EAB308] border-[#EAB308] text-black"
                        : "bg-transparent border-stone-700 text-stone-400 hover:border-stone-500"
                    }`}
                  >
                    {cmp === "ALL"
                      ? "All Hazards Allowed"
                      : cmp.split(" ")[0] + " Zone"}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                Strategic Freight Corridor
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#14191C] border border-stone-700 px-3 py-2 text-xs font-bold text-stone-300 focus:outline-none focus:border-[#EAB308] rounded-xs cursor-pointer"
              >
                <option value="ALL">All Manufacturing Hubs</option>
                {INDUSTRIAL_LOCATIONS.map((loc, idx) => (
                  <option key={idx} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ─── TRIPLE-DATA SPLIT BLUEPRINT INDUSTRIAL GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredPlots.length === 0 ? (
          <div className="bg-[#1A2126] p-16 text-center border-2 border-dashed border-stone-800 rounded-xs">
            <p className="text-sm italic text-stone-500">
              No factory sites detected within current pipeline coordinates.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPlots.map((plot) => {
              const isFav = favorites.includes(plot.id);
              const hasError = imageErrors[plot.id];

              return (
                <div
                  key={plot.id}
                  className="bg-[#1A2126] border border-stone-800 rounded-xs hover:border-[#EAB308] transition-all duration-300 flex flex-col sm:flex-row items-stretch group text-left relative overflow-hidden"
                >
                  {/* LEFT PANORAMIC VIEWPORT - Refactored for clean Tailwind v4 width specs */}
                  <div className="w-full sm:w-48 bg-stone-900 relative overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-stone-800 flex items-center justify-center">
                    {!hasError ? (
                      <img
                        src={plot.image}
                        alt={plot.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 aspect-4/3 sm:aspect-auto"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [plot.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-900 flex items-center justify-center min-h-40">
                        <Factory className="w-6 h-6 text-stone-600" />
                      </div>
                    )}

                    {/* Industrial Code Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[8px] font-black tracking-widest bg-[#EAB308] text-black px-1.5 py-0.5 rounded-xs uppercase">
                        ID-P{plot.id + 400}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleFavorite(plot.id)}
                      className={`absolute top-3 right-3 p-1.5 rounded-full border shadow-xs transition-all cursor-pointer ${
                        isFav
                          ? "bg-[#EAB308] border-[#EAB308] text-black"
                          : "bg-black/60 border-stone-700 text-stone-300 hover:bg-black"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 ${isFav ? "fill-current" : ""}`}
                      />
                    </button>

                    <div className="absolute bottom-3 left-3 bg-black/80 px-2 py-0.5 border border-stone-800">
                      <span className="text-[8px] font-bold text-stone-400">
                        ⚡ {plot.power.split(" ")[0]} Loaded
                      </span>
                    </div>
                  </div>

                  {/* RIGHT BLUEPRINT TECHNICAL SPECIFICATION SHEET */}
                  <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-black text-[#EAB308] bg-[#EAB308]/5 border border-[#EAB308]/20 px-2 py-0.5 rounded-xs uppercase tracking-wide">
                          ⚠️ {plot.compliance}
                        </span>
                        <span className="text-[9px] text-stone-500 font-bold">
                          {plot.area}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-white tracking-tight group-hover:text-[#EAB308] transition-colors line-clamp-1">
                        {plot.title}
                      </h3>

                      <p className="text-xs font-semibold text-stone-400 flex items-center gap-1 truncate">
                        <MapPin className="w-3.5 h-3.5 text-stone-600 shrink-0" />{" "}
                        {plot.location}
                      </p>
                    </div>

                    {/* Operational Blueprint Dashboard */}
                    <div className="bg-[#14191C] border border-stone-800 p-2.5 space-y-1.5 text-[10px] text-stone-300">
                      <div className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                        <span>{plot.road}</span>
                      </div>
                      <div className="flex items-center gap-1.5 border-t border-stone-800/60 pt-1.5">
                        <Layers className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                        <span className="truncate text-stone-400">
                          {plot.clearance}
                        </span>
                      </div>
                    </div>

                    {/* Valuation & Procurement Lock */}
                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-stone-800">
                      <div>
                        <span className="block text-[7px] uppercase font-bold text-stone-500 tracking-wider">
                          Estimated Outlay
                        </span>
                        <span className="text-base font-black text-white tracking-tight">
                          {plot.price}
                        </span>
                      </div>

                      <button className="inline-flex items-center gap-1 bg-[#222B30] border border-stone-700 text-stone-200 text-[9px] font-bold uppercase tracking-widest px-3.5 py-2.5 hover:bg-[#EAB308] hover:text-black hover:border-[#EAB308] transition-all cursor-pointer rounded-xs">
                        Request Feasibility{" "}
                        <ArrowUpRight className="w-3.5 h-3.5" />
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

export default Industrial;
