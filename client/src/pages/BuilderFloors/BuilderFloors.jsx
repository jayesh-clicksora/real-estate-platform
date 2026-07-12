// import React, { useState } from "react";
// import {
//   MapPin,
//   ShieldCheck,
//   Heart,
//   ArrowUpRight,
//   SlidersHorizontal,
//   Layers,
//   LayoutGrid,
//   X,
// } from "lucide-react";

// // ─── 100% WORKING ROCK-SOLID BUILDER FLOOR IMAGES ───
// const FLOOR_PRESETS = [
//   "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/534154/pexels-photo-534154.jpeg?auto=compress&cs=tinysrgb&w=800",
// ];

// const LOCATIONS = [
//   "Indiranagar, Bangalore",
//   "HSR Layout, Bangalore",
//   "Koramangala, Bangalore",
//   "Jayanagar, Bangalore",
//   "Sadashivanagar, Bangalore",
//   "Defence Colony, Bangalore",
// ];

// const TITLES = [
//   "The Imperial Triplex Sovereign Floor",
//   "Zenith Vue Low-Rise Independent Deck",
//   "The Obsidian Premium Solitaire Floor",
//   "Heritage Signature Low-Rise Manor",
//   "Luminary Horizon Executive Suite",
//   "The Grand Atrium Independent Floor",
// ];

// const TAGS = [
//   "LIMITED COLLECTION",
//   "EXCLUSIVE DECK",
//   "READY TO POSSESS",
//   "PRICE DROP",
//   "TOP RATED",
// ];
// const FACINGS = [
//   "East Vastu Compliant",
//   "North-East Open View",
//   "West Facing Spacious",
//   "North Premium Elevation",
// ];

// // --- MATRIX ENGINE GENERATING 100 PREMIUM UNITS ---
// const GENERATED_FLOORS = Array.from({ length: 100 }, (_, index) => {
//   const id = index + 1;
//   const bhkNum = id % 2 === 0 ? 3 : 4; // 3 BHK aur 4 BHK options
//   const basePrice = (2.8 + id * 0.09).toFixed(2);
//   const squareFeet = 2100 + id * 25;

//   const imageIdx = (index * 4 + 2) % FLOOR_PRESETS.length;
//   const titleIdx = (index * 7 + 1) % TITLES.length;
//   const locIdx = (index * 3 + 4) % LOCATIONS.length;
//   const levelNum = (id % 4) + 1;

//   return {
//     id,
//     title: `${TITLES[titleIdx]} (Floor #${levelNum}0${levelNum})`,
//     location: LOCATIONS[locIdx],
//     price: `₹${basePrice} Cr`,
//     area: `${squareFeet.toLocaleString()} sqft`,
//     facing: FACINGS[id % FACINGS.length],
//     bhk: `${bhkNum} BHK Luxury`,
//     tag: TAGS[id % TAGS.length],
//     image: FLOOR_PRESETS[imageIdx],
//     floorLevel: `Level ${levelNum} of 4`,
//   };
// });

// function BuilderFloors() {
//   const [favorites, setFavorites] = useState([]);
//   const [imageErrors, setImageErrors] = useState({});

//   // --- STATE FOR DYNAMIC FILTERING ---
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedBhk, setSelectedBhk] = useState("ALL");
//   const [selectedLocation, setSelectedLocation] = useState("ALL");

//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
//     );
//   };

//   // --- FILTER LOGIC ENGINE ---
//   const filteredFloors = GENERATED_FLOORS.filter((floor) => {
//     const matchesBhk = selectedBhk === "ALL" || floor.bhk.includes(selectedBhk);
//     const matchesLocation =
//       selectedLocation === "ALL" || floor.location === selectedLocation;
//     return matchesBhk && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
//       {/* ─── HERO BANNER ─── */}
//       <div className="bg-[#090F1C] text-white pt-24 pb-20 px-6 relative overflow-hidden border-b border-slate-800">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

//         <div className="max-w-7xl mx-auto text-left space-y-3 relative z-10">
//           <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
//             🏢 Low-Rise Independent Luxury
//           </span>
//           <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
//             Builder Floors Portfolio
//           </h1>
//           <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-medium">
//             Discover ultra-premium independent low-rise floors combining
//             villa-style privacy with premium micro-market urban connectivity.
//           </p>
//         </div>
//       </div>

