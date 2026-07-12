import React, { useState } from "react";
import {
  Home,
  IndianRupee,
  MapPin,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  ShieldCheck,
  Coins,
  Sparkles,
  Building2,
} from "lucide-react";

// ─── 100% PREMIUM MODERN ARCHITECTURE IMAGES (WITH FINGERPRINT SIGNATURES) ───
const PREMIUM_URBAN_IMAGES = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
];

const LOCATIONS = [
  "Whitefield East Corridor, Bangalore",
  "Yelahanka Satellite Town, Bangalore",
  "Electronic City Phase 1 Ext, Bangalore",
  "Sarjapur Smart Hub, Bangalore",
  "Mysore Road Highway Node, Bangalore",
  "Kanakapura Green Belt Sector, Bangalore",
];

const TITLES = [
  "The Amber Signature Studio",
  "Urban Core Compact Suites",
  "The Element Smart Highrise",
  "Prestige Value Smart-Floors",
  "Zenith Pocket Premium Block",
  "Alpha Metro Vista Residency",
];

const SCHEMES = [
  "10:90 Payment Plan",
  "Zero Pre-EMI Plan",
  "₹49,999 Token Booking",
  "Free Covered Parking",
  "Zero Customization Cost",
];
const CONFIGURATIONS = [
  "2 BHK Smart Floor",
  "1 BHK Premium Suite",
  "2 BHK Urban Compact",
  "1.5 BHK Multi-Utility Space",
];

// --- MATRIX ENGINE GENERATING 100 INVENTORIES ---
const GENERATED_INVENTORIES = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const config = CONFIGURATIONS[id % CONFIGURATIONS.length];
  const priceLakhs = 32.5 + (id % 12) * 1.4;
  const downPayment = (priceLakhs * 0.1).toFixed(2);

  const baseImg = PREMIUM_URBAN_IMAGES[index % PREMIUM_URBAN_IMAGES.length];
  const uniqueImage = `${baseImg}&sig=${id + 999}`; // Custom high-value page fingerprint offset

  const titleIdx = (index * 5 + 2) % TITLES.length;
  const locIdx = (index * 3 + 4) % LOCATIONS.length;

  return {
    id,
    title: `${TITLES[titleIdx]} (Tower ${String.fromCharCode(65 + (id % 4))})`,
    location: LOCATIONS[locIdx],
    price: `₹${priceLakhs.toFixed(2)} Lakhs`,
    downpayment: `₹${downPayment} L`,
    config: config,
    scheme: SCHEMES[id % SCHEMES.length],
    image: uniqueImage,
    possession: id % 3 === 0 ? "Ready To Occupy" : `Mid ${2027 + (id % 2)}`,
    rera: `RERA-PRM-${20000 + id}`,
  };
});

