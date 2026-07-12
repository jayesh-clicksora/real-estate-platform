import React, { useState } from "react";
import {
  Store,
  MapPin,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  ShoppingBag,
  Sparkles,
  Percent,
  TrendingUp,
  Building,
} from "lucide-react";

// ─── 100% AUTHENTIC NON-REPETITIVE HIGH-STREET RETAIL & SHOWROOM IMAGES ───
const RAW_RETAIL_STOCK = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8", // Premium Luxury Boutique
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5", // High-End Fashion Showroom
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a", // Upscale Retail Storefront
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc", // Concept Minimalist Shop
  "https://images.unsplash.com/photo-1601924994987-69e26d50dc26", // Modern Mall Glass Showroom
  "https://images.unsplash.com/photo-1511556532299-8f662fc26c06", // Designer Luxury Glass Front
  "https://images.unsplash.com/photo-1481437156560-3205f6a55735", // Premium Lifestyle Interior Shop
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36", // Architectural Design Showroom
  "https://images.unsplash.com/photo-1534723452862-4c874018d66d", // Premium Department Flagship
  "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7", // High-Street Night Retail Hub
  "https://images.unsplash.com/photo-1582037928867-67709cfd3928", // Modern Corner Retail Showroom
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d", // Elite Couture Store Front
];

const RETAIL_LOCATIONS = [
  "MG Road Prime Boulevard, Bangalore",
  "Indiranagar 100ft Road High-Street, Bangalore",
  "Jayanagar 4th Block Retail Hub, Bangalore",
  "Koramangala Sony World Junction, Bangalore",
  "UB City Luxury Arcade Enclave, Bangalore",
  "Outer Ring Road Commercial Corridor, Bangalore",
];

const RETAIL_TITLES = [
  "The Zenith Luxury Flagship",
  "Aura Couture Premium Atelier",
  "Vanguard Tech & Mobility Lounge",
  "Sovereign High-Street Corner Spot",
  "Pulse Multi-Brand Anchor Anchor",
  "Prism Glass-Facade Premium Galleria",
];

const MATRICES = [
  "Triple Height Ceiling (22ft)",
  "Double Sided Glass Facade",
  "Corner Property / Maximum Footfall",
  "Pre-Leased to Global Brand",
  "Zero Maintenance Premium Lot",
];

const FOOTFALLS = [
  "Ultra High (15K+ Daily)",
  "Premium Elite Footfall Spot",
  "High Density Commercial Hub",
  "Exclusive By-Invitation Footfall",
];

const CATEGORIES = [
  "Luxury Boutique Showroom",
  "High-Street Retail Shop",
  "Corner Flagship Store",
  "Anchor Commercial Space",
];

// --- COMMERCIAL ENGINE GENERATING 100 PREMIUM RETAIL SPACES ---
const GENERATED_SHOPS = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const priceCrores = 4.5 + (id % 12) * 2.8;
  const squareFeet = 1200 + (id % 8) * 650;
  const assuredReturn = 6.5 + (id % 4) * 0.5;

  // Non-repetitive signature based high-street image loader
  const baseImg = RAW_RETAIL_STOCK[index % RAW_RETAIL_STOCK.length];
  const uniqueImage = `${baseImg}?auto=format&fit=crop&w=800&q=80&sig=retail-showroom-${id}`;

  const titleIdx = (index * 4 + 3) % RETAIL_TITLES.length;
  const locIdx = (index * 2 + 5) % RETAIL_LOCATIONS.length;

  return {
    id,
    title: `${RETAIL_TITLES[titleIdx]} (Block ${String.fromCharCode(65 + (id % 4))})`,
    location: RETAIL_LOCATIONS[locIdx],
    price: `₹${priceCrores.toFixed(2)} Cr`,
    area: `${squareFeet.toLocaleString()} Sq.Ft. Carpet`,
    matrix: MATRICES[id % MATRICES.length],
    footfall: FOOTFALLS[id % FOOTFALLS.length],
    category: CATEGORIES[id % CATEGORIES.length],
    returnRate: `${assuredReturn.toFixed(1)}% ROI Assured`,
    image: uniqueImage,
    possession: id % 2 === 0 ? "Immediate Possession" : "Ready For Fit-outs",
  };
});