//       {/* ─── DYNAMIC STATUS BAR & FILTER BUTTON ─── */}
//       <div className="max-w-7xl mx-auto px-6 mt-8">
//         <div className="bg-white border border-slate-200/80 px-5 py-3.5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
//           <div className="text-left">
//             <p className="text-xs font-semibold text-slate-500">
//               Showing{" "}
//               <span className="text-slate-900 font-extrabold">
//                 {filteredFloors.length}
//               </span>{" "}
//               matching asset decks
//             </p>
//           </div>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-2xs cursor-pointer ${
//               showFilters
//                 ? "bg-blue-600 text-white"
//                 : "bg-slate-950 text-white hover:bg-slate-800"
//             }`}
//           >
//             <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Matrix Array
//           </button>
//         </div>

//         {/* ─── EXPANDABLE PREMIUM FILTER MATRIX PANEL ─── */}
//         {showFilters && (
//           <div className="mt-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-md text-left space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
//             <div className="flex justify-between items-center border-b border-slate-100 pb-2">
//               <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
//                 Refine Asset Parameters
//               </h4>
//               <button
//                 onClick={() => {
//                   setSelectedBhk("ALL");
//                   setSelectedLocation("ALL");
//                 }}
//                 className="text-[10px] text-blue-600 font-bold hover:underline"
//               >
//                 Reset All
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* BHK Selection */}
//               <div className="space-y-2">
//                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
//                   Configuration (BHK)
//                 </label>
//                 <div className="flex gap-2">
//                   {["ALL", "3 BHK", "4 BHK"].map((bhk) => (
//                     <button
//                       key={bhk}
//                       onClick={() => setSelectedBhk(bhk)}
//                       className={`px-4 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
//                         (selectedBhk === "ALL" && bhk === "ALL") ||
//                         (selectedBhk !== "ALL" && bhk.includes(selectedBhk))
//                           ? "bg-slate-950 border-slate-950 text-white"
//                           : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
//                       }`}
//                     >
//                       {bhk}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Location Dropdown Selection */}
//               <div className="space-y-2">
//                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
//                   Micro-Market Location
//                 </label>
//                 <select
//                   value={selectedLocation}
//                   onChange={(e) => setSelectedLocation(e.target.value)}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
//                 >
//                   <option value="ALL">All Prime Locations</option>
//                   {LOCATIONS.map((loc, idx) => (
//                     <option key={idx} value={loc}>
//                       {loc}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ─── DYNAMIC CORE GRID CONTAINER ─── */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {filteredFloors.length === 0 ? (
//           <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-2">
//             <span className="text-3xl">📭</span>
//             <h3 className="text-sm font-black text-slate-900">
//               No Asset Matches Found
//             </h3>
//             <p className="text-xs text-slate-500">
//               Try adjusting your Filter Matrix parameters to view alternate
//               configurations.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {filteredFloors.map((floor) => {
//               const isFav = favorites.includes(floor.id);
//               const hasError = imageErrors[floor.id];

//               return (
//                 <div
//                   key={floor.id}
//                   className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left"
//                 >
//                   {/* Image Frame */}
//                   <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
//                     {!hasError ? (
//                       <img
//                         src={floor.image}
//                         alt={floor.title}
//                         className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
//                         loading="lazy"
//                         onError={() =>
//                           setImageErrors((prev) => ({
//                             ...prev,
//                             [floor.id]: true,
//                           }))
//                         }
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-4 text-center">
//                         <LayoutGrid className="w-8 h-8 text-slate-600 animate-pulse" />
//                         <p className="text-[10px] font-bold text-slate-500 mt-2 tracking-wider uppercase">
//                           Premium Independent Floor
//                         </p>
//                       </div>
//                     )}

//                     {/* Floating Badges */}
//                     <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
//                       <span className="text-[9px] font-black text-white bg-slate-950/95 px-2.5 py-1 rounded-md tracking-wider border border-white/10 shadow-sm">
//                         {floor.tag}
//                       </span>
//                       <button
//                         onClick={() => toggleFavorite(floor.id)}
//                         className={`p-2 rounded-xl backdrop-blur-xs border shadow-xs transition-all cursor-pointer ${
//                           isFav
//                             ? "bg-rose-600 border-rose-600 text-white"
//                             : "bg-white/90 border-slate-200/40 text-slate-700 hover:bg-white"
//                         }`}
//                       >
//                         <Heart
//                           className={`w-3.5 h-3.5 ${isFav ? "fill-white" : ""}`}
//                         />
//                       </button>
//                     </div>

