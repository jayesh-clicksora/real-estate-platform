// import React, { useState } from "react";
// import {
//   Home,
//   Percent,
//   MapPin,
//   Heart,
//   ArrowUpRight,
//   SlidersHorizontal,
//   CheckCircle,
//   HelpCircle,
//   PiggyBank,
// } from "lucide-react";

// // ─── 100% UNIQUE HIGH-RES BUDGET & APARTMENT IMAGES (WITH UNIQUE SIGNATURES) ───
// const AFFORDABLE_IMAGES = [
//   "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=800&q=80",
// ];

// const LOCATIONS = [
//   "Electronic City Phase 2, Bangalore",
//   "Dasanapura Smart Corridor, Bangalore",
//   "Kengeri Satellite Town, Bangalore",
//   "Chandapura Anekal Road, Bangalore",
//   "Devanahalli Budget Enclave, Bangalore",
//   "Hoskote Eco-Township, Bangalore",
// ];

// const TITLES = [
//   "The Eco-Green Smart Residency",
//   "Nutan Pradhan Enclave",
//   "Sovereign Value Heights",
//   "Aura Compact Smart Homes",
//   "The Meridian Budget Block",
//   "Zenith Family Vista Apartments",
// ];

// const SUBSIDIES = [
//   "PMAY Eligible",
//   "Zero Registry Charges",
//   "Stamp Duty Benefits",
//   "Lowest Interest Tier",
//   "100% Bank Financeable",
// ];
// const CONFIGURATIONS = [
//   "1 BHK Smart Unit",
//   "2 BHK Compact Family",
//   "2 BHK Value Plus",
//   "1 RK Executive Studio",
// ];

// // --- MATRIX ENGINE GENERATING 100 HOT BUDGET PROPERTIES ---
// const GENERATED_HOMES = Array.from({ length: 100 }, (_, index) => {
//   const id = index + 1;
//   const config = CONFIGURATIONS[id % CONFIGURATIONS.length];

//   // Budget pricing calculation from ₹28 Lakhs to ₹65 Lakhs max
//   const priceLakhs = 28 + (id % 15) * 2.5;

//   // EMI Estimate calculation based on standard 8.5% interest
//   const approxEmi = Math.round(priceLakhs * 750);

//   const baseImg = AFFORDABLE_IMAGES[index % AFFORDABLE_IMAGES.length];
//   const uniqueImage = `${baseImg}&sig=${id + 500}`; // Offset signature to avoid duplication with other pages

//   const titleIdx = (index * 2 + 3) % TITLES.length;
//   const locIdx = (index * 5 + 1) % LOCATIONS.length;

//   return {
//     id,
//     title: `${TITLES[titleIdx]} (Phase ${(id % 3) + 1})`,
//     location: LOCATIONS[locIdx],
//     price: `₹${priceLakhs.toFixed(2)} Lakhs`,
//     emi: `₹${approxEmi.toLocaleString()}/mo`,
//     config: config,
//     subsidy: SUBSIDIES[id % SUBSIDIES.length],
//     image: uniqueImage,
//     possession: id % 2 === 0 ? "Ready to Move" : "Mid 2027",
//   };
// });

// function Affordable() {
//   const [favorites, setFavorites] = useState([]);
//   const [imageErrors, setImageErrors] = useState({});
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedConfig, setSelectedConfig] = useState("ALL");
//   const [selectedLocation, setSelectedLocation] = useState("ALL");

//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
//     );
//   };

//   const filteredHomes = GENERATED_HOMES.filter((home) => {
//     const matchesConfig =
//       selectedConfig === "ALL" || home.config === selectedConfig;
//     const matchesLocation =
//       selectedLocation === "ALL" || home.location === selectedLocation;
//     return matchesConfig && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-[#F6F8F5] font-sans antialiased text-[#232B25]">
//       {/* ─── ECO-MINIMALIST HERO BANNER ─── */}
//       <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b-2 border-[#232B25]/10">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
//           <div className="space-y-3">
//             <span className="inline-flex items-center gap-1.5 bg-[#2E5A44]/5 text-[#2E5A44] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm border border-[#2E5A44]/10">
//               <PiggyBank className="w-3 h-3" /> Smart Capitally Optimised
//               Inventories
//             </span>
//             <h1 className="text-4xl sm:text-6xl font-black text-[#1A221C] tracking-tight uppercase leading-none">
//               Value & Affordable <br />
//               <span className="font-serif italic font-normal text-[#2E5A44] lowercase">
//                 smart-budget living
//               </span>
//             </h1>
//           </div>
//           <p className="text-xs text-stone-500 max-w-xs font-medium leading-relaxed">
//             Uncompromising build quality with maximum square footage efficiency.
//             Verified structural projects matching low-interest banking brackets.
//           </p>
//         </div>
//       </div>

