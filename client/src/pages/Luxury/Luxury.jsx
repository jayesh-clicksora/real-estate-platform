import React, { useState } from "react";
import {
  Shield,
  MapPin,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  Gem,
  Compass,
  Sparkles,
  Waves,
  Eye,
} from "lucide-react";

// ─── 100% ULTRA-LUXURY ARCHITECTURE IMAGES (WITH FINGERPRINT SIGNATURES) ───
const LUXURY_ESTATES_IMAGES = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
];

const LUXURY_LOCATIONS = [
  "Amrita Shergill Marg, New Delhi",
  "Malabar Hill Sovereign Enclave, Mumbai",
  "Lutyens Bungalow Zone, New Delhi",
  "Jubilee Hills Elite Ridge, Hyderabad",
  "Boat Club Road Estate, Chennai",
  "Sadashivanagar Elite Quadrant, Bangalore",
];

const LUXURY_TITLES = [
  "The Obsidian Crown Manor",
  "Aura Celeste Sky Penthouse",
  "The Platinum Sovereign Estate",
  "Elysian Fields Signature Villa",
  "The Luminary Horizon Mansion",
  "Zephyr Courtyard Private Residence",
];

const BESPOKE_AMENITIES = [
  "Private Olympic Heli-Pad",
  "Olympic Heated Infinity Pool",
  "Automated Bio-Metric Vault",
  "24/7 Elite Global Concierge",
  "12-Slot Underground Showcase Garage",
  "Private IMAX Cinematic Theater",
];

const LUXURY_CONFIGURATIONS = [
  "5 BHK Ultra-Mansion Estate",
  "6 BHK Duplex Sky-Penthouse",
  "Bespoke Regal Villa Layout",
  "4 BHK Signature Pavilion Suite",
];

// --- ADVANCED ELITE MATRIX GENERATING 100 ULTRA-PREMIUM ASSETS ---
const GENERATED_LUXURY_ASSETS = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const config = LUXURY_CONFIGURATIONS[id % LUXURY_CONFIGURATIONS.length];

  // High-End Premium Valuations starting from ₹14.5 Crores to ₹85 Crores max
  const priceCrores = 14.5 + (id % 15) * 4.6;
  const squareFeet = 6500 + (id % 10) * 1250;

  const baseImg = LUXURY_ESTATES_IMAGES[index % LUXURY_ESTATES_IMAGES.length];
  const uniqueImage = `${baseImg}&sig=${id + 1500}`; // Unique Luxury Key signature offset

  const titleIdx = (index * 7 + 1) % LUXURY_TITLES.length;
  const locIdx = (index * 4 + 3) % LUXURY_LOCATIONS.length;

  return {
    id,
    title: `${LUXURY_TITLES[titleIdx]} (Edition ${id % 4 === 0 ? "Gold" : "Signature"})`,
    location: LUXURY_LOCATIONS[locIdx],
    price: `₹${priceCrores.toFixed(1)} Cr`,
    area: `${squareFeet.toLocaleString()} Sq.Ft. Built`,
    config: config,
    amenity: BESPOKE_AMENITIES[id % BESPOKE_AMENITIES.length],
    image: uniqueImage,
    security: "Military Grade Encrypted Security",
    signatureId: `LUXE-REGAL-${8000 + id}`,
  };
});