//                     <div className="absolute bottom-3 left-3 z-10">
//                       <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
//                         <ShieldCheck className="w-3 h-3" /> TITLE VERIFIED
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content Details */}
//                   <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between">
//                         <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">
//                           {floor.bhk}
//                         </span>
//                         <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
//                           <Layers className="w-3 h-3" /> {floor.floorLevel}
//                         </span>
//                       </div>
//                       <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
//                         {floor.title}
//                       </h3>
//                       <p className="text-xs font-semibold text-slate-500 flex items-center gap-0.5 truncate">
//                         <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />{" "}
//                         {floor.location}
//                       </p>
//                     </div>

//                     {/* Technical Parameters */}
//                     <div className="grid grid-cols-2 gap-2 text-[10px] font-extrabold text-slate-600 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
//                       <span className="flex items-center gap-1">
//                         📐 {floor.area} Space
//                       </span>
//                       <span className="flex items-center gap-1">
//                         🧭 {floor.facing.split(" ")[0]} Open
//                       </span>
//                     </div>

//                     {/* Pricing Matrix */}
//                     <div className="flex items-center justify-between pt-3 border-t border-slate-100">
//                       <div>
//                         <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">
//                           Ownership Bracket
//                         </span>
//                         <span className="text-base font-black text-slate-950 tracking-tight">
//                           {floor.price}
//                         </span>
//                       </div>

//                       <button className="inline-flex items-center gap-1 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-blue-600 transition-colors shadow-2xs cursor-pointer">
//                         Examine Layout <ArrowUpRight className="w-3.5 h-3.5" />
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

// export default BuilderFloors;
import { useState } from "react";
import {
  MapPin,
  ShieldCheck,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  Layers,
  LayoutGrid,
} from "lucide-react";

// ─── 100% WORKING ROCK-SOLID BUILDER FLOOR IMAGES ───
const FLOOR_PRESETS = [
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/534154/pexels-photo-534154.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const LOCATIONS = [
  "Indiranagar, Bangalore",
  "HSR Layout, Bangalore",
  "Koramangala, Bangalore",
  "Jayanagar, Bangalore",
  "Sadashivanagar, Bangalore",
  "Defence Colony, Bangalore",
];

const TITLES = [
  "The Imperial Triplex Sovereign Floor",
  "Zenith Vue Low-Rise Independent Deck",
  "The Obsidian Premium Solitaire Floor",
  "Heritage Signature Low-Rise Manor",
  "Luminary Horizon Executive Suite",
  "The Grand Atrium Independent Floor",
];

const TAGS = [
  "LIMITED COLLECTION",
  "EXCLUSIVE DECK",
  "READY TO POSSESS",
  "PRICE DROP",
  "TOP RATED",
];

const FACINGS = [
  "East Vastu Compliant",
  "North-East Open View",
  "West Facing Spacious",
  "North Premium Elevation",
];

// --- MATRIX ENGINE GENERATING 100 PREMIUM UNITS ---
const GENERATED_FLOORS = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const bhkNum = id % 2 === 0 ? 3 : 4;
  const basePrice = (2.8 + id * 0.09).toFixed(2);
  const squareFeet = 2100 + id * 25;

  const imageIdx = (index * 4 + 2) % FLOOR_PRESETS.length;
  const titleIdx = (index * 7 + 1) % TITLES.length;
  const locIdx = (index * 3 + 4) % LOCATIONS.length;
  const levelNum = (id % 4) + 1;

  return {
    id,
    title: `${TITLES[titleIdx]} (Floor #${levelNum}0${levelNum})`,
    location: LOCATIONS[locIdx],
    price: `₹${basePrice} Cr`,
    area: `${squareFeet.toLocaleString()} sqft`,
    facing: FACINGS[id % FACINGS.length],
    bhk: `${bhkNum} BHK Luxury`,
    tag: TAGS[id % TAGS.length],
    image: FLOOR_PRESETS[imageIdx],
    floorLevel: `Level ${levelNum} of 4`,
  };
});

