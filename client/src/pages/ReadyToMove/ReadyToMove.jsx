// import React, { useState } from "react";
// import {
//   Home,
//   Key,
//   MapPin,
//   Heart,
//   ArrowUpRight,
//   SlidersHorizontal,
//   Eye,
//   Flame,
//   Sparkles,
// } from "lucide-react";

import { useState } from "react";
import {
  Home,
  Key,
  MapPin,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

// ─── 100% WORKING LUXURY READY TO MOVE HOUSE IMAGES (PEXELS CDN) ───
const HOUSE_PRESETS = [
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const LOCATIONS = [
  "DLF Phase 5, Gurgaon",
  "HSR Layout Sector 3, Bangalore",
  "Jubilee Hills Enclave, Hyderabad",
  "Koregaon Park Ext, Pune",
  "Prithviraj Road Premium, New Delhi",
  "Bandra West Promenade, Mumbai",
];

const TITLES = [
  "The Obsidian Ultra-Villa",
  "Luminary Signature Estate",
  "Verdant Mansion & Penthouse",
  "The Sovereign Manor",
  "Elysian Smart Tech-Home",
  "Apex Heritage Duplex Residence",
];

const AMENITIES = [
  ["Private Pool", "Home Automation", "EV Charger"],
  ["Terrace Garden", "Modular Kitchen", "VRV AC"],
  ["Home Theatre", "Private Lift", "Italian Marble"],
  ["Concierge Service", "Heated Pool", "Solar Roof"],
];

const TAGS = [
  "IMMEDIATE POSSESSION",
  "OC RECEIVED",
  "ZERO GST EFFECT",
  "FULLY FURNISHED",
  "BRAND NEW MASTERPIECE",
];
const CONFIGURATIONS = [
  "3 BHK Residence",
  "4 BHK Ultra-Floors",
  "5 BHK Grand Estate",
  "4 BHK Sky Villa",
];

// --- MATRIX ENGINE GENERATING 100 PRE-CERTIFIED READY HOMES ---
const GENERATED_HOUSES = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const config = CONFIGURATIONS[id % CONFIGURATIONS.length];
  const basePrice = (3.5 + id * 0.15).toFixed(2); // Valuation Engine
  const areaSize = 2400 + id * 120;

  const imageIdx = (index * 7 + 2) % HOUSE_PRESETS.length;
  const titleIdx = (index * 4 + 1) % TITLES.length;
  const locIdx = (index * 9 + 3) % LOCATIONS.length;
  const amenIdx = index % AMENITIES.length;

  return {
    id,
    title: `${TITLES[titleIdx]} #${200 + id}`,
    location: LOCATIONS[locIdx],
    price: `₹${basePrice} Cr`,
    area: `${areaSize.toLocaleString()} sqft`,
    config: config,
    tag: TAGS[id % TAGS.length],
    image: HOUSE_PRESETS[imageIdx],
    amenities: AMENITIES[amenIdx],
    age: "0 Years (Brand New)",
  };
});

