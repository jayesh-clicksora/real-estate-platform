import { heroContentData } from "./heroData";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

function HeroContent() {
  const {
    badge = "Trusted by 12,000+ Happy Homeowners",
    heading = "Discover Extraordinary Luxury Living",
    description = "Experience a curated collection of luxury villas, penthouses, waterfront residences, and investment properties across the world's most desirable locations.",
    buttons = [],
  } = heroContentData || {};

  return (
    <div className="text-left text-white space-y-6 md:space-y-8">
      {/* Premium Micro Floating Badge */}
      <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 shadow-lg self-start">
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-slate-200">
          {badge}
        </span>
      </div>

      {/* Main Luxury Title Segment */}
      <div className="space-y-2">
        <p className="text-blue-400 font-bold uppercase tracking-[0.25em] text-xs">
          Premium Real Estate Platform
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.1]">
          {heading.split(" ")[0]} <br />
          <span className="font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
            {heading.split(" ")[1]}
          </span>
          <br />
          {heading.split(" ").slice(2).join(" ")}
        </h1>
      </div>

      {/* Structured Core Copy Description */}
      <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
        {description}
      </p>

      {/* Clean Global Feature Pills */}
      <div className="flex flex-wrap gap-2.5 pt-2">
        {[
          "Verified Listings",
          "Zero Brokerage",
          "Instant Site Visit",
          "Premium Support",
        ].map((pill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/5 px-3.5 py-2 text-xs font-medium text-slate-200 shadow-sm"
          >
            <CheckCircle2 size={13} className="text-emerald-400" />
            {pill}
          </div>
        ))}
      </div>

      {/* Data-Mapped Multi Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-4">
        {buttons.map((btn) => (
          <a
            key={btn.id}
            href={btn.path}
            className={`flex items-center gap-2 rounded-xl px-7 py-3.5 text-xs sm:text-sm tracking-wide font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
              btn.primary
                ? "bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl shadow-blue-600/20"
                : "border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10"
            }`}
          >
            {btn.text}
            {btn.primary && <ArrowRight size={14} />}
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeroContent;
