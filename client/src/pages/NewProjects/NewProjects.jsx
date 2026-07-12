// import React, { useState } from "react";
// import {
//   MapPin,
//   ShieldCheck,
//   Heart,
//   ArrowUpRight,
//   SlidersHorizontal,
//   Grid,
//   Map,
// } from "lucide-react";

// // ─── 100% UNIQUE HIGH-RES LAND & PLOT IMAGES (WITH UNIQUE SIGNATURES) ───
// const PLOT_IMAGES = [
//   "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1444653389962-8149286c578a?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
// ];

// const LOCATIONS = [
//   "Devenahalli Industrial Corridor, Bangalore",
//   "Sarjapur Gated Tech-Enclave, Bangalore",
//   "Mysore Road Satellite Township, Bangalore",
//   "Whitefield Extension Green Acres, Bangalore",
//   "Yelahanka Premium Sovereign Zone, Bangalore",
//   "Electronic City Phase 2 Hub, Bangalore",
// ];

// const TITLES = [
//   "The Sovereign Crest Gated Plot",
//   "Elysian Green Acres Industrial Zone",
//   "Zenith Vista Premium Corner Plot",
//   "Imperial Boulevard Township Land",
//   "The Meridian Gold Signature Plot",
//   "Alpha Core Commercial Blueprint Land",
// ];

// const TAGS = [
//   "GATED COMMUNITY",
//   "INDUSTRIAL READY",
//   "PREMIUM CORNER",
//   "PRICE JUST DROPPED",
//   "BMRDA APPROVED",
// ];
// const ZONINGS = [
//   "Residential Zone",
//   "Commercial Freehold",
//   "Industrial Corridor",
//   "Mixed-Use Agricultural",
// ];

// const GENERATED_PLOTS = Array.from({ length: 100 }, (_, index) => {
//   const id = index + 1;
//   const zoningType = ZONINGS[id % ZONINGS.length];
//   const basePrice = (1.2 + id * 0.07).toFixed(2);
//   const plotSize = 1200 + id * 60;

//   const baseImg = PLOT_IMAGES[index % PLOT_IMAGES.length];
//   // Dynamic signature query taaki browser har image ko different maane
//   const uniqueImage = `${baseImg}&sig=${id}`;

//   const titleIdx = (index * 3 + 2) % TITLES.length;
//   const locIdx = (index * 7 + 4) % LOCATIONS.length;

//   return {
//     id,
//     title: `${TITLES[titleIdx]} (Sector #${100 + id})`,
//     location: LOCATIONS[locIdx],
//     price: `₹${basePrice} Cr`,
//     area: `${plotSize.toLocaleString()} sqft`,
//     zoning: zoningType,
//     tag: TAGS[id % TAGS.length],
//     image: uniqueImage,
//     roadWidth: `${30 + (id % 3) * 10} Feet Road`,
//   };
// });

// function Plots() {
//   const [favorites, setFavorites] = useState([]);
//   const [imageErrors, setImageErrors] = useState({});
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedZoning, setSelectedZoning] = useState("ALL");
//   const [selectedLocation, setSelectedLocation] = useState("ALL");

//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
//     );
//   };

//   const filteredPlots = GENERATED_PLOTS.filter((plot) => {
//     const matchesZoning =
//       selectedZoning === "ALL" || plot.zoning === selectedZoning;
//     const matchesLocation =
//       selectedLocation === "ALL" || plot.location === selectedLocation;
//     return matchesZoning && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-[#FAF9F5] font-sans antialiased text-[#1A1A1A]">
//       {/* ─── HERO ─── */}
//       <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b border-stone-200">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
//           <div className="lg:col-span-8 space-y-4 text-left">
//             <div className="inline-flex items-center gap-2 bg-[#EFECE6] text-[#635B4D] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
//               ✨ Premium Ground Assets Matrix
//             </div>
//             <h1 className="text-4xl sm:text-7xl font-light tracking-tight text-[#111] uppercase leading-none">
//               Land &{" "}
//               <strong className="font-serif italic font-normal">Parcels</strong>
//             </h1>
//           </div>
//           <div className="lg:col-span-4 text-left lg:text-right">
//             <p className="text-xs text-stone-500 max-w-sm ml-auto font-medium leading-relaxed">
//               Curated industrial corridors, commercial nodes, and high-yield
//               agricultural investments for premium portfolio positioning.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ─── FILTER BAR ─── */}
//       <div className="max-w-7xl mx-auto px-6 mt-10">
//         <div className="flex justify-between items-center border-b border-stone-200 pb-4">
//           <span className="text-xs font-serif italic text-stone-600">
//             Cataloging {filteredPlots.length} exclusive land structures
//           </span>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="inline-flex items-center gap-3 bg-[#111] text-white text-[11px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-xs hover:bg-stone-800 transition-all cursor-pointer shadow-sm"
//           >
//             <SlidersHorizontal className="w-3.5 h-3.5" /> Adjust Parameters
//           </button>
//         </div>