//       {/* ─── VALUE HUB FILTER BAR ─── */}
//       <div className="max-w-7xl mx-auto px-6 mt-8">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#232B25]/10 pb-4">
//           <span className="text-xs font-serif italic text-stone-600 text-left">
//             Displaying {filteredHomes.length} high-efficiency housing structures
//           </span>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="inline-flex items-center gap-2 bg-[#2E5A44] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-xs hover:bg-[#224332] transition-all cursor-pointer shadow-xs"
//           >
//             <SlidersHorizontal className="w-3.5 h-3.5" /> Toggle Filters
//           </button>
//         </div>

//         {showFilters && (
//           <div className="mt-4 p-6 bg-[#EDF1EC] rounded-xs border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-in fade-in duration-150">
//             <div className="space-y-2">
//               <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
//                 Unit Configuration
//               </label>
//               <div className="flex flex-wrap gap-1.5">
//                 {["ALL", ...CONFIGURATIONS].map((cfg) => (
//                   <button
//                     key={cfg}
//                     onClick={() => setSelectedConfig(cfg)}
//                     className={`px-3 py-1.5 text-xs font-bold transition-all rounded-xs border cursor-pointer ${
//                       selectedConfig === cfg
//                         ? "bg-[#2E5A44] border-[#2E5A44] text-white"
//                         : "bg-white border-stone-300 text-stone-600 hover:bg-stone-50"
//                     }`}
//                   >
//                     {cfg === "ALL"
//                       ? "All Sizes"
//                       : cfg.split(" ")[0] + " " + cfg.split(" ")[1]}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
//                 Growth Peripheral Zone
//               </label>
//               <select
//                 value={selectedLocation}
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//                 className="w-full bg-white border border-stone-300 px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none rounded-xs cursor-pointer"
//               >
//                 <option value="ALL">All Available Corridors</option>
//                 {LOCATIONS.map((loc, idx) => (
//                   <option key={idx} value={loc}>
//                     {loc}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ─── BRUTALIST ASYMMETRICAL ECO GRID ─── */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {filteredHomes.length === 0 ? (
//           <div className="bg-[#EDF1EC] p-16 text-center rounded-xs border border-dashed border-stone-300">
//             <p className="text-sm font-serif italic text-stone-600">
//               No affordable layouts recorded matching current grid values.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredHomes.map((home) => {
//               const isFav = favorites.includes(home.id);
//               const hasError = imageErrors[home.id];

