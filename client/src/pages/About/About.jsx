import {
  Building2,
  Target,
  Award,
  ArrowUpRight,
  CheckCircle,
  Search,
  Mic,
  LocateFixed,
  ChevronDown,
} from "lucide-react";

export default function AboutPage() {
  // Core stats data array
  const metrics = [
    {
      value: "1,500+",
      label: "Premium Properties Listed",
      desc: "Curated high-tier real estate portfolios",
    },
    {
      value: "98%",
      label: "Client Satisfaction Rate",
      desc: "Seamless corporate and retail closures",
    },
    {
      value: "50+",
      label: "Major Indian Cities Covered",
      desc: "Expansive multi-state presence",
    },
    {
      value: "12+",
      label: "Years of Market Leadership",
      desc: "Decades of verified real estate trust",
    },
  ];

  // Elite Leadership Core
  const leaders = [
    {
      name: "Vikram Malhotra",
      role: "Chief Executive Officer",
      bg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ananya Deshmukh",
      role: "Head of Luxury Portfolios",
      bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rohan Khanna",
      role: "Director of Legal & Compliance",
      bg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E293B] font-sans antialiased text-left pt-16 md:pt-20">
      {/* ─── SINGLE INTEGRATED HERO BANNER WITH SEARCH BAR ─── */}
      <section className="relative bg-[#0A1128] pt-8 pb-24 lg:pb-36 px-4 text-center overflow-hidden flex flex-col items-center gap-12">
        {/* Abstract Background Spheres */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Dynamic Search Bar Embedded Directly at the Top of Hero Section */}
        <div className="w-full max-w-xl xl:max-w-2xl bg-white border border-slate-200 rounded-xl overflow-hidden h-11 text-slate-800 shadow-lg flex items-center relative z-10">
          <div className="relative flex items-center h-full px-4 bg-slate-50 border-r border-slate-100">
            <select className="bg-transparent text-slate-600 font-bold text-xs outline-none appearance-none pr-4 cursor-pointer">
              <option>Buy</option>
              <option>Rent</option>
              <option>Commercial</option>
            </select>
            <ChevronDown
              size={12}
              className="absolute right-2 text-slate-400 pointer-events-none"
            />
          </div>

          <input
            type="text"
            placeholder="Search Locality / Project / Landmark"
            className="flex-1 px-4 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
          />

          <button className="w-10 h-full flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
            <LocateFixed size={15} />
          </button>

          <button className="w-10 h-full flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
            <Mic size={15} />
          </button>

          <button className="w-12 h-full flex items-center justify-center bg-[#0073e1] hover:bg-blue-600 text-white transition-colors cursor-pointer shrink-0">
            <Search size={16} />
          </button>
        </div>

        {/* Copywriting Content Block */}
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            About EstatePro
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.15]">
            Building Dreams Into{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Reality
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            We help families and premium investors discover absolute grade-A
            property assets across India with end-to-end legal transparency,
            advisory expertise, and a world-class transaction ecosystem.
          </p>
        </div>
      </section>

      {/* ─── SECTION: WHO WE ARE (Asymmetric Layout) ─── */}
      <section className="max-w-[1200px] mx-auto py-24 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Editorial Styled Frame */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-blue-600/5 rounded-3xl translate-x-3 translate-y-3 -z-10" />
          <div className="bg-slate-200 rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl relative group border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Estate Structure"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            {/* Micro Badge Overlay */}
            <div className="absolute bottom-6 left-6 bg-[#0A1128]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white max-w-xs shadow-xl">
              <p className="text-xs font-bold tracking-wide uppercase text-blue-400">
                Headquarters
              </p>
              <p className="text-sm font-semibold mt-1">
                Premium Strategy Innovation Hub, Corporate Zone, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Copywriting Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-bold text-[#0073e1] tracking-widest uppercase">
            Who We Are
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#0A1128] tracking-tight leading-tight">
            India's Premium Real Estate Transaction & Consultancy Core
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
            EstatePro completely redesigns traditional real estate interactions.
            We serve as a direct bridge linking ultra-high-net-worth investors,
            institutional buyers, and everyday families to premium verified
            portfolios across residential, industrial, and commercial properties
            nationwide.
          </p>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
            By embedding rigorous parameter filters, structural analytics, and
            title inspection checks directly inside our pipeline, we ensure your
            capital investments are protected through comprehensive technical
            governance.
          </p>

          {/* Quick Checkpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "100% Pre-Screened Legal Titles",
              "Direct Institutional Transparency",
              "On-Demand Field Advisory Units",
              "Advanced Digital Escrow Workflows",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-slate-700 font-semibold text-xs"
              >
                <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION: DATA METRICS COUNTERS (Luxury Elevation) ─── */}
      <section className="bg-white border-y border-slate-200/60 py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAF9F6] border border-slate-100 rounded-2xl space-y-2 group hover:border-slate-300 hover:bg-white transition-all shadow-xs"
            >
              <span className="text-3xl md:text-4xl font-light text-[#0A1128] tracking-tight block group-hover:text-[#0073e1] transition-colors">
                {m.value}
              </span>
              <h4 className="text-sm font-semibold text-slate-800 tracking-tight">
                {m.label}
              </h4>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION: CORPORATE VALUES ─── */}
      <section className="max-w-[1200px] mx-auto py-24 px-4 space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#0073e1] tracking-widest uppercase">
            Our Governance
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0A1128] tracking-tight">
            The Principles Safeguarding Your Investments
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="text-blue-500" />,
              title: "Absolute Accuracy",
              text: "Every architectural detail, dimensional blueprint measurement, and pricing valuation benchmark goes through rigorous verification before publishing.",
            },
            {
              icon: <Building2 className="text-indigo-500" />,
              title: "Premium Selection",
              text: "We do not deal in mass unverified listings. Our primary corporate goal centers heavily on delivering exclusive, high-yield developments.",
            },
            {
              icon: <Award className="text-emerald-500" />,
              title: "Uncompromising Integrity",
              text: "Zero hidden micro-charges, zero arbitrary dealer pricing inflations. We handle interactions with absolute transparency.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/60 p-8 rounded-2xl space-y-4 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {val.icon}
              </div>
              <h4 className="text-lg font-semibold text-[#0A1128]">
                {val.title}
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                {val.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION: EXECUTIVE LEADERSHIP TEAM ─── */}
      <section className="bg-[#0A1128] text-white py-24 px-4 rounded-b-3xl md:rounded-b-[48px]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                Expert Minds
              </span>
              <h3 className="text-2xl md:text-4xl font-light tracking-tight">
                Executive <span className="font-semibold">Leadership Core</span>
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-sm font-normal leading-relaxed">
              Backed by decades of experience in real estate strategy, real
              estate law, and corporate financial advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((lead, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="h-64 bg-slate-800 overflow-hidden relative">
                  <img
                    src={lead.bg}
                    alt={lead.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 bg-[#0A1128] border-t border-white/5 flex justify-between items-center">
                  <div>
                    <h5 className="text-base font-semibold tracking-tight">
                      {lead.name}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 font-medium">
                      {lead.role}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-[#0073e1] group-hover:text-white transition-colors cursor-pointer">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