//         {showFilters && (
//           <div className="mt-4 p-6 bg-[#F3F1EC] rounded-xs text-left grid grid-cols-1 md:grid-cols-2 gap-6 border border-stone-200 animate-in fade-in duration-200">
//             <div className="space-y-2">
//               <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
//                 Zone Classification
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {["ALL", ...ZONINGS].map((zone) => (
//                   <button
//                     key={zone}
//                     onClick={() => setSelectedZoning(zone)}
//                     className={`px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer rounded-xs border ${
//                       selectedZoning === zone
//                         ? "bg-[#111] border-[#111] text-white"
//                         : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
//                     }`}
//                   >
//                     {zone === "ALL" ? "All Zones" : zone.split(" ")[0]}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
//                 Macro-Market Sector
//               </label>
//               <select
//                 value={selectedLocation}
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//                 className="w-full bg-white border border-stone-200 px-3 py-2 text-xs font-semibold text-stone-700 focus:outline-none rounded-xs cursor-pointer"
//               >
//                 <option value="ALL">All Available Sectors</option>
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

//       {/* ─── HORIZONTAL WIDE CATALOG STRIPES ─── */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {filteredPlots.length === 0 ? (
//           <div className="bg-[#F3F1EC] p-16 text-center border border-dashed border-stone-300">
//             <p className="text-sm font-serif italic text-stone-600">
//               No matching coordinates located in this micro-market.
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {filteredPlots.map((plot) => {
//               const isFav = favorites.includes(plot.id);
//               const hasError = imageErrors[plot.id];

//               return (
//                 <div
//                   key={plot.id}
//                   className="bg-white border border-stone-200 p-4 md:p-6 rounded-xs hover:border-stone-900 transition-all duration-300 flex flex-col lg:flex-row gap-6 items-stretch relative group text-left"
//                 >
//                   <div className="relative w-full lg:w-[350px] aspect-[16/10] lg:aspect-auto bg-stone-100 overflow-hidden shrink-0 rounded-xs">
//                     {!hasError ? (
//                       <img
//                         src={plot.image}
//                         alt={plot.title}
//                         className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
//                         loading="lazy"
//                         onError={() =>
//                           setImageErrors((prev) => ({
//                             ...prev,
//                             [plot.id]: true,
//                           }))
//                         }
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-[#EFECE6] flex items-center justify-center">
//                         <Grid className="w-6 h-6 text-stone-400" />
//                       </div>
//                     )}
//                     <button
//                       onClick={() => toggleFavorite(plot.id)}
//                       className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer border ${
//                         isFav
//                           ? "bg-stone-900 border-stone-900 text-white"
//                           : "bg-white/80 border-stone-200 text-stone-700 hover:bg-white"
//                       }`}
//                     >
//                       <Heart
//                         className={`w-3.5 h-3.5 ${isFav ? "fill-white" : ""}`}
//                       />
//                     </button>
//                   </div>

//                   <div className="flex-1 flex flex-col justify-between space-y-6 lg:py-1">
//                     <div className="space-y-3">
//                       <div className="flex flex-wrap items-center gap-2">
//                         <span className="text-[9px] font-bold tracking-widest uppercase bg-[#111] text-white px-2 py-0.5 rounded-sm">
//                           {plot.zoning}
//                         </span>
//                         <span className="text-[9px] font-medium tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded-sm border border-stone-200">
//                           {plot.tag}
//                         </span>
//                       </div>

//                       <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
//                         <h3 className="text-lg sm:text-xl font-normal text-stone-900 tracking-tight group-hover:text-stone-600 transition-colors">
//                           {plot.title}
//                         </h3>
//                         <span className="text-xl font-light tracking-tight text-stone-900 shrink-0 md:text-right">
//                           {plot.price}
//                         </span>
//                       </div>

//                       <p className="text-xs font-medium text-stone-500 flex items-center gap-1">
//                         <MapPin className="w-3.5 h-3.5 text-stone-400" />{" "}
//                         {plot.location}
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-t border-b border-stone-100 text-[11px] font-medium text-stone-600">
//                       <div>
//                         <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
//                           Dimension Plot
//                         </span>
//                         <span className="text-stone-900 font-semibold">
//                           📐 {plot.area}
//                         </span>
//                       </div>
//                       <div>
//                         <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
//                           Approach Road
//                         </span>
//                         <span className="text-stone-900 font-semibold">
//                           🛣️ {plot.roadWidth}
//                         </span>
//                       </div>
//                       <div>
//                         <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
//                           Status Ledger
//                         </span>
//                         <span className="text-stone-900 font-semibold flex items-center gap-0.5">
//                           <ShieldCheck className="w-3 h-3 text-emerald-600" />{" "}
//                           Clear Title
//                         </span>
//                       </div>
//                       <div>
//                         <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
//                           Khata Allocation
//                         </span>
//                         <span className="text-stone-900 font-semibold">
//                           🔒 E-Khata Ready
//                         </span>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between pt-2">
//                       <span className="text-[10px] font-medium text-stone-400 flex items-center gap-1">
//                         <Map className="w-3.5 h-3.5" /> BMRDA / BBMP Approved
//                         Coordinates
//                       </span>
//                       <button className="inline-flex items-center gap-2 border border-stone-900 text-[#111] text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-[#111] hover:text-white transition-all cursor-pointer rounded-xs">
//                         Acquire Blueprints{" "}
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

// export default Plots;
import { useState } from "react";
import {
  MapPin,
  ShieldCheck,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  Grid,
  Map,
} from "lucide-react";

// ─── 100% UNIQUE HIGH-RES LAND & PLOT IMAGES (WITH UNIQUE SIGNATURES) ───
const PLOT_IMAGES = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1444653389962-8149286c578a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
];

const LOCATIONS = [
  "Devenahalli Industrial Corridor, Bangalore",
  "Sarjapur Gated Tech-Enclave, Bangalore",
  "Mysore Road Satellite Township, Bangalore",
  "Whitefield Extension Green Acres, Bangalore",
  "Yelahanka Premium Sovereign Zone, Bangalore",
  "Electronic City Phase 2 Hub, Bangalore",
];

const TITLES = [
  "The Sovereign Crest Gated Plot",
  "Elysian Green Acres Industrial Zone",
  "Zenith Vista Premium Corner Plot",
  "Imperial Boulevard Township Land",
  "The Meridian Gold Signature Plot",
  "Alpha Core Commercial Blueprint Land",
];

const TAGS = [
  "GATED COMMUNITY",
  "INDUSTRIAL READY",
  "PREMIUM CORNER",
  "PRICE JUST DROPPED",
  "BMRDA APPROVED",
];
const ZONINGS = [
  "Residential Zone",
  "Commercial Freehold",
  "Industrial Corridor",
  "Mixed-Use Agricultural",
];

const GENERATED_PLOTS = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const zoningType = ZONINGS[id % ZONINGS.length];
  const basePrice = (1.2 + id * 0.07).toFixed(2);
  const plotSize = 1200 + id * 60;

  const baseImg = PLOT_IMAGES[index % PLOT_IMAGES.length];
  // Dynamic signature query taaki browser har image ko different maane
  const uniqueImage = `${baseImg}&sig=${id}`;

  const titleIdx = (index * 3 + 2) % TITLES.length;
  const locIdx = (index * 7 + 4) % LOCATIONS.length;

  return {
    id,
    title: `${TITLES[titleIdx]} (Sector #${100 + id})`,
    location: LOCATIONS[locIdx],
    price: `₹${basePrice} Cr`,
    area: `${plotSize.toLocaleString()} sqft`,
    zoning: zoningType,
    tag: TAGS[id % TAGS.length],
    image: uniqueImage,
    roadWidth: `${30 + (id % 3) * 10} Feet Road`,
  };
});

function Plots() {
  const [favorites, setFavorites] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedZoning, setSelectedZoning] = useState("ALL");
  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  const filteredPlots = GENERATED_PLOTS.filter((plot) => {
    const matchesZoning =
      selectedZoning === "ALL" || plot.zoning === selectedZoning;
    const matchesLocation =
      selectedLocation === "ALL" || plot.location === selectedLocation;
    return matchesZoning && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] font-sans antialiased text-[#1A1A1A]">
      {/* ─── HERO ─── */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#EFECE6] text-[#635B4D] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
              ✨ Premium Ground Assets Matrix
            </div>
            <h1 className="text-4xl sm:text-7xl font-light tracking-tight text-[#111] uppercase leading-none">
              Land &{" "}
              <strong className="font-serif italic font-normal">Parcels</strong>
            </h1>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-xs text-stone-500 max-w-sm ml-auto font-medium leading-relaxed">
              Curated industrial corridors, commercial nodes, and high-yield
              agricultural investments for premium portfolio positioning.
            </p>
          </div>
        </div>
      </div>

      {/* ─── FILTER BAR ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="flex justify-between items-center border-b border-stone-200 pb-4">
          <span className="text-xs font-serif italic text-stone-600">
            Cataloging {filteredPlots.length} exclusive land structures
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-3 bg-[#111] text-white text-[11px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-xs hover:bg-stone-800 transition-all cursor-pointer shadow-sm"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Adjust Parameters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-6 bg-[#F3F1EC] rounded-xs text-left grid grid-cols-1 md:grid-cols-2 gap-6 border border-stone-200 animate-in fade-in duration-200">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                Zone Classification
              </label>
              <div className="flex flex-wrap gap-2">
                {["ALL", ...ZONINGS].map((zone) => (
                  <button
                    key={zone}
                    onClick={() => setSelectedZoning(zone)}
                    className={`px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer rounded-xs border ${
                      selectedZoning === zone
                        ? "bg-[#111] border-[#111] text-white"
                        : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    {zone === "ALL" ? "All Zones" : zone.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                Macro-Market Sector
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-white border border-stone-200 px-3 py-2 text-xs font-semibold text-stone-700 focus:outline-none rounded-xs cursor-pointer"
              >
                <option value="ALL">All Available Sectors</option>
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

      {/* ─── HORIZONTAL WIDE CATALOG STRIPES ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredPlots.length === 0 ? (
          <div className="bg-[#F3F1EC] p-16 text-center border border-dashed border-stone-300">
            <p className="text-sm font-serif italic text-stone-600">
              No matching coordinates located in this micro-market.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPlots.map((plot) => {
              const isFav = favorites.includes(plot.id);
              const hasError = imageErrors[plot.id];

              return (
                <div
                  key={plot.id}
                  className="bg-white border border-stone-200 p-4 md:p-6 rounded-xs hover:border-stone-900 transition-all duration-300 flex flex-col lg:flex-row gap-6 items-stretch relative group text-left"
                >
                  {/* Clean layout configuration bypassing Tailwind arbitrary limitations safely */}
                  <div
                    className="relative w-full lg:aspect-auto bg-stone-100 overflow-hidden shrink-0 rounded-xs"
                    style={{
                      aspectRatio: "16 / 10",
                      width: "100%",
                      maxWidth:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1024
                          ? "350px"
                          : "100%",
                    }}
                  >
                    {!hasError ? (
                      <img
                        src={plot.image}
                        alt={plot.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [plot.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-[#EFECE6] flex items-center justify-center"
                        style={{ minHeight: "200px" }}
                      >
                        <Grid className="w-6 h-6 text-stone-400" />
                      </div>
                    )}
                    <button
                      onClick={() => toggleFavorite(plot.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer border ${
                        isFav
                          ? "bg-stone-900 border-stone-900 text-white"
                          : "bg-white/80 border-stone-200 text-stone-700 hover:bg-white"
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${isFav ? "fill-white" : ""}`}
                      />
                    </button>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-6 lg:py-1">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-bold tracking-widest uppercase bg-[#111] text-white px-2 py-0.5 rounded-sm">
                          {plot.zoning}
                        </span>
                        <span className="text-[9px] font-medium tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded-sm border border-stone-200">
                          {plot.tag}
                        </span>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-normal text-stone-900 tracking-tight group-hover:text-stone-600 transition-colors">
                          {plot.title}
                        </h3>
                        <span className="text-xl font-light tracking-tight text-stone-900 shrink-0 md:text-right">
                          {plot.price}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />{" "}
                        {plot.location}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-t border-b border-stone-100 text-[11px] font-medium text-stone-600">
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
                          Dimension Plot
                        </span>
                        <span className="text-stone-900 font-semibold">
                          📐 {plot.area}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
                          Approach Road
                        </span>
                        <span className="text-stone-900 font-semibold">
                          🛣️ {plot.roadWidth}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
                          Status Ledger
                        </span>
                        <span className="text-stone-900 font-semibold flex items-center gap-0.5">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />{" "}
                          Clear Title
                        </span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">
                          Khata Allocation
                        </span>
                        <span className="text-stone-900 font-semibold">
                          🔒 E-Khata Ready
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[10px] font-medium text-stone-400 flex items-center gap-1">
                        <Map className="w-3.5 h-3.5" /> BMRDA / BBMP Approved
                        Coordinates
                      </span>
                      <button className="inline-flex items-center gap-2 border border-stone-900 text-[#111] text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-[#111] hover:text-white transition-all cursor-pointer rounded-xs">
                        Acquire Blueprints{" "}
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

export default Plots;