//               return (
//                 <div
//                   key={home.id}
//                   className="bg-white border-2 border-[#232B25]/10 rounded-xs hover:border-[#2E5A44] transition-all duration-300 flex flex-col group text-left relative overflow-hidden"
//                 >
//                   {/* Top Block: Image Sandbox */}
//                   <div className="w-full aspect-[4/3] bg-stone-100 relative overflow-hidden border-b border-[#232B25]/10">
//                     {!hasError ? (
//                       <img
//                         src={home.image}
//                         alt={home.title}
//                         className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
//                         loading="lazy"
//                         onError={() =>
//                           setImageErrors((prev) => ({
//                             ...prev,
//                             [home.id]: true,
//                           }))
//                         }
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-[#EDF1EC] flex items-center justify-center">
//                         <Home className="w-6 h-6 text-stone-400" />
//                       </div>
//                     )}

//                     {/* Floating Parameters */}
//                     <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
//                       <span className="text-[8px] font-black text-[#2E5A44] bg-[#EDF1EC] border border-[#2E5A44]/30 px-2 py-0.5 rounded-xs uppercase tracking-wider shadow-xs">
//                         🛡️ {home.subsidy}
//                       </span>
//                       <button
//                         onClick={() => toggleFavorite(home.id)}
//                         className={`p-2 rounded-full border shadow-xs transition-all cursor-pointer ${
//                           isFav
//                             ? "bg-[#2E5A44] border-[#2E5A44] text-white"
//                             : "bg-white/95 border-stone-200 text-stone-700 hover:bg-white"
//                         }`}
//                       >
//                         <Heart
//                           className={`w-3 h-3 ${isFav ? "fill-white" : ""}`}
//                         />
//                       </button>
//                     </div>

//                     {/* Configuration Tag overlay */}
//                     <div className="absolute bottom-3 left-3">
//                       <span className="text-[9px] font-black tracking-widest uppercase bg-[#232B25] text-white px-2 py-1 shadow-sm">
//                         {home.config}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Bottom Block: Content Framework */}
//                   <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
//                     <div className="space-y-1.5">
//                       <h3 className="text-base font-black text-[#232B25] tracking-tight group-hover:text-[#2E5A44] transition-colors line-clamp-1">
//                         {home.title}
//                       </h3>
//                       <p className="text-xs font-semibold text-stone-500 flex items-center gap-0.5 truncate">
//                         <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />{" "}
//                         {home.location}
//                       </p>
//                     </div>

//                     {/* Dynamic EMI Meter dashboard look */}
//                     <div className="bg-[#F8F9F6] border border-stone-200 p-2.5 rounded-xs flex items-center justify-between">
//                       <div className="space-y-0.5">
//                         <span className="block text-[8px] uppercase font-black tracking-widest text-stone-400 flex items-center gap-0.5">
//                           <Percent className="w-2.5 h-2.5 text-[#2E5A44]" />{" "}
//                           Est. Micro-EMI
//                         </span>
//                         <span className="text-xs font-black text-stone-800">
//                           {home.emi}
//                         </span>
//                       </div>
//                       <span className="text-[8px] font-bold text-stone-500 bg-stone-200/60 px-2 py-1 rounded-sm">
//                         {home.possession}
//                       </span>
//                     </div>

//                     {/* Quality Badges */}
//                     <div className="flex items-center gap-3 text-[9px] font-bold text-stone-500 border-b border-stone-100 pb-2">
//                       <span className="flex items-center gap-0.5 text-emerald-700">
//                         <CheckCircle className="w-3 h-3" /> Bank Loan Approved
//                       </span>
//                       <span>• High Carpet Area</span>
//                     </div>

//                     {/* Price Frame & Call to Action */}
//                     <div className="flex items-center justify-between pt-1">
//                       <div>
//                         <span className="block text-[8px] uppercase font-black tracking-widest text-stone-400">
//                           All-Inclusive Price
//                         </span>
//                         <span className="text-base font-black text-[#2E5A44] tracking-tight">
//                           {home.price}
//                         </span>
//                       </div>

//                       <button className="inline-flex items-center gap-1 bg-[#232B25] text-white text-[9px] font-bold uppercase tracking-widest px-3.5 py-2.5 hover:bg-[#2E5A44] transition-all cursor-pointer rounded-xs">
//                         Check Eligibility{" "}
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

// export default Affordable;
import { useState } from "react";
import {
  Home,
  Percent,
  MapPin,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  CheckCircle,
} from "lucide-react";

// ─── 100% UNIQUE HIGH-RES BUDGET & APARTMENT IMAGES (WITH UNIQUE SIGNATURES) ───
const AFFORDABLE_IMAGES = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=800&q=80",
];

const LOCATIONS = [
  "Electronic City Phase 2, Bangalore",
  "Dasanapura Smart Corridor, Bangalore",
  "Kengeri Satellite Town, Bangalore",
  "Chandapura Anekal Road, Bangalore",
  "Devanahalli Budget Enclave, Bangalore",
  "Hoskote Eco-Township, Bangalore",
];

const TITLES = [
  "The Eco-Green Smart Residency",
  "Nutan Pradhan Enclave",
  "Sovereign Value Heights",
  "Aura Compact Smart Homes",
  "The Meridian Budget Block",
  "Zenith Family Vista Apartments",
];

