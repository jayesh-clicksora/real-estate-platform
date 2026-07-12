import { heroStatsData } from "./heroData";
import { Building2, UserCheck, Map, CalendarRange } from "lucide-react";

const icons = [Building2, UserCheck, Map, CalendarRange];

function HeroStats() {
  if (!heroStatsData || heroStatsData.length === 0) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 w-full">
        {heroStatsData.map((stat, index) => {
          const Icon = icons[index] || Building2;

          return (
            <div
              key={stat.id || index}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-5 md:p-6 text-left backdrop-blur-md transition-all duration-300 hover:bg-white/[0.06] hover:border-white/10"
            >
              {/* Internal Accent Glass Ambient Glow */}
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:bg-blue-500/10"></div>

              <div className="flex items-center gap-4">
                {/* Micro Icon Glass Envelope Wrapper */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500/20">
                  <Icon size={20} />
                </div>

                {/* Typography Values Node */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>

              {/* Advanced Bottom Interactive Lightbar Track */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroStats;
