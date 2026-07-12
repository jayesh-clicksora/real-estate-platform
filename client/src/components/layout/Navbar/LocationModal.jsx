import React, { useState } from "react";
import { Search, ChevronRight, ChevronDown } from "lucide-react";

export default function LocationModal({ onClose }) {
  const [activeModalTab, setActiveModalTab] = useState("Buy");
  const modalTabs = ["Buy", "Rent / Lease", "Plots/Land", "PG / Co-living"];

  return (
    <>
      {/* Invisible backdrop to close on outside click */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* 🔥 FIX: Changed left alignment to positive shift to bring it out line-by-line */}
      <div className="absolute top-full left-[40px] md:left-[80px] lg:left-[120px] xl:left-[160px] mt-4 bg-[#f3f3f3] rounded-2xl shadow-2xl border border-slate-200/80 w-[92vw] max-w-[760px] p-6 text-slate-700 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
        {/* Heading Statement */}
        <h3 className="text-xl font-bold text-slate-700 mb-5 tracking-tight">
          Explore real estate in...
        </h3>

        {/* Sub-Category Tab Headers */}
        <div className="flex space-x-6 border-b border-slate-200 mb-5 overflow-x-auto scrollbar-none">
          {modalTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveModalTab(tab)}
              className={`pb-2 text-xs font-semibold transition-all relative shrink-0 cursor-pointer ${
                activeModalTab === tab
                  ? "text-slate-800 font-bold"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeModalTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#3284ca] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Embedded Filter & Search Console */}
        <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-xl p-1.5 mb-5 shadow-xs">
          {/* Property Type Dropdown */}
          <div className="relative flex items-center px-2 border-r border-slate-200 cursor-pointer">
            <select className="bg-transparent text-xs font-semibold text-slate-600 pr-5 py-1 focus:outline-none cursor-pointer appearance-none">
              <option>Residential</option>
              <option>Commercial</option>
            </select>
            <ChevronDown
              size={12}
              className="text-slate-400 absolute right-1 pointer-events-none"
            />
          </div>

          {/* City Input Frame */}
          <div className="flex items-center flex-1 px-2 gap-2">
            <Search size={16} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="City Name"
              className="w-full bg-transparent text-xs focus:outline-none placeholder-slate-400 text-slate-800 font-medium"
            />
          </div>

          {/* Action Trigger Button */}
          <button
            type="button"
            className="bg-[#4ca0e0] hover:bg-blue-500 text-white font-bold text-xs px-5 py-1.5 rounded-lg transition shadow-xs cursor-pointer"
          >
            Explore
          </button>
        </div>

        {/* History Trace Section */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-semibold text-slate-400 block tracking-wide">
            Continue browsing where you left off...
          </span>
          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              className="bg-white hover:bg-slate-50 border border-slate-300 rounded-md px-3 py-1.5 text-[11px] font-medium text-slate-500 transition cursor-pointer shadow-2xs"
            >
              Buy in Indore
            </button>
            <button
              type="button"
              className="bg-white hover:bg-slate-50 border border-slate-300 rounded-md px-3 py-1.5 text-[11px] font-medium text-slate-500 transition cursor-pointer shadow-2xs"
            >
              Buy in Mumbai South
            </button>
          </div>
        </div>

        {/* Bottom Metadata & Footer Anchors */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-[11px] font-medium text-slate-400">
          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="hover:text-slate-600 transition cursor-pointer"
            >
              Dubai
            </button>
            <button
              type="button"
              className="hover:text-slate-600 transition cursor-pointer"
            >
              For NRI
            </button>
            <div className="text-slate-300">|</div>
            <div>
              <span className="text-slate-400 font-semibold block text-[11px]">
                International
              </span>
              <span className="text-[9px] text-slate-400/70 block -mt-0.5 font-normal">
                Powered by listglobally.com
              </span>
            </div>
          </div>

          <button
            type="button"
            className="text-slate-500 hover:text-slate-700 font-semibold flex items-center gap-0.5 transition cursor-pointer"
          >
            View top cities <ChevronRight size={12} className="mt-0.5" />
          </button>
        </div>
      </div>
    </>
  );
}