const SUBSIDIES = [
  "PMAY Eligible",
  "Zero Registry Charges",
  "Stamp Duty Benefits",
  "Lowest Interest Tier",
  "100% Bank Financeable",
];

const CONFIGURATIONS = [
  "1 BHK Smart Unit",
  "2 BHK Compact Family",
  "2 BHK Value Plus",
  "1 RK Executive Studio",
];

// --- MATRIX ENGINE GENERATING 100 HOT BUDGET PROPERTIES ---
const GENERATED_HOMES = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const config = CONFIGURATIONS[id % CONFIGURATIONS.length];

  // Budget pricing calculation from ₹28 Lakhs to ₹65 Lakhs max
  const priceLakhs = 28 + (id % 15) * 2.5;

  // EMI Estimate calculation based on standard 8.5% interest
  const approxEmi = Math.round(priceLakhs * 750);

  const baseImg = AFFORDABLE_IMAGES[index % AFFORDABLE_IMAGES.length];
  const uniqueImage = `${baseImg}&sig=${id + 500}`;

  const titleIdx = (index * 2 + 3) % TITLES.length;
  const locIdx = (index * 5 + 1) % LOCATIONS.length;

  return {
    id,
    title: `${TITLES[titleIdx]} (Phase ${(id % 3) + 1})`,
    location: LOCATIONS[locIdx],
    price: `₹${priceLakhs.toFixed(2)} Lakhs`,
    emi: `₹${approxEmi.toLocaleString()}/mo`,
    config: config,
    subsidy: SUBSIDIES[id % SUBSIDIES.length],
    image: uniqueImage,
    possession: id % 2 === 0 ? "Ready to Move" : "Mid 2027",
  };
});

