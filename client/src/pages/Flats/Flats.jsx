// import React, { useState, useMemo } from "react";
// import {
//   Building2,
//   MapPin,
//   Maximize,
//   Compass,
//   CheckCircle2,
//   ShieldAlert,
//   Heart,
//   X,
//   ChevronDown,
//   ChevronUp,
//   Search,
//   Grid,
//   List,
//   RefreshCw,
//   PhoneCall,
//   UserCheck,
//   ShieldCheck,
//   Menu,
//   User,
//   Bell,
// } from "lucide-react";

// // ─── PRODUCTION MOCK DATA GENERATOR (100+ REAL ESTATE DATASET) ───
// const MOCK_FLATS_EXTENDED = (() => {
//   const dataset = [];
//   const locations = [
//     { main: "Whitefield", micro: "Near ITPL Main Road, Zone A" },
//     { main: "HSR Layout", micro: "Sector 2, Outer Ring Road Enclave" },
//     { main: "Indiranagar", micro: "100 Feet Road, Premium Commercial Node" },
//     { main: "Electronic City", micro: "Phase 1, Corporate Hub Proximity" },
//     { main: "Jayanagar", micro: "4th Block, Residential Green Corridor" },
//     { main: "Marathahalli", micro: "Near Innovative Multiplex Junction" },
//   ];

//   const architecturalImages = [
//     "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
//   ];

//   const tags = ["Verified", "Price Drop", "Exclusive", "Trending"];
//   const facings = ["East-Facing", "North-East", "Vastu West", "South-Facing"];
//   const statuses = ["Ready to Move", "Under Construction"];
//   const furnishingOptions = [
//     "Fully Furnished",
//     "Semi-Furnished",
//     "Unfurnished",
//   ];
//   const allPossibleAmenities = [
//     "Parking",
//     "Lift",
//     "Park",
//     "Power Backup",
//     "Gated Society",
//     "Gym",
//     "Clubhouse",
//     "Security",
//   ];

//   for (let i = 1; i <= 100; i++) {
//     const loc = locations[i % locations.length];
//     const baseBhk = (i % 3) + 2;
//     const priceRaw =
//       baseBhk === 2
//         ? 4000000 + i * 150000
//         : baseBhk === 3
//           ? 7500000 + i * 200000
//           : 15000000 + i * 300000;
//     const displayVal =
//       priceRaw >= 10000000
//         ? `₹${(priceRaw / 10000000).toFixed(2)} Cr`
//         : `₹${(priceRaw / 100000).toFixed(0)} Lakh`;

//     dataset.push({
//       id: i,
//       title: `Premium ${baseBhk} BHK Luxury Estate Elite (Unit #${1000 + i})`,
//       location: loc.main + ", Bangalore",
//       microLocation: loc.micro,
//       price: priceRaw,
//       displayPrice: displayVal,
//       area:
//         baseBhk === 2
//           ? 950 + i * 5
//           : baseBhk === 3
//             ? 1400 + i * 8
//             : 2200 + i * 12,
//       bhk: `${baseBhk} BHK`,
//       furnishing: furnishingOptions[i % furnishingOptions.length],
//       possession: statuses[i % statuses.length],
//       facing: facings[i % facings.length],
//       image: architecturalImages[i % architecturalImages.length],
//       tag: tags[i % tags.length],
//       rating: (4.5 + (i % 6) * 0.1).toFixed(1),
//       reraId: `RERA-IND-2026-${3000 + i}`,
//       hasPhotos: true,
//       hasVideos: i % 3 === 0,
//       isReraApproved: true,
//       amenities: allPossibleAmenities.slice(0, (i % 5) + 4),
//       description: `Bespoke ultra-modern tier architectural layout configuration map sequence #${i}. Optimized deeply for ventilation aerodynamics and direct proximity nodes.`,
//       agent: {
//         name: "Vikram Rathore",
//         experience: "8+ Years",
//         phone: "+91 98765 43210",
//         type: "Certified Executive Partner",
//       },
//     });
//   }
//   return dataset;
// })();

// const Flats = () => {
//   // ─── STATE MODULES ───
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedBhk, setSelectedBhk] = useState("All");
//   const [maxPrice, setMaxPrice] = useState(30000000);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [selectedPossession, setSelectedPossession] = useState("All");
//   const [selectedFurnishing, setSelectedFurnishing] = useState("All");
//   const [onlyWithPhotos, setOnlyWithPhotos] = useState(false);
//   const [onlyWithVideos, setOnlyWithVideos] = useState(false);
//   const [onlyReraApproved, setOnlyReraApproved] = useState(false);

