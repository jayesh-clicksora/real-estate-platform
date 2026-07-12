import React, { useState } from "react";
import {
  MapPin,
  ShieldCheck,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
} from "lucide-react";

// ─── 100% WORKING ROCK-SOLID PREMIUM REAL ESTATE IMAGES (PEXELS CDN) ───
const LUXURY_PRESETS = [
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/534154/pexels-photo-534154.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const LOCATIONS = [
  "Sadahalli, Near Airport Zone, Bangalore",
  "Gunjur, Near Sarjapur Node, Bangalore",
  "Devenahalli Orchid Enclave, Bangalore",
  "Whitefield Palm Meadows, Bangalore",
  "HSR Layout Sector 3, Bangalore",
  "Indiranagar Defence Colony, Bangalore",
  "Dollar's Colony, JP Nagar, Bangalore",
  "Koramangala 4th Block, Bangalore",
  "Hebbal Lakefront Pavilions, Bangalore",
];

const TITLES = [
  "The Grand Sanctuary Residencia",
  "Elysian Woods Independent Mansion",
  "Zen Vista Signature Villa Blueprint",
  "Marbella Luxury Sovereign Crest",
  "The Sovereign Pavilion Manor",
  "Opulent Skydome Villa Estates",
  "The Obsidian Glass Pavilion",
  "Valhalla Heritage Stone Manor",
  "Luminary Horizon Luxury Villa",
];

const TAGS = [
  "EXCLUSIVE EXTRA",
  "LIMITED EDITION",
  "READY TO MOVE",
  "PRICE DROP",
  "HOT DEAL",
];
const FACINGS = [
  "East-Facing Open",
  "North-East Vastu",
  "West-Facing Open",
  "North-Facing Premium",
];

// --- MATRIX ENGINE FOR 100 UNIQUE NODES ---
const GENERATED_VILLAS = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const bhkNum = (id % 3) + 3;
  const basePrice = (5.2 + id * 0.12).toFixed(2);
  const squareFeet = 3400 + id * 35;

  const imageIdx = (index * 7 + 3) % LUXURY_PRESETS.length;
  const titleIdx = (index * 4 + 1) % TITLES.length;
  const locIdx = (index * 3 + 5) % LOCATIONS.length;

  return {
    id,
    title: `${TITLES[titleIdx]} (Unit #${3000 + id})`,
    location: LOCATIONS[locIdx],
    price: `₹${basePrice} Cr`,
    area: `${squareFeet.toLocaleString()} sqft`,
    facing: FACINGS[id % FACINGS.length],
    bhk: `${bhkNum} BHK Ultra`,
    tag: TAGS[id % TAGS.length],
    image: LUXURY_PRESETS[imageIdx],
  };
});

function Villas() {
  const [favorites, setFavorites] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* ─── HERO BANNER ─── */}
      <div className="bg-[#090F1C] text-white pt-24 pb-20 px-6 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto text-left space-y-3 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            💎 Signature Estates Array
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Villas & Independent Houses
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-medium">
            Browse premium luxury villas and architecturally supreme independent
            blueprints optimized for high-end micro-market ecosystems.
          </p>
        </div>
      </div>

      {/* ─── DYNAMIC STATUS BAR ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-white border border-slate-200/80 px-5 py-3.5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <p className="text-xs font-semibold text-slate-500">
              Showing{" "}
              <span className="text-slate-900 font-extrabold">
                {GENERATED_VILLAS.length}
              </span>{" "}
              individual premier villa nodes
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-slate-950 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors shadow-2xs">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Refine Architecture
            Matrix
          </button>
        </div>
      </div>

      {/* ─── MATRIX GRID DECK ─── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {GENERATED_VILLAS.map((villa) => {
            const isFav = favorites.includes(villa.id);
            const hasError = imageErrors[villa.id];

            return (
              <div
                key={villa.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left"
              >
                {/* Visual Image Container with 100% Fallback Protection */}
                <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                  {!hasError ? (
                    <img
                      src={villa.image}
                      alt={villa.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                      onError={() => handleImageError(villa.id)}
                    />
                  ) : (
                    /* Fallback Premium UI Frame in case CDN acts up */
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-[40px]">🏡</span>
                      <p className="text-[10px] font-bold text-slate-400 mt-2 tracking-wider uppercase">
                        Luxury Estate Node
                      </p>
                    </div>
                  )}

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="text-[9px] font-black text-white bg-slate-950/95 px-2.5 py-1 rounded-md tracking-wider border border-white/10 shadow-sm">
                      {villa.tag}
                    </span>
                    <button
                      onClick={() => toggleFavorite(villa.id)}
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
                    <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> VERIFIED BLUEPRINT
                    </span>
                  </div>
                </div>

                {/* Content Segment */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">
                      {villa.bhk} Configuration
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {villa.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 flex items-center gap-0.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />{" "}
                      {villa.location}
                    </p>
                  </div>

                  {/* Tech Specs */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-extrabold text-slate-600 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                    <span className="flex items-center gap-1">
                      📐 {villa.area} Area
                    </span>
                    <span className="flex items-center gap-1">
                      🧭 {villa.facing}
                    </span>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">
                        Investment Bracket
                      </span>
                      <span className="text-base font-black text-slate-950 tracking-tight">
                        {villa.price}
                      </span>
                    </div>

                    <button className="inline-flex items-center gap-1 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-blue-600 transition-colors shadow-2xs cursor-pointer">
                      View Unit <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Villas;