function Luxury() {
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

  const filteredLuxury = GENERATED_LUXURY_ASSETS.filter((asset) => {
    const matchesConfig =
      selectedConfig === "ALL" || asset.config === selectedConfig;
    const matchesLocation =
      selectedLocation === "ALL" || asset.location === selectedLocation;
    return matchesConfig && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-[#0B0F12] font-sans antialiased text-[#E5E9EC]">
      {/* ─── ROYAL NOIR CINEMATIC HERO ZONE ─── */}
      <div className="pt-36 pb-24 px-6 max-w-7xl mx-auto border-b border-[#C5A880]/30">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] text-[9px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-xs">
              <Gem className="w-3 h-3 text-[#C5A880] animate-pulse" /> By
              Invitation Only Portfolio
            </div>
            <h1 className="text-5xl sm:text-8xl font-black tracking-tighter text-white uppercase leading-none">
              The Luxury <br />
              <span className="font-serif italic font-normal text-[#C5A880] lowercase tracking-normal">
                collection architectural marvels
              </span>
            </h1>
          </div>
          <div className="max-w-md lg:text-right border-t lg:border-t-0 lg:border-r border-[#C5A880]/40 pt-6 lg:pt-0 lg:pr-6">
            <p className="text-xs text-stone-400 font-medium leading-relaxed tracking-wide">
              An elite index of high-heritage residential estates, palatial
              villas, and high-altitude sky penthouses. Tailored explicitly for
              sovereign asset collectors.
            </p>
          </div>
        </div>
      </div>

      {/* ─── ELITE FILTER LEDGER CONTROL ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[#C5A880]/20 pb-6">
          <span className="text-xs font-serif italic text-[#C5A880]/80 text-left tracking-wide">
            Curating {filteredLuxury.length} ultra-premium global tier
            structures
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 bg-[#C5A880] text-[#0B0F12] text-[10px] font-black tracking-widest uppercase px-6 py-3 rounded-xs hover:bg-white transition-all cursor-pointer shadow-xl self-start sm:self-auto"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Adjust Parameters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-8 bg-[#13191D] text-left grid grid-cols-1 md:grid-cols-2 gap-8 border border-[#C5A880]/30 rounded-xs animate-in fade-in duration-200">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-[#C5A880] uppercase tracking-widest block">
                Dimension Specification
              </label>
              <div className="flex flex-wrap gap-2">
                {["ALL", ...LUXURY_CONFIGURATIONS].map((cfg) => (
                  <button
                    key={cfg}
                    onClick={() => setSelectedConfig(cfg)}
                    className={`px-4 py-2 text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer rounded-xs border ${
                      selectedConfig === cfg
                        ? "bg-[#C5A880] border-[#C5A880] text-[#0B0F12]"
                        : "bg-transparent border-stone-700 text-stone-300 hover:border-stone-500"
                    }`}
                  >
                    {cfg === "ALL"
                      ? "All Formats"
                      : cfg.split(" ")[0] + " " + cfg.split(" ")[1]}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-[#C5A880] uppercase tracking-widest block">
                Sovereign Sovereign Zones
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#0B0F12] border border-stone-700 px-4 py-3 text-xs font-bold text-stone-200 focus:border-[#C5A880] focus:outline-none rounded-xs cursor-pointer"
              >
                <option value="ALL">All Ultra-Premium Micro-Markets</option>
                {LUXURY_LOCATIONS.map((loc, idx) => (
                  <option key={idx} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ─── ALTERNATING CINEMATIC CANVASES GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {filteredLuxury.length === 0 ? (
          <div className="bg-[#13191D] p-24 text-center border-2 border-dashed border-stone-800 rounded-xs">
            <Compass className="w-10 h-10 mx-auto text-stone-600 mb-3 animate-spin" />
            <p className="text-sm font-serif italic text-stone-400">
              No estates found within these bespoke filter bounds.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredLuxury.map((asset, index) => {
              const isFav = favorites.includes(asset.id);
              const hasError = imageErrors[asset.id];

              return (
                <div
                  key={asset.id}
                  className="bg-[#11161A] border border-[#C5A880]/20 rounded-xs hover:border-[#C5A880] transition-all duration-500 flex flex-col lg:flex-row items-stretch group text-left relative overflow-hidden shadow-2xl"
                >
                  {/* IMMERSIVE LANDSCAPE IMAGE GATEWAY */}
                  <div className="w-full lg:w-[500px] xl:w-[560px] bg-stone-900 relative overflow-hidden shrink-0 min-h-[300px]">
                    {!hasError ? (
                      <img
                        src={asset.image}
                        alt={asset.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [asset.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-950 flex items-center justify-center">
                        <Waves className="w-8 h-8 text-stone-700" />
                      </div>
                    )}

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12] via-transparent to-black/40" />

                    {/* Floating Luxury Signatures */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="text-[8px] font-mono tracking-[0.2em] font-black bg-black/70 backdrop-blur-md text-[#C5A880] px-3 py-1 rounded-xs uppercase border border-[#C5A880]/30">
                        🔑 {asset.signatureId}
                      </span>
                      <button
                        onClick={() => toggleFavorite(asset.id)}
                        className={`p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer border ${
                          isFav
                            ? "bg-[#C5A880] border-[#C5A880] text-[#0B0F12]"
                            : "bg-black/40 border-white/20 text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        <Heart
                          className={`w-3 h-3 ${isFav ? "fill-current" : ""}`}
                        />
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-[#0B0F12]/80 backdrop-blur-sm px-3 py-1.5 rounded-xs border border-stone-800">
                      <Eye className="w-3 h-3 text-[#C5A880]" />
                      <span className="text-[9px] uppercase tracking-widest font-black text-stone-300">
                        Bespoke Verified Built
                      </span>
                    </div>
                  </div>

                  {/* HIGH-HERITAGE DETAILED SPECIFICATION SHEET */}
                  <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between space-y-6 relative">
                    {/* Decorative Background Large Roman Numerals for Authenticity */}
                    <div className="absolute right-6 top-4 text-8xl font-black text-stone-900/40 select-none pointer-events-none font-serif italic">
                      M{asset.id}
                    </div>

                    <div className="space-y-3 z-10">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-black bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] px-3 py-1 rounded-xs tracking-widest uppercase">
                          {asset.config}
                        </span>
                        <span className="text-[9px] font-mono text-stone-400 border border-stone-800 bg-stone-900/50 px-2 py-1 rounded-xs flex items-center gap-1">
                          <Shield className="w-3 h-3 text-[#C5A880]" /> Security
                          Level 5
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#C5A880] transition-colors leading-tight max-w-xl">
                        {asset.title}
                      </h3>

                      <p className="text-xs font-semibold text-stone-400 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />{" "}
                        {asset.location}
                      </p>
                    </div>

                    {/* Premium Infrastructure Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0B0F12] p-4 rounded-xs border border-stone-800 text-xs font-semibold z-10">
                      <div className="space-y-1">
                        <span className="block text-[8px] uppercase tracking-[0.15em] text-stone-500 font-black">
                          Signature Luxury Feature
                        </span>
                        <span className="text-stone-200 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />{" "}
                          {asset.amenity}
                        </span>
                      </div>
                      <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-stone-800 pt-2 sm:pt-0 sm:pl-4">
                        <span className="block text-[8px] uppercase tracking-[0.15em] text-stone-500 font-black">
                          Volumetric Footprint
                        </span>
                        <span className="text-stone-200">📐 {asset.area}</span>
                      </div>
                    </div>

                    {/* Elite Price Frame Ledger & Call To Action */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-800 z-10">
                      <div>
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-[#C5A880] font-black">
                          Acquisition Valuation
                        </span>
                        <span className="text-3xl font-black text-white tracking-tighter block mt-0.5">
                          {asset.price}
                        </span>
                      </div>

                      <button className="inline-flex items-center gap-2 bg-[#C5A880] text-[#0B0F12] text-[10px] font-black uppercase tracking-widest px-6 py-3.5 hover:bg-white hover:text-black transition-all cursor-pointer rounded-xs shadow-md">
                        Request Private Viewing{" "}
                        <ArrowUpRight className="w-4 h-4" />
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

export default Luxury;