//   const [openSections, setOpenSections] = useState({
//     purchaseType: true,
//     amenities: true,
//     furnishing: false,
//   });
//   const [viewMode, setViewMode] = useState("grid");
//   const [favorites, setFavorites] = useState([]);
//   const [activePropertyModal, setActivePropertyModal] = useState(null);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   const filterAmenitiesList = [
//     "Parking",
//     "Lift",
//     "Park",
//     "Power Backup",
//     "Gated Society",
//     "Gym",
//     "Clubhouse",
//     "Security",
//   ];

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const handleAmenityToggle = (amenity) => {
//     setSelectedAmenities((prev) =>
//       prev.includes(amenity)
//         ? prev.filter((a) => a !== amenity)
//         : [...prev, amenity],
//     );
//   };

//   const clearAllFilters = () => {
//     setSearchQuery("");
//     setSelectedBhk("All");
//     setMaxPrice(30000000);
//     setSelectedAmenities([]);
//     setSelectedPossession("All");
//     setSelectedFurnishing("All");
//     setOnlyWithPhotos(false);
//     setOnlyWithVideos(false);
//     setOnlyReraApproved(false);
//   };

//   // ─── DATASHEET INTERMEDIATE FILTER FLOW ───
//   const filteredFlats = useMemo(() => {
//     return MOCK_FLATS_EXTENDED.filter((flat) => {
//       const matchesSearch =
//         flat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         flat.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         flat.microLocation.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesBhk = selectedBhk === "All" || flat.bhk === selectedBhk;
//       const matchesPrice = flat.price <= maxPrice;
//       const matchesPossession =
//         selectedPossession === "All" || flat.possession === selectedPossession;
//       const matchesFurnishing =
//         selectedFurnishing === "All" || flat.furnishing === selectedFurnishing;
//       const matchesPhotos = !onlyWithPhotos || flat.hasPhotos;
//       const matchesVideos = !onlyWithVideos || flat.hasVideos;
//       const matchesRera = !onlyReraApproved || flat.isReraApproved;
//       const matchesAmenities =
//         selectedAmenities.length === 0 ||
//         selectedAmenities.every((amenity) => flat.amenities.includes(amenity));

//       return (
//         matchesSearch &&
//         matchesBhk &&
//         matchesPrice &&
//         matchesPossession &&
//         matchesFurnishing &&
//         matchesPhotos &&
//         matchesVideos &&
//         matchesRera &&
//         matchesAmenities
//       );
//     });
//   }, [
//     searchQuery,
//     selectedBhk,
//     maxPrice,
//     selectedPossession,
//     selectedFurnishing,
//     onlyWithPhotos,
//     onlyWithVideos,
//     onlyReraApproved,
//     selectedAmenities,
//   ]);

//   return (
//     <div className="min-h-screen bg-[#F4F6F9] text-slate-800 antialiased font-sans">
//       {/* ─── LEVEL 1: TOP TICKER INFRASTRUCTURE ARCHITECTURE ─── */}
//       <div className="bg-[#090F1C] text-slate-400 text-[11px] font-semibold tracking-wider py-2 px-6 flex justify-between items-center border-b border-white/5">
//         <div className="flex items-center gap-2 text-blue-400">
//           <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
//           <span>⚡ ESCROW PROTOCOL SECURITY SUBSYSTEM DEPLOYED v2.4</span>
//         </div>
//         <div className="hidden md:flex items-center gap-6 text-[11px] font-medium text-slate-300">
//           <span className="flex items-center gap-1">
//             <UserCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% RERA
//             Registered
//           </span>
//           <span className="flex items-center gap-1">
//             <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Title-Deed
//             Verified
//           </span>
//         </div>
//       </div>

//       {/* ─── LEVEL 3: DYNAMIC BREADCRUMB LOOKUP SEGMENT ─── */}
//       <div className="bg-[#0C1526] text-white border-b border-slate-800/30">
//         <div className="max-w-7xl mx-auto px-6 pt-12 pb-12">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
//             {/* Left Content */}
//             <div className="space-y-3">
//               <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-[11px] font-semibold tracking-wider uppercase text-blue-400">
//                 VERIFIED PROPERTIES
//               </span>

//               <h1 className="text-4xl font-black tracking-tight leading-tight">
//                 Verified Premium Inventory
//               </h1>

//               <p className="max-w-xl text-sm text-slate-400 leading-6">
//                 Discover verified premium properties with real-time inventory,
//                 RERA approved projects, transparent pricing and trusted
//                 developers.
//               </p>
//             </div>

//             {/* Search Box */}
//             <div className="w-full lg:w-[430px]">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />

//                 <input
//                   type="text"
//                   placeholder="Search project, locality, builder..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full h-14 rounded-2xl bg-[#131f35] border border-slate-700 text-white placeholder:text-slate-500 pl-12 pr-5 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//         {/* FILTER PANEL */}
//         <div className="lg:col-span-3 lg:sticky lg:top-24 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6 max-h-[calc(100vh-120px)] overflow-y-auto">
//           <div className="flex items-center justify-between border-b border-slate-200 pb-4">
//             <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">
//               Refine Search
//             </h3>

//             <button
//               onClick={clearAllFilters}
//               className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition"
//             >
//               <RefreshCw className="w-3.5 h-3.5" />
//               Clear
//             </button>
//           </div>

//           {/* UNIT CONFLICT CONTROL BHK SEGMENT */}
//           <div className="space-y-2 text-left">
//             <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 block">
//               BHK Bedroom Config
//             </label>
//             <div className="grid grid-cols-4 gap-1 bg-slate-50 border border-slate-200/60 p-1 rounded-xl">
//               {["All", "2 BHK", "3 BHK", "4 BHK"].map((bhk) => (
//                 <button
//                   key={bhk}
//                   onClick={() => setSelectedBhk(bhk)}
//                   className={`py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
//                     selectedBhk === bhk
//                       ? "bg-slate-900 text-white shadow-xs"
//                       : "text-slate-500 hover:text-slate-900"
//                   }`}
//                 >
//                   {bhk === "All" ? "Any" : bhk.split(" ")[0] + "B"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* BUDGET PRICING METRIC DECK */}
//           <div className="space-y-2 text-left">
//             <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 block">
//               Valuation Upper Ceiling
//             </label>
//             <input
//               type="range"
//               min="4000000"
//               max="30000000"
//               step="500000"
//               value={maxPrice}
//               onChange={(e) => setMaxPrice(Number(e.target.value))}
//               className="w-full accent-blue-600 h-1 bg-slate-100 rounded cursor-pointer"
//             />
//             <div className="flex justify-between text-[11px] font-bold text-slate-600">
//               <span>₹40 Lakh</span>
//               <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">
//                 {maxPrice >= 10000000
//                   ? `₹${(maxPrice / 10000000).toFixed(2)} Cr`
//                   : `₹${(maxPrice / 100000).toFixed(0)} Lakh`}
//               </span>
//             </div>
//           </div>

//           <hr className="border-slate-100" />

//           {/* DYNAMIC AMENITIES CONTAINER DECK */}
//           <div className="space-y-2 text-left">
//             <button
//               onClick={() => toggleSection("amenities")}
//               className="w-full flex justify-between items-center text-xs font-black uppercase tracking-wider text-slate-800 cursor-pointer"
//             >
//               <span>Amenities Matrix</span>
//               <div className="flex items-center gap-1.5 text-blue-600 text-[11px]">
//                 {selectedAmenities.length > 0 && (
//                   <span
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedAmenities([]);
//                     }}
//                     className="hover:underline text-[10px] font-bold tracking-wide mr-1"
//                   >
//                     RESET
//                   </span>
//                 )}
//                 {openSections.amenities ? (
//                   <ChevronUp className="w-4 h-4" />
//                 ) : (
//                   <ChevronDown className="w-4 h-4" />
//                 )}
//               </div>
//             </button>

//             {openSections.amenities && (
//               <div className="pt-2 space-y-3">
//                 <div className="flex flex-wrap gap-1.5">
//                   {filterAmenitiesList
//                     .slice(0, showAllAmenities ? filterAmenitiesList.length : 5)
//                     .map((amenity) => {
//                       const isSelected = selectedAmenities.includes(amenity);
//                       return (
//                         <button
//                           key={amenity}
//                           onClick={() => handleAmenityToggle(amenity)}
//                           className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1 cursor-pointer ${
//                             isSelected
//                               ? "bg-blue-50 border-blue-500 text-blue-600 font-bold"
//                               : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
//                           }`}
//                         >
//                           <span>{isSelected ? "✓" : "+"}</span> {amenity}
//                         </button>
//                       );
//                     })}
//                 </div>

//                 <button
//                   onClick={() => setShowAllAmenities(!showAllAmenities)}
//                   className="text-xs text-blue-600 font-bold hover:underline block cursor-pointer"
//                 >
//                   {showAllAmenities
//                     ? "- Less Flags"
//                     : `+ ${filterAmenitiesList.length - 5} More Parameters`}
//                 </button>
//               </div>
//             )}
//           </div>

//           <hr className="border-slate-100" />

//           {/* VISUAL MEDIA VERIFICATION CONTROLS */}
//           <div className="space-y-3 text-left pt-1">
//             <div className="flex items-center justify-between text-xs font-bold text-slate-700">
//               <span>Properties with photos</span>
//               <input
//                 type="checkbox"
//                 checked={onlyWithPhotos}
//                 onChange={() => setOnlyWithPhotos(!onlyWithPhotos)}
//                 className="w-4 h-4 accent-blue-600 cursor-pointer"
//               />
//             </div>
//             <div className="flex items-center justify-between text-xs font-bold text-slate-700">
//               <span>Properties with videos</span>
//               <input
//                 type="checkbox"
//                 checked={onlyWithVideos}
//                 onChange={() => setOnlyWithVideos(!onlyWithVideos)}
//                 className="w-4 h-4 accent-blue-600 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ==========================================
//             RIGHT COLUMN DECK: LISTING FEEDS STREAM
//             ========================================== */}
//         <div className="lg:col-span-9 space-y-5 text-left">
//           {/* Dynamic Feed Status Context Header */}
//           <div className="bg-white border border-slate-200 px-5 py-3.5 rounded-2xl flex items-center justify-between shadow-2xs">
//             <p className="text-xs font-medium text-slate-500">
//               Showing{" "}
//               <span className="text-slate-900 font-extrabold">
//                 {filteredFlats.length}
//               </span>{" "}
//               individual asset indices matching matrix.
//             </p>
//             <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg cursor-pointer ${viewMode === "grid" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-400"}`}
//               >
//                 <Grid className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg cursor-pointer ${viewMode === "list" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-400"}`}
//               >
//                 <List className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Core Mapping Logic Loop Execution */}
//           {filteredFlats.length === 0 ? (
//             <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center space-y-4 shadow-2xs">
//               <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto" />
//               <h3 className="text-base font-black text-slate-800 uppercase tracking-tight">
//                 Zero Direct Index Matches
//               </h3>
//               <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
//                 We found no active secondary market blueprints fitting that
//                 specific configuration pattern.
//               </p>
//               <button
//                 onClick={clearAllFilters}
//                 className="bg-slate-950 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors cursor-pointer"
//               >
//                 Clear Parameters Array
//               </button>
//             </div>
//           ) : viewMode === "grid" ? (
//             /* DYNAMIC GRID VIEW INTERFACES */
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
//               {filteredFlats.map((flat) => {
//                 const isFav = favorites.includes(flat.id);
//                 return (
//                   <div
//                     key={flat.id}
//                     className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
//                   >
//                     {/* Visual Aspect Asset Container */}
//                     <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
//                       <img
//                         src={flat.image}
//                         alt=""
//                         className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
//                       />
//                       <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
//                         <span
//                           className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-sm text-white ${
//                             flat.tag === "Price Drop"
//                               ? "bg-rose-500"
//                               : flat.tag === "Exclusive"
//                                 ? "bg-amber-500"
//                                 : "bg-blue-600"
//                           }`}
//                         >
//                           {flat.tag}
//                         </span>
//                         <button
//                           onClick={() => toggleFavorite(flat.id)}
//                           className={`p-2 rounded-xl border backdrop-blur-xs transition-colors cursor-pointer ${isFav ? "bg-rose-600 border-rose-600 text-white" : "bg-white/90 border-slate-200/40 text-slate-700"}`}
//                         >
//                           <Heart
//                             className={`w-3.5 h-3.5 ${isFav ? "fill-white" : ""}`}
//                           />
//                         </button>
//                       </div>
//                     </div>

//                     {/* Data Detail Content Node */}
//                     <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
//                       <div className="space-y-1.5">
//                         <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
//                           <span>{flat.reraId}</span>
//                           <span className="text-amber-500">
//                             ⭐ {flat.rating}
//                           </span>
//                         </div>
//                         <h3
//                           onClick={() => setActivePropertyModal(flat)}
//                           className="text-xs sm:text-sm font-black text-slate-850 tracking-tight line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors leading-snug"
//                         >
//                           {flat.title}
//                         </h3>
//                         <p className="text-[11px] text-slate-500 font-semibold truncate flex items-center gap-0.5">
//                           <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />{" "}
//                           {flat.microLocation}, {flat.location}
//                         </p>
//                       </div>

//                       {/* Dimension Grid Parameters Strip */}
//                       <div className="grid grid-cols-2 gap-2 text-[10px] font-extrabold text-slate-600 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
//                         <span>📐 {flat.area} sqft Carpet</span>
//                         <span>🧭 {flat.facing}</span>
//                       </div>

//                       {/* Financial Context Target Base Footer */}
//                       <div className="flex items-center justify-between pt-2 border-t border-slate-100">
//                         <div>
//                           <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">
//                             Total Valuation
//                           </span>
//                           <span className="text-sm font-black text-slate-950 tracking-tight">
//                             {flat.displayPrice}
//                           </span>
//                         </div>
//                         <button
//                           onClick={() => setActivePropertyModal(flat)}
//                           className="bg-slate-950 hover:bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-colors shadow-2xs cursor-pointer"
//                         >
//                           Configure
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             /* DYNAMIC LIST VIEW INTERFACES */
//             <div className="space-y-4">
//               {filteredFlats.map((flat) => (
//                 <div
//                   key={flat.id}
//                   className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col sm:flex-row gap-5 hover:shadow-xs transition-all duration-300 group"
//                 >
//                   <div className="w-full sm:w-44 aspect-video sm:aspect-square bg-slate-100 rounded-xl overflow-hidden shrink-0 relative">
//                     <img
//                       src={flat.image}
//                       alt=""
//                       className="w-full h-full object-cover"
//                     />
//                     <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] px-2 py-0.5 rounded font-black uppercase">
//                       {flat.bhk}
//                     </span>
//                   </div>

//                   <div className="flex-1 flex flex-col justify-between space-y-4 py-0.5">
//                     <div className="space-y-1">
//                       <div className="flex justify-between items-start gap-4">
//                         <h3
//                           onClick={() => setActivePropertyModal(flat)}
//                           className="text-sm sm:text-base font-black text-slate-850 tracking-tight hover:text-blue-600 cursor-pointer transition-colors leading-snug"
//                         >
//                           {flat.title}
//                         </h3>
//                         <span className="text-base font-black text-slate-950 tracking-tight shrink-0">
//                           {flat.displayPrice}
//                         </span>
//                       </div>
//                       <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
//                         <MapPin className="w-3.5 h-3.5 text-slate-400" />{" "}
//                         {flat.microLocation}, {flat.location}
//                       </p>
//                       <p className="text-xs text-slate-600 line-clamp-2 pt-1 font-medium">
//                         {flat.description}
//                       </p>
//                     </div>

//                     <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
//                       <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500">
//                         <span className="flex items-center gap-1">
//                           <Maximize className="w-3.5 h-3.5 text-slate-400" />{" "}
//                           {flat.area} sqft
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Compass className="w-3.5 h-3.5 text-slate-400" />{" "}
//                           {flat.facing}
//                         </span>
//                         <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-wide border border-emerald-100">
//                           {flat.possession}
//                         </span>
//                       </div>
//                       <button
//                         onClick={() => setActivePropertyModal(flat)}
//                         className="bg-slate-950 hover:bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all cursor-pointer"
//                       >
//                         Configure Unit
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ─── LEVEL 5: OVERLAY FULL SPEC BLUEPRINT DRAWER MODAL ─── */}
//       {activePropertyModal && (
//         <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-left relative space-y-4 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
//             <button
//               onClick={() => setActivePropertyModal(null)}
//               className="absolute top-4 right-4 p-1.5 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
//             >
//               <X className="w-4 h-4" />
//             </button>
//             <img
//               src={activePropertyModal.image}
//               alt=""
//               className="w-full aspect-video object-cover rounded-2xl bg-slate-50 shadow-inner"
//             />