function Under50Lakh() {
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

  const filteredAssets = GENERATED_INVENTORIES.filter((asset) => {
    const matchesConfig =
      selectedConfig === "ALL" || asset.config === selectedConfig;
    const matchesLocation =
      selectedLocation === "ALL" || asset.location === selectedLocation;
    return matchesConfig && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] font-sans antialiased text-[#1A1A1A]">
      {/* ─── CHAMPAGNE HIGH-END HERO GRID ─── */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b-2 border-[#1A1A1A]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#B45309]/10 border border-[#B45309]/30 text-[#B45309] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xs">
              <Sparkles className="w-3 h-3" /> Premium Capped Valuations Matrix
            </div>
            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-[#1A1A1A] uppercase leading-none">
              High-Value Spaces <br />
              <span className="font-serif italic font-normal text-[#B45309] lowercase tracking-normal">
                strictly under ₹50 Lakhs
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-xs text-stone-500 max-w-sm lg:ml-auto font-medium leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-[#B45309] pl-4 lg:pl-0 lg:pr-4">
              Carefully curated, non-inflationary high-liquidity apartments.
              Optimized micro-markets delivering top-tier amenities within
              strict budgetary boundaries.
            </p>
          </div>
        </div>
      </div>

      {/* ─── TECHNICAL CONTROLS LEDGER ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-stone-200 pb-5">
          <span className="text-xs font-serif italic text-stone-600 text-left">
            Displaying {filteredAssets.length} asset structures locked below the
            50L limit
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAF9F5] text-[10px] font-black tracking-widest uppercase px-6 py-3 rounded-xs hover:bg-[#B45309] transition-all cursor-pointer shadow-md self-start sm:self-auto"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Matrix
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-6 bg-[#F2ECE1] text-left grid grid-cols-1 md:grid-cols-2 gap-6 border border-stone-300 rounded-xs animate-in fade-in duration-200">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-600 uppercase tracking-widest block">
                Structural Layout
              </label>
              <div className="flex flex-wrap gap-1.5">
                {["ALL", ...CONFIGURATIONS].map((cfg) => (
                  <button
                    key={cfg}
                    onClick={() => setSelectedConfig(cfg)}
                    className={`px-3 py-2 text-xs font-black transition-all cursor-pointer rounded-xs border ${
                      selectedConfig === cfg
                        ? "bg-[#B45309] border-[#B45309] text-white"
                        : "bg-white border-stone-300 text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {cfg === "ALL" ? "All Layouts" : cfg}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-600 uppercase tracking-widest block">
                Investment Corridor Zone
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-white border border-stone-300 px-3 py-2.5 text-xs font-bold text-stone-800 focus:outline-none rounded-xs cursor-pointer"
              >
                <option value="ALL">All Micro-Market Zones</option>
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

      {/* ─── HORIZONTAL-ASPECT PREMIUM STRUCTURAL GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredAssets.length === 0 ? (
          <div className="bg-[#F2ECE1] p-20 text-center border-2 border-dashed border-stone-300 rounded-xs">
            <Building2 className="w-8 h-8 mx-auto text-stone-400 mb-2" />
            <p className="text-sm font-serif italic text-stone-600">
              No premium assets recorded matching these exact matrix bounds.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredAssets.map((asset) => {
              const isFav = favorites.includes(asset.id);
              const hasError = imageErrors[asset.id];

              return (
                <div
                  key={asset.id}
                  className="bg-white border border-stone-300 rounded-xs hover:border-[#B45309] transition-all duration-300 flex flex-col sm:flex-row items-stretch group text-left relative overflow-hidden shadow-xs hover:shadow-xl"
                >
                  {/* LEFT: IMAGE VIEWPORT APERTURE BLOCK */}
                  <div className="w-full sm:w-[220px] bg-stone-100 relative overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-stone-200">
                    {!hasError ? (
                      <img
                        src={asset.image}
                        alt={asset.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-[4/3] sm:aspect-auto"
                        loading="lazy"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [asset.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-200 flex items-center justify-center min-h-[180px]">
                        <Home className="w-6 h-6 text-stone-400" />
                      </div>
                    )}

                    {/* Floating Status Parameters */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[8px] font-black bg-[#1A1A1A] text-white px-2 py-1 uppercase tracking-widest shadow-sm">
                        {asset.config.split(" ")[0]}{" "}
                        {asset.config.split(" ")[1]}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleFavorite(asset.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full border shadow-xs transition-all cursor-pointer ${
                        isFav
                          ? "bg-[#B45309] border-[#B45309] text-white"
                          : "bg-white/95 border-stone-200 text-stone-700 hover:bg-white"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 ${isFav ? "fill-white" : ""}`}
                      />
                    </button>

                    <div className="absolute bottom-3 left-3 bg-[#FAF9F5]/90 px-2 py-0.5 rounded-xs border border-stone-300">
                      <span className="text-[8px] font-mono font-bold text-stone-600">
                        {asset.possession}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT: DATA ARCHITECTURE CONTENT LAYER */}
                  <div className="flex-1 p-6 flex flex-col justify-between space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-mono text-stone-400 font-bold tracking-tight flex items-center gap-0.5">
                          <ShieldCheck className="w-3 h-3 text-[#B45309]" />{" "}
                          {asset.rera}
                        </span>
                        <span className="text-[9px] font-black text-[#B45309] bg-[#B45309]/5 px-2 py-0.5 uppercase tracking-wider">
                          {asset.scheme}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#1A1A1A] tracking-tight group-hover:text-[#B45309] transition-colors line-clamp-1">
                        {asset.title}
                      </h3>

                      <p className="text-xs font-semibold text-stone-500 flex items-center gap-1 truncate">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />{" "}
                        {asset.location}
                      </p>
                    </div>

                    {/* Financial Ledger Module */}
                    <div className="grid grid-cols-2 gap-3 bg-[#FAF9F5] p-3 border border-stone-200 text-[11px] font-bold">
                      <div>
                        <span className="block text-[7px] uppercase tracking-widest text-stone-400 font-black mb-0.5">
                          Valuation Scale
                        </span>
                        <span className="text-[#1A1A1A] font-black text-sm tracking-tight">
                          {asset.price}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[7px] uppercase tracking-widest text-stone-400 font-black mb-0.5">
                          Min. Downpayment
                        </span>
                        <span className="text-stone-800 flex items-center gap-0.5 mt-0.5">
                          <Coins className="w-3.5 h-3.5 text-amber-600" />{" "}
                          {asset.downpayment}
                        </span>
                      </div>
                    </div>

                    {/* Action Hub */}
                    <div className="flex items-center justify-between gap-4 pt-1 border-t border-stone-100">
                      <span className="text-[9px] font-black text-emerald-700 bg-emerald-50 px-2 py-1 border border-emerald-100 uppercase tracking-wide">
                        Instant Bank Pre-Approved
                      </span>

                      <button className="inline-flex items-center gap-1 bg-[#1A1A1A] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2.5 hover:bg-[#B45309] transition-all cursor-pointer rounded-xs shadow-xs">
                        Secure Allotment{" "}
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

export default Under50Lakh;