function ReadyToMove() {
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

  const filteredHouses = GENERATED_HOUSES.filter((house) => {
    const matchesConfig =
      selectedConfig === "ALL" || house.config === selectedConfig;
    const matchesLocation =
      selectedLocation === "ALL" || house.location === selectedLocation;
    return matchesConfig && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans antialiased overflow-x-hidden">
      {/* ─── NEW DESIGN: GLOWING STEALTH MIDNIGHT HERO ─── */}
      <div className="relative pt-36 pb-24 px-6 border-b border-slate-800/60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#090D16] to-[#090D16]">
        {/* Glow Effects */}
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mx-auto shadow-sm backdrop-blur-md animate-pulse">
            <Key className="w-3 h-3" /> Turnkey Move-In & Instant Possession
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-none">
            Ready To Move <br />
            <span className="text-emerald-400 font-serif italic font-normal lowercase">
              villas & spaces
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-medium leading-relaxed">
            Skip construction delays. Acquire pre-verified luxury assets
            featuring immediate physical possession, structural warranty, and
            finalized Occupancy Certificates (OC).
          </p>
        </div>
      </div>

      {/* ─── NEON GLOW CONTROL BAR ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-md px-6 py-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div className="text-left flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <p className="text-xs font-semibold text-slate-400">
              Showing{" "}
              <span className="text-emerald-400 font-extrabold">
                {filteredHouses.length}
              </span>{" "}
              physical turn-key estates
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-lg ${
              showFilters
                ? "bg-emerald-500 text-slate-950 shadow-emerald-500/20 font-black"
                : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Engine Filters
          </button>
        </div>

        {/* Cyber Interactive Panel */}
        {showFilters && (
          <div className="mt-4 p-6 bg-slate-900/90 border border-slate-800 rounded-2xl text-left space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Refine
                Live Inventories
              </h4>
              <button
                onClick={() => {
                  setSelectedConfig("ALL");
                  setSelectedLocation("ALL");
                }}
                className="text-[10px] text-emerald-400 font-bold hover:underline"
              >
                Clear Matrices
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
                  Layout Typography
                </label>
                <div className="flex flex-wrap gap-2">
                  {["ALL", ...CONFIGURATIONS].map((cfg) => (
                    <button
                      key={cfg}
                      onClick={() => setSelectedConfig(cfg)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        selectedConfig === cfg
                          ? "bg-emerald-500 border-emerald-500 text-slate-950"
                          : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {cfg === "ALL" ? "All Formats" : cfg}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
                  Metropolitan Quadrant
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="ALL">All Core Locations</option>
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

      {/* ─── TALL VERTICAL ASYMMETRICAL LUXURY CARD GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredHouses.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-16 text-center space-y-3">
            <span className="text-3xl">🔑</span>
            <h3 className="text-sm font-black text-slate-300">
              No Immediate Assets Ready
            </h3>
            <p className="text-xs text-slate-500">
              All spaces in this quadrant are currently occupied. Reset filters
              to trace available nodes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredHouses.map((house) => {
              const isFav = favorites.includes(house.id);
              const hasError = imageErrors[house.id];

              return (
                <div
                  key={house.id}
                  className="bg-[#0F1626] border border-slate-800/80 rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 flex flex-col group text-left shadow-lg relative"
                >
                  {/* Visual Premium Frame with High Aspect Ratio (Tall Look) */}
                  <div className="relative aspect-[4/5] w-full bg-slate-950 overflow-hidden">
                    {!hasError ? (
                      <img
                        src={house.image}
                        alt={house.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [house.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-4">
                        <Home className="w-8 h-8 text-slate-700" />
                      </div>
                    )}

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1626] via-transparent to-transparent opacity-80" />

                    {/* Upper Dynamic HUD Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                      <span className="text-[9px] font-black text-emerald-400 bg-slate-950/90 border border-emerald-500/30 px-3 py-1 rounded-full tracking-wider shadow-md backdrop-blur-md">
                        🔥 {house.tag}
                      </span>
                      <button
                        onClick={() => toggleFavorite(house.id)}
                        className={`p-2.5 rounded-full backdrop-blur-md border shadow-md transition-all cursor-pointer ${
                          isFav
                            ? "bg-emerald-500 border-emerald-500 text-slate-950"
                            : "bg-slate-900/80 border-slate-700 text-slate-200 hover:bg-slate-800"
                        }`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${isFav ? "fill-current" : ""}`}
                        />
                      </button>
                    </div>

                    {/* Lower HUD Overlay inside Image */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2">
                      <span className="text-[9px] font-bold tracking-widest text-slate-300 bg-emerald-500/20 border border-emerald-500/20 px-2 py-0.5 rounded-md backdrop-blur-xs">
                        {house.config}
                      </span>
                      <h3 className="text-xl font-black text-white tracking-tight drop-shadow-md line-clamp-1">
                        {house.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-300 flex items-center gap-0.5 drop-shadow-xs truncate">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />{" "}
                        {house.location}
                      </p>
                    </div>
                  </div>

                  {/* Operational Data Content Below */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between bg-[#0F1626]">
                    {/* Specifications Cluster */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-400">
                      <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                        <span className="block text-[8px] text-slate-500 uppercase font-black">
                          Super Area
                        </span>
                        <span className="text-slate-200 font-extrabold">
                          📐 {house.area}
                        </span>
                      </div>
                      <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                        <span className="block text-[8px] text-slate-500 uppercase font-black">
                          Structure Age
                        </span>
                        <span className="text-slate-200 font-extrabold">
                          ✨ {house.age}
                        </span>
                      </div>
                    </div>

                    {/* Luxury Amenities Loop */}
                    <div className="flex flex-wrap gap-1.5">
                      {house.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800"
                        >
                          ✦ {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Action Execution Hub */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                      <div>
                        <span className="block text-[8px] uppercase font-black tracking-widest text-slate-500">
                          Immediate Value
                        </span>
                        <span className="text-lg font-black text-emerald-400 tracking-tight">
                          {house.price}
                        </span>
                      </div>

                      <button className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-emerald-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-3 rounded-xl transition-all shadow-md group cursor-pointer">
                        Book Private Tour{" "}
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

export default ReadyToMove;