function Affordable() {
  const [favorites, setFavorites] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState("ALL");
  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  const filteredHomes = GENERATED_HOMES.filter((home) => {
    const matchesConfig =
      selectedConfig === "ALL" || home.config === selectedConfig;
    const matchesLocation =
      selectedLocation === "ALL" || home.location === selectedLocation;
    return matchesConfig && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-[#F4F6F3] font-sans antialiased text-[#232B25]">
      {/* ─── ECO-MINIMALIST HERO BANNER ─── */}
      <div className="relative pt-36 pb-16 px-6 max-w-7xl mx-auto border-b border-[#232B25]/10 text-left">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-[#2E5A44]/10 text-[#2E5A44] text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 border border-[#2E5A44]/20 rounded-xs">
            Smart Capitally Optimised Inventories
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#232B25] tracking-tight uppercase leading-none">
            Value & Affordable <br />
            <span className="bg-linear-to-r from-[#2E5A44] to-emerald-700 bg-clip-text text-transparent italic font-normal tracking-wide font-serif lowercase">
              smart-budget living
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-medium leading-relaxed pt-2">
            Uncompromising build quality with maximum square footage efficiency.
            Verified structural projects matching low-interest banking brackets.
          </p>
        </div>
      </div>

      {/* ─── VALUE HUB FILTER BAR ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#232B25]/10 pb-4">
          <span className="text-xs font-serif italic text-stone-600 text-left">
            Displaying {filteredHomes.length} high-efficiency housing structures
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 bg-[#2E5A44] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-xs hover:bg-[#224332] transition-all cursor-pointer shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Toggle Filters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-6 bg-[#EDF1EC] rounded-xs border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-in fade-in duration-150">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                Unit Configuration
              </label>
              <div className="flex flex-wrap gap-1.5">
                {["ALL", ...CONFIGURATIONS].map((cfg) => (
                  <button
                    key={cfg}
                    onClick={() => setSelectedConfig(cfg)}
                    className={`px-3 py-1.5 text-xs font-bold transition-all rounded-xs border cursor-pointer ${
                      selectedConfig === cfg
                        ? "bg-[#2E5A44] border-[#2E5A44] text-white"
                        : "bg-white border-stone-300 text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    {cfg === "ALL"
                      ? "All Sizes"
                      : cfg.split(" ")[0] + " " + cfg.split(" ")[1]}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                Growth Peripheral Zone
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-white border border-stone-300 px-3 py-2 text-xs font-bold text-stone-700 focus:outline-none rounded-xs cursor-pointer"
              >
                <option value="ALL">All Available Corridors</option>
                {LOCATIONS.map((loc, idx) => (
                  <option key={idx} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ─── BRUTALIST ASYMMETRICAL ECO GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredHomes.length === 0 ? (
          <div className="bg-[#EDF1EC] p-16 text-center rounded-xs border border-dashed border-stone-300">
            <p className="text-sm font-serif italic text-stone-600">
              No affordable layouts recorded matching current grid values.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHomes.map((home) => {
              const isFav = favorites.includes(home.id);
              const hasError = imageErrors[home.id];
              return (
                <div
                  key={home.id}
                  className="bg-white border-2 border-[#232B25]/10 rounded-xs hover:border-[#2E5A44] transition-all duration-300 flex flex-col group text-left relative overflow-hidden"
                >
                  {/* Top Block: Image Sandbox */}
                  <div className="w-full aspect-4/3 bg-stone-100 relative overflow-hidden border-b border-[#232B25]/10">
                    {!hasError ? (
                      <img
                        src={home.image}
                        alt={home.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [home.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-[#EDF1EC] flex items-center justify-center">
                        <Home className="w-6 h-6 text-stone-400" />
                      </div>
                    )}

                    {/* Floating Parameters */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                      <span className="text-[8px] font-black text-[#2E5A44] bg-[#EDF1EC] border border-[#2E5A44]/30 px-2 py-0.5 rounded-xs uppercase tracking-wider shadow-xs">
                        🛡️ {home.subsidy}
                      </span>
                      <button
                        onClick={() => toggleFavorite(home.id)}
                        className={`p-2 rounded-full border shadow-xs transition-all cursor-pointer ${
                          isFav
                            ? "bg-[#2E5A44] border-[#2E5A44] text-white"
                            : "bg-white/95 border-stone-200 text-stone-700 hover:bg-white"
                        }`}
                      >
                        <Heart
                          className={`w-3 h-3 ${isFav ? "fill-white" : ""}`}
                        />
                      </button>
                    </div>

                    {/* Configuration Tag overlay */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[9px] font-black tracking-widest uppercase bg-[#232B25] text-white px-2 py-1 shadow-sm">
                        {home.config}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Block: Content Framework */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="text-base font-black text-[#232B25] tracking-tight group-hover:text-[#2E5A44] transition-colors line-clamp-1">
                        {home.title}
                      </h3>
                      <p className="text-xs font-semibold text-stone-500 flex items-center gap-0.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />{" "}
                        {home.location}
                      </p>
                    </div>

                    {/* Dynamic EMI Meter dashboard look */}
                    <div className="bg-[#F8F9F6] border border-stone-200 p-2.5 rounded-xs flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="flex items-center gap-0.5 text-[8px] uppercase font-black tracking-widest text-stone-400">
                          <Percent className="w-2.5 h-2.5 text-[#2E5A44]" />{" "}
                          Est. Micro-EMI
                        </span>
                        <span className="text-xs font-black text-stone-800">
                          {home.emi}
                        </span>
                      </div>
                      <span className="text-[8px] font-bold text-stone-500 bg-stone-200/60 px-2 py-1 rounded-sm">
                        {home.possession}
                      </span>
                    </div>

                    {/* Quality Badges */}
                    <div className="flex items-center gap-3 text-[9px] font-bold text-stone-500 border-b border-stone-100 pb-2">
                      <span className="flex items-center gap-0.5 text-emerald-700">
                        <CheckCircle className="w-3 h-3" /> Bank Loan Approved
                      </span>
                      <span>• High Carpet Area</span>
                    </div>

                    {/* Price Frame & Call to Action */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="block text-[8px] uppercase font-black tracking-widest text-stone-400">
                          All-Inclusive Price
                        </span>
                        <span className="text-base font-black text-[#2E5A44] tracking-tight">
                          {home.price}
                        </span>
                      </div>
                      <button className="inline-flex items-center gap-1 bg-[#232B25] text-white text-[9px] font-bold uppercase tracking-widest px-3.5 py-2.5 hover:bg-[#2E5A44] transition-all cursor-pointer rounded-xs">
                        Check Eligibility{" "}
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

export default Affordable;