//             <div className="space-y-1">
//               <span className="text-[9px] bg-blue-50 border border-blue-200 text-blue-600 px-2.5 py-0.5 rounded font-black uppercase tracking-wider inline-block">
//                 {activePropertyModal.bhk} SPEC
//               </span>
//               <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-slate-950">
//                 {activePropertyModal.title}
//               </h2>
//               <p className="text-xs text-slate-500 font-semibold">
//                 {activePropertyModal.microLocation},{" "}
//                 {activePropertyModal.location}
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-3 bg-slate-50 border border-slate-200/60 p-3.5 rounded-2xl text-xs font-bold text-slate-700">
//               <div>
//                 Super Area:{" "}
//                 <span className="text-slate-950 font-black">
//                   {activePropertyModal.area} sqft
//                 </span>
//               </div>
//               <div>
//                 Facing Grid:{" "}
//                 <span className="text-slate-950 font-black">
//                   {activePropertyModal.facing}
//                 </span>
//               </div>
//               <div>
//                 Status Flag:{" "}
//                 <span className="text-emerald-600 font-black">
//                   {activePropertyModal.possession}
//                 </span>
//               </div>
//               <div>
//                 Final Value:{" "}
//                 <span className="text-blue-600 font-black">
//                   {activePropertyModal.displayPrice}
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 block">
//                 Structural Amenities
//               </label>
//               <div className="flex flex-wrap gap-1">
//                 {activePropertyModal.amenities.map((a, i) => (
//                   <span
//                     key={i}
//                     className="bg-white border border-slate-200 text-slate-700 text-[10px] px-2.5 py-1 rounded-lg font-medium shadow-2xs"
//                   >
//                     ✓ {a}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-4">
//               <div>
//                 <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest">
//                   {activePropertyModal.agent.type}
//                 </span>
//                 <span className="text-xs font-black text-slate-900">
//                   {activePropertyModal.agent.name}
//                 </span>
//               </div>
//               <a
//                 href={`tel:${activePropertyModal.agent.phone}`}
//                 className="bg-slate-950 hover:bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
//               >
//                 <PhoneCall className="w-3.5 h-3.5" /> Direct Call
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Flats;
import { useState, useMemo } from "react";
import {
  MapPin,
  Maximize,
  Compass,
  ShieldAlert,
  Heart,
  X,
  ChevronDown,
  ChevronUp,
  Search,
  Grid,
  List,
  RefreshCw,
  PhoneCall,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

// ─── PRODUCTION MOCK DATA GENERATOR (100+ REAL ESTATE DATASET) ───
const MOCK_FLATS_EXTENDED = (() => {
  const dataset = [];
  const locations = [
    { main: "Whitefield", micro: "Near ITPL Main Road, Zone A" },
    { main: "HSR Layout", micro: "Sector 2, Outer Ring Road Enclave" },
    { main: "Indiranagar", micro: "100 Feet Road, Premium Commercial Node" },
    { main: "Electronic City", micro: "Phase 1, Corporate Hub Proximity" },
    { main: "Jayanagar", micro: "4th Block, Residential Green Corridor" },
    { main: "Marathahalli", micro: "Near Innovative Multiplex Junction" },
  ];

  const architecturalImages = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  ];

  const tags = ["Verified", "Price Drop", "Exclusive", "Trending"];
  const facings = ["East-Facing", "North-East", "Vastu West", "South-Facing"];
  const statuses = ["Ready to Move", "Under Construction"];
  const furnishingOptions = [
    "Fully Furnished",
    "Semi-Furnished",
    "Unfurnished",
  ];
  const allPossibleAmenities = [
    "Parking",
    "Lift",
    "Park",
    "Power Backup",
    "Gated Society",
    "Gym",
    "Clubhouse",
    "Security",
  ];

  for (let i = 1; i <= 100; i++) {
    const loc = locations[i % locations.length];
    const baseBhk = (i % 3) + 2;
    const priceRaw =
      baseBhk === 2
        ? 4000000 + i * 150000
        : baseBhk === 3
          ? 7500000 + i * 200000
          : 15000000 + i * 300000;
    const displayVal =
      priceRaw >= 10000000
        ? `₹${(priceRaw / 10000000).toFixed(2)} Cr`
        : `₹${(priceRaw / 100000).toFixed(0)} Lakh`;

    dataset.push({
      id: i,
      title: `Premium ${baseBhk} BHK Luxury Estate Elite (Unit #${1000 + i})`,
      location: loc.main + ", Bangalore",
      microLocation: loc.micro,
      price: priceRaw,
      displayPrice: displayVal,
      area:
        baseBhk === 2
          ? 950 + i * 5
          : baseBhk === 3
            ? 1400 + i * 8
            : 2200 + i * 12,
      bhk: `${baseBhk} BHK`,
      furnishing: furnishingOptions[i % furnishingOptions.length],
      possession: statuses[i % statuses.length],
      facing: facings[i % facings.length],
      image: architecturalImages[i % architecturalImages.length],
      tag: tags[i % tags.length],
      rating: (4.5 + (i % 6) * 0.1).toFixed(1),
      reraId: `RERA-IND-2026-${3000 + i}`,
      hasPhotos: true,
      hasVideos: i % 3 === 0,
      isReraApproved: true,
      amenities: allPossibleAmenities.slice(0, (i % 5) + 4),
      description: `Bespoke ultra-modern tier architectural layout configuration map sequence #${i}. Optimized deeply for ventilation aerodynamics and direct proximity nodes.`,
      agent: {
        name: "Vikram Rathore",
        experience: "8+ Years",
        phone: "+91 98765 43210",
        type: "Certified Executive Partner",
      },
    });
  }
  return dataset;
})();