function BuilderFloors() {
  const [favorites, setFavorites] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  // --- STATE FOR DYNAMIC FILTERING ---
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBhk, setSelectedBhk] = useState("ALL");
  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  // --- FILTER LOGIC ENGINE ---
  const filteredFloors = GENERATED_FLOORS.filter((floor) => {
    const matchesBhk = selectedBhk === "ALL" || floor.bhk.includes(selectedBhk);
    const matchesLocation =
      selectedLocation === "ALL" || floor.location === selectedLocation;
    return matchesBhk && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* ─── HERO BANNER ─── */}
      <div className="bg-slate-950 pt-32 pb-20 px-6 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left space-y-3 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            🏢 Low-Rise Independent Luxury
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Builder Floors Portfolio
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-medium">
            Discover ultra-premium independent low-rise floors combining
            villa-style privacy with premium micro-market urban connectivity.
          </p>
        </div>
      </div>

      {/* ─── DYNAMIC STATUS BAR & FILTER BUTTON ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-white border border-slate-200/80 px-5 py-3.5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <p className="text-xs font-semibold text-slate-500">
              Showing{" "}
              <span className="text-slate-900 font-extrabold">
                {filteredFloors.length}
              </span>{" "}
              matching asset decks
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-2xs cursor-pointer ${
              showFilters
                ? "bg-blue-600 text-white"
                : "bg-slate-950 text-white hover:bg-slate-800"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Matrix Array
          </button>
        </div>

        {/* ─── EXPANDABLE PREMIUM FILTER MATRIX PANEL ─── */}
        {showFilters && (
          <div className="mt-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-md text-left space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Refine Asset Parameters
              </h4>
              <button
                onClick={() => {
                  setSelectedBhk("ALL");
                  setSelectedLocation("ALL");
                }}
                className="text-[10px] text-blue-600 font-bold hover:underline"
              >
                Reset All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* BHK Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  Configuration (BHK)
                </label>
                <div className="flex gap-2">
                  {["ALL", "3 BHK", "4 BHK"].map((bhk) => (
                    <button
                      key={bhk}
                      onClick={() => setSelectedBhk(bhk)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        (selectedBhk === "ALL" && bhk === "ALL") ||
                        (selectedBhk !== "ALL" && bhk.includes(selectedBhk))
                          ? "bg-slate-950 border-slate-950 text-white"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Dropdown Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  Micro-Market Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="ALL">All Prime Locations</option>
                  {LOCATIONS.map((loc, idx) => (
                    <option key={idx} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── DYNAMIC CORE GRID CONTAINER ─── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredFloors.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-2">
            <span className="text-3xl">📭</span>
            <h3 className="text-sm font-black text-slate-900">
              No Asset Matches Found
            </h3>
            <p className="text-xs text-slate-500">
              Try adjusting your Filter Matrix parameters to view alternate
              configurations.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredFloors.map((floor) => {
              const isFav = favorites.includes(floor.id);
              const hasError = imageErrors[floor.id];
              return (
                <div
                  key={floor.id}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-4/3 w-full bg-slate-900 overflow-hidden">
                    {!hasError ? (
                      <img
                        src={floor.image}
                        alt={floor.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [floor.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-4 text-center">
                        <LayoutGrid className="w-8 h-8 text-slate-600 animate-pulse" />
                        <p className="text-[10px] font-bold text-slate-500 mt-2 tracking-wider uppercase">
                          Premium Independent Floor
                        </p>
                      </div>
                    )}

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                      <span className="text-[9px] font-black text-white bg-slate-950/95 px-2.5 py-1 rounded-md tracking-wider border border-white/10 shadow-sm">
                        {floor.tag}
                      </span>
                      <button
                        onClick={() => toggleFavorite(floor.id)}
                        className={`p-2 rounded-xl backdrop-blur-xs border shadow-xs transition-all cursor-pointer ${
                          isFav
                            ? "bg-rose-600 border-rose-600 text-white"
                            : "bg-white/90 border-slate-200/40 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${isFav ? "fill-white" : ""}`}
                        />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> TITLE VERIFIED
                      </span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">
                          {floor.bhk}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Layers className="w-3 h-3" /> {floor.floorLevel}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {floor.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 flex items-center gap-0.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />{" "}
                        {floor.location}
                      </p>
                    </div>

                    {/* Technical Parameters */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-extrabold text-slate-600 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                      <span className="flex items-center gap-1">
                        {" "}
                        📐 {floor.area} Space{" "}
                      </span>
                      <span className="flex items-center gap-1">
                        {" "}
                        🧭 {floor.facing.split(" ")[0]} Open{" "}
                      </span>
                    </div>

                    {/* Pricing Matrix */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div>
                        <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">
                          Ownership Bracket
                        </span>
                        <span className="text-base font-black text-slate-950 tracking-tight">
                          {floor.price}
                        </span>
                      </div>
                      <button className="inline-flex items-center gap-1 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-blue-600 transition-colors shadow-2xs cursor-pointer">
                        Examine Layout <ArrowUpRight className="w-3.5 h-3.5" />
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

export default BuilderFloors;