function Shops() {
  const [favorites, setFavorites] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  const filteredShops = GENERATED_SHOPS.filter((shop) => {
    const matchesLocation =
      selectedLocation === "ALL" || shop.location === selectedLocation;
    const matchesCategory =
      selectedCategory === "ALL" || shop.category === selectedCategory;
    return matchesLocation && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#090D10] font-sans antialiased text-[#E2E8F0]">
      {/* ─── PREMIUM NEON-INFUSED LUXURY HERO HEADER ─── */}
      <div className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-indigo-500/10">
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-60 h-60 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left relative z-10">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 border border-indigo-500/20 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Premium
              High-Street Index
            </span>
            <h1 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight uppercase leading-none">
              Shops & <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic font-normal tracking-wide font-serif lowercase">
                elite commercial showrooms
              </span>
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-medium leading-relaxed border-l-2 border-indigo-500 pl-4 py-1">
            Curated investment-grade retail layout aggregates, corner flagship
            stores, and high-footfall glass facades built for premium
            visibility.
          </p>
        </div>
      </div>

      {/* ─── CONTROL LEDGER / FILTERS ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-10 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800 pb-5">
          <span className="text-xs font-medium text-slate-400 text-left">
            Displaying {filteredShops.length} ultra-premium retail spots
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold tracking-wider uppercase px-5 py-3 hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer rounded-lg shadow-lg shadow-indigo-500/10 self-start sm:self-auto"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Adjust Filter
            Parameters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-6 bg-[#0F151A] text-left grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-800 rounded-xl shadow-2xl">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">
                Asset Architectural Classification
              </label>
              <div className="flex flex-wrap gap-2">
                {["ALL", ...CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-[11px] font-bold transition-all border cursor-pointer rounded-lg ${
                      selectedCategory === cat
                        ? "bg-indigo-500 border-indigo-500 text-white"
                        : "bg-transparent border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                    }`}
                  >
                    {cat === "ALL" ? "All Retail Formats" : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">
                Premium Retail Micro-Markets
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#090D10] border border-slate-800 px-3 py-2.5 text-xs font-bold text-slate-300 focus:outline-none focus:border-indigo-500 rounded-lg cursor-pointer"
              >
                <option value="ALL">All High-Street Boulevards</option>
                {RETAIL_LOCATIONS.map((loc, idx) => (
                  <option key={idx} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ─── MODERN HIGHS-STREET SHOWROOM GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {filteredShops.length === 0 ? (
          <div className="bg-[#0F151A] p-20 text-center border border-slate-800 rounded-xl">
            <Store className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-sm italic text-slate-500">
              No upscale showrooms matching these dynamic boundaries.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop) => {
              const isFav = favorites.includes(shop.id);
              const hasError = imageErrors[shop.id];

              return (
                <div
                  key={shop.id}
                  className="bg-[#0F151A] border border-slate-800/80 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/5"
                >
                  {/* IMAGE GRID SHEET */}
                  <div className="w-full h-56 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                    {!hasError ? (
                      <img
                        src={shop.image}
                        alt={shop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [shop.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0F151A] flex items-center justify-center">
                        <Store className="w-8 h-8 text-slate-700" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F151A] via-transparent to-black/30" />

                    {/* Left Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      <span className="text-[8px] font-black tracking-wider bg-black/60 backdrop-blur-md text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20 uppercase w-fit">
                        Asset #{1000 + shop.id}
                      </span>
                      <span className="text-[8px] font-black tracking-wider bg-emerald-500/20 backdrop-blur-md text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 uppercase w-fit flex items-center gap-0.5">
                        <Percent className="w-2 h-2" /> {shop.returnRate}
                      </span>
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(shop.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border shadow-md transition-all cursor-pointer ${
                        isFav
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 border-indigo-500 text-white"
                          : "bg-black/40 border-slate-700 text-slate-300 hover:bg-white hover:text-black"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 ${isFav ? "fill-current" : ""}`}
                      />
                    </button>

                    {/* Possession Bottom Badge */}
                    <div className="absolute bottom-3 left-4 bg-[#090D10]/80 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-800">
                      <span className="text-[9px] font-bold text-slate-300 flex items-center gap-1">
                        <Building className="w-3 h-3 text-indigo-400" />{" "}
                        {shop.possession}
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM DATA MATRIX */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2 text-left">
                      <span className="text-[9px] font-extrabold text-indigo-400 uppercase tracking-widest block">
                        {shop.category}
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {shop.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-600 shrink-0" />{" "}
                        <span className="truncate">{shop.location}</span>
                      </p>
                    </div>

                    {/* High-Street Infrastructure Stats */}
                    <div className="bg-[#090D10] border border-slate-800/60 p-3 rounded-xl space-y-2 text-[11px] text-slate-300 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-slate-500 font-semibold">
                          Structure:
                        </span>
                        <span className="font-medium text-slate-200">
                          {shop.matrix}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 border-t border-slate-800/60 pt-2">
                        <span className="text-slate-500 font-semibold">
                          Footfall Meter:
                        </span>
                        <span className="font-bold text-indigo-400 flex items-center gap-0.5">
                          <TrendingUp className="w-3 h-3" /> {shop.footfall}
                        </span>
                      </div>
                    </div>

                    {/* Valuation & CTA */}
                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-left">
                      <div>
                        <span className="block text-[8px] uppercase font-bold text-slate-500 tracking-wider">
                          Carpet Space & Outlay
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg font-extrabold text-white tracking-tight">
                            {shop.price}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium font-mono">
                            ({shop.area.split(" ")[0]} Sqft)
                          </span>
                        </div>
                      </div>

                      <button className="inline-flex items-center gap-1 bg-[#161F26] border border-slate-800 text-slate-200 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2.5 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer rounded-lg">
                        Enquire <ArrowUpRight className="w-3.5 h-3.5" />
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

export default Shops;