const Flats = () => {
  // ─── STATE MODULES ───
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBhk, setSelectedBhk] = useState("All");
  const [maxPrice, setMaxPrice] = useState(30000000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedPossession, setSelectedPossession] = useState("All");
  const [selectedFurnishing, setSelectedFurnishing] = useState("All");
  const [onlyWithPhotos, setOnlyWithPhotos] = useState(false);
  const [onlyWithVideos, setOnlyWithVideos] = useState(false);
  const [onlyReraApproved, setOnlyReraApproved] = useState(false);

  const [openSections, setOpenSections] = useState({
    purchaseType: true,
    amenities: true,
    furnishing: false,
  });
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState([]);
  const [activePropertyModal, setActivePropertyModal] = useState(null);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const filterAmenitiesList = [
    "Parking",
    "Lift",
    "Park",
    "Power Backup",
    "Gated Society",
    "Gym",
    "Clubhouse",
    "Security",
  ];

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedBhk("All");
    setMaxPrice(30000000);
    setSelectedAmenities([]);
    setSelectedPossession("All");
    setSelectedFurnishing("All");
    setOnlyWithPhotos(false);
    setOnlyWithVideos(false);
    setOnlyReraApproved(false);
  };

  // ─── DATASHEET INTERMEDIATE FILTER FLOW ───
  const filteredFlats = useMemo(() => {
    return MOCK_FLATS_EXTENDED.filter((flat) => {
      const matchesSearch =
        flat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flat.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flat.microLocation.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBhk = selectedBhk === "All" || flat.bhk === selectedBhk;
      const matchesPrice = flat.price <= maxPrice;
      const matchesPossession =
        selectedPossession === "All" || flat.possession === selectedPossession;
      const matchesFurnishing =
        selectedFurnishing === "All" || flat.furnishing === selectedFurnishing;
      const matchesPhotos = !onlyWithPhotos || flat.hasPhotos;
      const matchesVideos = !onlyWithVideos || flat.hasVideos;
      const matchesRera = !onlyReraApproved || flat.isReraApproved;
      const matchesAmenities =
        selectedAmenities.length === 0 ||
        selectedAmenities.every((amenity) => flat.amenities.includes(amenity));

      return (
        matchesSearch &&
        matchesBhk &&
        matchesPrice &&
        matchesPossession &&
        matchesFurnishing &&
        matchesPhotos &&
        matchesVideos &&
        matchesRera &&
        matchesAmenities
      );
    });
  }, [
    searchQuery,
    selectedBhk,
    maxPrice,
    selectedPossession,
    selectedFurnishing,
    onlyWithPhotos,
    onlyWithVideos,
    onlyReraApproved,
    selectedAmenities,
  ]);

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-800 antialiased font-sans">
      {/* ─── LEVEL 1: TOP TICKER INFRASTRUCTURE ARCHITECTURE ─── */}
      <div className="bg-[#090F1C] text-slate-400 text-[11px] font-semibold tracking-wider py-2 px-6 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-2 text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>⚡ ESCROW PROTOCOL SECURITY SUBSYSTEM DEPLOYED v2.4</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[11px] font-medium text-slate-300">
          <span className="flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% RERA
            Registered
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Title-Deed
            Verified
          </span>
        </div>
      </div>

      {/* ─── LEVEL 3: DYNAMIC BREADCRUMB LOOKUP SEGMENT ─── */}
      <div className="bg-[#0C1526] text-white border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-3 text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-[11px] font-semibold tracking-wider uppercase text-blue-400">
                VERIFIED PROPERTIES
              </span>
              <h1 className="text-4xl font-black tracking-tight leading-tight">
                Verified Premium Inventory
              </h1>
              <p className="max-w-xl text-sm text-slate-400 leading-6">
                Discover verified premium properties with real-time inventory,
                RERA approved projects, transparent pricing and trusted
                developers.
              </p>
            </div>

            {/* Fixed max-w to match clean tailwind v4 layouts */}
            <div className="w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search project, locality, builder..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 rounded-2xl bg-[#131f35] border border-slate-700 text-white placeholder:text-slate-500 pl-12 pr-5 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* FILTER PANEL */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">
              Refine Search
            </h3>
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Clear
            </button>
          </div>

          <div className="space-y-2 text-left">
            <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 block">
              BHK Bedroom Config
            </label>
            <div className="grid grid-cols-4 gap-1 bg-slate-50 border border-slate-200/60 p-1 rounded-xl">
              {["All", "2 BHK", "3 BHK", "4 BHK"].map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => setSelectedBhk(bhk)}
                  className={`py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedBhk === bhk
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {bhk === "All" ? "Any" : bhk.split(" ")[0] + "B"}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-left">
            <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 block">
              Valuation Upper Ceiling
            </label>
            <input
              type="range"
              min="4000000"
              max="30000000"
              step="500000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-600 h-1 bg-slate-100 rounded cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-bold text-slate-600">
              <span>₹40 Lakh</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">
                {maxPrice >= 10000000
                  ? `₹${(maxPrice / 10000000).toFixed(2)} Cr`
                  : `₹${(maxPrice / 100000).toFixed(0)} Lakh`}
              </span>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-2 text-left">
            <div className="w-full flex justify-between items-center text-xs font-black uppercase tracking-wider text-slate-800">
              <button
                onClick={() => toggleSection("amenities")}
                className="flex-1 text-left cursor-pointer"
              >
                Amenities Matrix
              </button>
              <div className="flex items-center gap-1.5 text-blue-600 text-[11px]">
                {selectedAmenities.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAmenities([]);
                    }}
                    className="hover:underline text-[10px] font-bold tracking-wide mr-1 cursor-pointer"
                  >
                    RESET
                  </button>
                )}
                <button
                  onClick={() => toggleSection("amenities")}
                  className="cursor-pointer"
                >
                  {openSections.amenities ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {openSections.amenities && (
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {filterAmenitiesList
                    .slice(0, showAllAmenities ? filterAmenitiesList.length : 5)
                    .map((amenity) => {
                      const isSelected = selectedAmenities.includes(amenity);
                      return (
                        <button
                          key={amenity}
                          onClick={() => handleAmenityToggle(amenity)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1 cursor-pointer ${
                            isSelected
                              ? "bg-blue-50 border-blue-500 text-blue-600 font-bold"
                              : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          <span>{isSelected ? "✓" : "+"}</span> {amenity}
                        </button>
                      );
                    })}
                </div>

                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="text-xs text-blue-600 font-bold hover:underline block cursor-pointer"
                >
                  {showAllAmenities
                    ? "- Less Flags"
                    : `+ ${filterAmenitiesList.length - 5} More Parameters`}
                </button>
              </div>
            )}
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-3 text-left pt-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Properties with photos</span>
              <input
                type="checkbox"
                checked={onlyWithPhotos}
                onChange={() => setOnlyWithPhotos(!onlyWithPhotos)}
                className="w-4 h-4 accent-blue-600 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Properties with videos</span>
              <input
                type="checkbox"
                checked={onlyWithVideos}
                onChange={() => setOnlyWithVideos(!onlyWithVideos)}
                className="w-4 h-4 accent-blue-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN DECK: LISTING FEEDS STREAM */}
        <div className="lg:col-span-9 space-y-5 text-left">
          <div className="bg-white border border-slate-200 px-5 py-3.5 rounded-2xl flex items-center justify-between shadow-xs">
            <p className="text-xs font-medium text-slate-500">
              Showing{" "}
              <span className="text-slate-900 font-extrabold">
                {filteredFlats.length}
              </span>{" "}
              individual asset indices matching matrix.
            </p>
            <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg cursor-pointer ${viewMode === "grid" ? "bg-white text-blue-600 shadow-xs" : "text-slate-400"}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg cursor-pointer ${viewMode === "list" ? "bg-white text-blue-600 shadow-xs" : "text-slate-400"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {filteredFlats.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center space-y-4 shadow-xs">
              <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-black text-slate-800 uppercase tracking-tight">
                Zero Direct Index Matches
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                We found no active secondary market blueprints fitting that
                specific configuration pattern.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-slate-950 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Clear Parameters Array
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredFlats.map((flat) => {
                const isFav = favorites.includes(flat.id);
                return (
                  <div
                    key={flat.id}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    {/* Fixed aspect ratio classes for Tailwind CSS v4 support */}
                    <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={flat.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                        <span
                          className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-sm text-white ${
                            flat.tag === "Price Drop"
                              ? "bg-rose-500"
                              : flat.tag === "Exclusive"
                                ? "bg-amber-500"
                                : "bg-blue-600"
                          }`}
                        >
                          {flat.tag}
                        </span>
                        <button
                          onClick={() => toggleFavorite(flat.id)}
                          className={`p-2 rounded-xl border backdrop-blur-xs transition-colors cursor-pointer ${isFav ? "bg-rose-600 border-rose-600 text-white" : "bg-white/90 border-slate-200/40 text-slate-700"}`}
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${isFav ? "fill-white" : ""}`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                          <span>{flat.reraId}</span>
                          <span className="text-amber-500">
                            ⭐ {flat.rating}
                          </span>
                        </div>
                        <h3
                          onClick={() => setActivePropertyModal(flat)}
                          className="text-xs sm:text-sm font-black text-slate-900 tracking-tight line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors leading-snug"
                        >
                          {flat.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-semibold truncate flex items-center gap-0.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />{" "}
                          {flat.microLocation}, {flat.location}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px] font-extrabold text-slate-600 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                        <span>📐 {flat.area} sqft Carpet</span>
                        <span>🧭 {flat.facing}</span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <div>
                          <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">
                            Total Valuation
                          </span>
                          <span className="text-sm font-black text-slate-950 tracking-tight">
                            {flat.displayPrice}
                          </span>
                        </div>
                        <button
                          onClick={() => setActivePropertyModal(flat)}
                          className="bg-slate-950 hover:bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-colors shadow-xs cursor-pointer"
                        >
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFlats.map((flat) => (
                <div
                  key={flat.id}
                  className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col sm:flex-row gap-5 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="w-full sm:w-44 aspect-video sm:aspect-square bg-slate-100 rounded-xl overflow-hidden shrink-0 relative">
                    <img
                      src={flat.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] px-2 py-0.5 rounded font-black uppercase">
                      {flat.bhk}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-4 py-0.5">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start gap-4">
                        <h3
                          onClick={() => setActivePropertyModal(flat)}
                          className="text-sm sm:text-base font-black text-slate-900 tracking-tight hover:text-blue-600 cursor-pointer transition-colors leading-snug"
                        >
                          {flat.title}
                        </h3>
                        <span className="text-base font-black text-slate-950 tracking-tight shrink-0">
                          {flat.displayPrice}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />{" "}
                        {flat.microLocation}, {flat.location}
                      </p>
                      <p className="text-xs text-slate-600 line-clamp-2 pt-1 font-medium">
                        {flat.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
                      <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500">
                        <span className="flex items-center gap-1">
                          <Maximize className="w-3.5 h-3.5 text-slate-400" />{" "}
                          {flat.area} sqft
                        </span>
                        <span className="flex items-center gap-1">
                          <Compass className="w-3.5 h-3.5 text-slate-400" />{" "}
                          {flat.facing}
                        </span>
                        <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-wide border border-emerald-100">
                          {flat.possession}
                        </span>
                      </div>
                      <button
                        onClick={() => setActivePropertyModal(flat)}
                        className="bg-slate-950 hover:bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all cursor-pointer"
                      >
                        Configure Unit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* OVERLAY MODAL DRAWER */}
      {activePropertyModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-left relative space-y-4 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePropertyModal(null)}
              className="absolute top-4 right-4 p-1.5 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={activePropertyModal.image}
              alt=""
              className="w-full aspect-video object-cover rounded-2xl bg-slate-50 shadow-inner"
            />

            <div className="space-y-1">
              <span className="text-[9px] bg-blue-50 border border-blue-200 text-blue-600 px-2.5 py-0.5 rounded font-black uppercase tracking-wider inline-block">
                {activePropertyModal.bhk} SPEC
              </span>
              <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-slate-950">
                {activePropertyModal.title}
              </h2>
              <p className="text-xs text-slate-500 font-semibold">
                {activePropertyModal.microLocation},{" "}
                {activePropertyModal.location}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-slate-50 border border-slate-200/60 p-3.5 rounded-2xl text-xs font-bold text-slate-700">
              <div>
                Super Area:{" "}
                <span className="text-slate-950 font-black">
                  {activePropertyModal.area} sqft
                </span>
              </div>
              <div>
                Facing Grid:{" "}
                <span className="text-slate-950 font-black">
                  {activePropertyModal.facing}
                </span>
              </div>
              <div>
                Status Flag:{" "}
                <span className="text-emerald-600 font-black">
                  {activePropertyModal.possession}
                </span>
              </div>
              <div>
                Final Value:{" "}
                <span className="text-blue-600 font-black">
                  {activePropertyModal.displayPrice}
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 block">
                Structural Amenities
              </label>
              <div className="flex flex-wrap gap-1">
                {activePropertyModal.amenities.map((a, i) => (
                  <span
                    key={i}
                    className="bg-white border border-slate-200 text-slate-700 text-[10px] px-2.5 py-1 rounded-lg font-medium shadow-xs"
                  >
                    ✓ {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-4">
              <div>
                <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest">
                  {activePropertyModal.agent.type}
                </span>
                <span className="text-xs font-black text-slate-900">
                  {activePropertyModal.agent.name}
                </span>
              </div>
              <a
                href={`tel:${activePropertyModal.agent.phone}`}
                className="bg-slate-950 hover:bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Direct Call
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flats;
