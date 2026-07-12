import { useState } from "react";
import {
  MapPin,
  Building2,
  CircleDollarSign,
  BedDouble,
  Search,
  ShieldCheck,
} from "lucide-react";

function HeroSearch() {
  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    budget: "",
    bedrooms: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-900/80 backdrop-blur-2xl p-6 md:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.4)] text-left w-full">
      {/* Top Header Information Segment */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 text-xs font-semibold text-blue-400">
          <ShieldCheck size={14} />
          Trusted Property Search
        </div>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-white">
          Find Your Perfect Home
        </h2>

        <p className="mt-1.5 text-xs md:text-sm text-slate-400 font-normal leading-relaxed">
          Search luxury villas, apartments and premium residences with advanced
          filters.
        </p>
      </div>

      {/* Main Interactive Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Option: Location */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            <MapPin size={13} className="text-blue-400" /> Location
          </label>
          <div className="relative">
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full text-xs font-medium text-slate-200 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 outline-none appearance-none cursor-pointer focus:border-blue-500 focus:bg-slate-950/50 transition-all"
            >
              <option value="" className="bg-slate-900 text-white">
                Choose Location
              </option>
              <option className="bg-slate-900 text-white">Mumbai</option>
              <option className="bg-slate-900 text-white">Delhi</option>
              <option className="bg-slate-900 text-white">Bangalore</option>
              <option className="bg-slate-900 text-white">Dubai</option>
              <option className="bg-slate-900 text-white">London</option>
            </select>
          </div>
        </div>

        {/* Input Option: Property Type */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            <Building2 size={13} className="text-blue-400" /> Property Type
          </label>
          <div className="relative">
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full text-xs font-medium text-slate-200 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 outline-none appearance-none cursor-pointer focus:border-blue-500 focus:bg-slate-950/50 transition-all"
            >
              <option value="" className="bg-slate-900 text-white">
                Choose Property
              </option>
              <option className="bg-slate-900 text-white">Luxury Villa</option>
              <option className="bg-slate-900 text-white">Penthouse</option>
              <option className="bg-slate-900 text-white">Apartment</option>
              <option className="bg-slate-900 text-white">Farm House</option>
            </select>
          </div>
        </div>

        {/* Input Option: Budget Range */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            <CircleDollarSign size={13} className="text-blue-400" /> Budget
          </label>
          <div className="relative">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full text-xs font-medium text-slate-200 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 outline-none appearance-none cursor-pointer focus:border-blue-500 focus:bg-slate-950/50 transition-all"
            >
              <option value="" className="bg-slate-900 text-white">
                Choose Budget
              </option>
              <option className="bg-slate-900 text-white">₹50L - ₹1Cr</option>
              <option className="bg-slate-900 text-white">₹1Cr - ₹3Cr</option>
              <option className="bg-slate-900 text-white">₹3Cr - ₹5Cr</option>
              <option className="bg-slate-900 text-white">₹5Cr+</option>
            </select>
          </div>
        </div>

        {/* Input Option: Configuration Bedrooms */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            <BedDouble size={13} className="text-blue-400" /> Bedrooms
          </label>
          <div className="relative">
            <select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full text-xs font-medium text-slate-200 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 outline-none appearance-none cursor-pointer focus:border-blue-500 focus:bg-slate-950/50 transition-all"
            >
              <option value="" className="bg-slate-900 text-white">
                Select Bedrooms
              </option>
              <option className="bg-slate-900 text-white">1 Bedroom</option>
              <option className="bg-slate-900 text-white">2 Bedrooms</option>
              <option className="bg-slate-900 text-white">3 Bedrooms</option>
              <option className="bg-slate-900 text-white">4 Bedrooms</option>
              <option className="bg-slate-900 text-white">5+ Bedrooms</option>
            </select>
          </div>
        </div>

        {/* Primary Operational Execution Button */}
        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
        >
          <Search size={15} />
          Search Luxury Homes
        </button>
      </form>

      {/* Bottom Structural Verification Meta Info */}
      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-medium tracking-wide">
        <span>* Direct Escrow Process</span>
        <span>100% RERA Verified Listings</span>
      </div>
    </div>
  );
}

export default HeroSearch;
