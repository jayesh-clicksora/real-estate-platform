import React, { useState } from "react";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Star,
  Calculator,
  FileText,
  BadgeIndianRupee,
  MapPin,
  TrendingUp,
  Search,
  Mic,
  LocateFixed,
} from "lucide-react";

// ==========================================
// 1. ALL MOCK DATA IN ONE PLACE
// ==========================================
const exploreOptionsData = [
  {
    id: 1,
    title: "Buying a home",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
    isNew: false,
  },
  {
    id: 2,
    title: "Renting a home",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
    isNew: false,
  },
  {
    id: 3,
    title: "Invest in Real Estate",
    image:
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=500&q=80",
    isNew: true,
  },
  {
    id: 4,
    title: "Sell/Rent your property",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
    isNew: false,
  },
  {
    id: 5,
    title: "Plots/Land",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
    isNew: false,
  },
  {
    id: 6,
    title: "Explore Insights",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
    isNew: true,
  },
];

const articleData = {
  News: [
    {
      title: "Noida Sports City projects update and delay clearance...",
      date: "Jul 08, 2026",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=120&q=80",
    },
    {
      title: "GRAP Stage 1 imposed across Delhi-NCR with strict rules...",
      date: "May 21, 2026",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=120&q=80",
    },
    {
      title: "Land acquisitions to begin for New Noida residential hub...",
      date: "May 22, 2026",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=120&q=80",
    },
    {
      title: "Bhoo scheme for digital property records launched...",
      date: "May 15, 2026",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=120&q=80",
    },
  ],
  "Tax & Legal": [
    {
      title: "Understanding RERA tax implementations on residential plots",
      date: "Jan 12, 2026",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&q=80",
    },
  ],
  "Help Guides": [
    {
      title: "Step-by-step checklist for smooth property registry process",
      date: "Feb 10, 2026",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=120&q=80",
    },
  ],
  Investment: [
    {
      title: "Top 5 fast-growing tech corridors for massive real estate growth",
      date: "Mar 05, 2026",
      img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=120&q=80",
    },
  ],
};

const dataLaunches = [
  {
    id: 1,
    tag: "NEW ARRIVAL",
    tagColor: "bg-amber-500",
    name: "Leverage Green Heights",
    loc: "Wardha Road, Nagpur",
    price: "₹42 - 58.9 Lacs",
    config: "2, 3 BHK Apartment",
    rera: true,
    trend: "+8.7% Last 3 Months",
  },
  {
    id: 2,
    tag: "NEW LAUNCH",
    tagColor: "bg-orange-500",
    name: "Fugen Royal Millenia",
    loc: "Vuyyuru, Vijayawada",
    price: "₹20.04 - 48.00 Lacs",
    config: "Residential Land / Plots",
    rera: false,
    trend: "+22.7% Last Year",
  },
  {
    id: 3,
    tag: "NEW ARRIVAL",
    tagColor: "bg-amber-500",
    name: "Maruti Akrida",
    loc: "Sarjapur, Bangalore",
    price: "₹70.93 L - 1.44 Cr",
    config: "2, 3 BHK Luxury Builder Floors",
    rera: true,
    trend: "+9.2% Trend Spike",
  },
];

const handpickedItems = [
  {
    id: 1,
    title: "Shaligram Rudraksh Kingston",
    desc: "3, 4 BHK Luxury Apartment, Bawadia Kalan, Bhopal",
    price: "₹ 2.00 - 3.10 Crore",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Nishija Akshita Eastern Meadows",
    desc: "Premium Commercial Land, Ghatkesar, Hyderabad",
    price: "₹ 19.54 - 34.25 Lacs",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Paras Emperor Grand Tower",
    desc: "4, 5 BHK Premium Duplex Villa, Arera Colony, Bhopal",
    price: "₹ 2.37 - 5.50 Crore",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80",
  },
];

const budgetCategories = [
  {
    range: "Under ₹ 30 Lacs",
    subtitle: "Affordable housing options",
    properties: "12,400+ Active Listings",
  },
  {
    range: "₹ 30 - 60 Lacs",
    subtitle: "Mid-segment premium flats",
    properties: "24,800+ Active Listings",
  },
  {
    range: "₹ 60 - 90 Lacs",
    subtitle: "Spacious family apartments",
    properties: "18,100+ Active Listings",
  },
  {
    range: "₹ 90 L - 1.5 Cr",
    subtitle: "Elite builders & urban living",
    properties: "15,200+ Active Listings",
  },
  {
    range: "₹ 1.5 - 3.0 Cr",
    subtitle: "Premium duplex & penthouses",
    properties: "9,600+ Active Listings",
  },
  {
    range: "Above ₹ 3.0 Cr",
    subtitle: "Ultra-luxury mansions & villas",
    properties: "4,300+ Active Listings",
  },
];

const activeCities = [
  {
    name: "Delhi NCR",
    growth: "+12.4%",
    options: "45,000+ Props",
    active: true,
  },
  {
    name: "Mumbai Hub",
    growth: "+18.2%",
    options: "62,000+ Props",
    active: false,
  },
  {
    name: "Bangalore",
    growth: "+14.7%",
    options: "38,000+ Props",
    active: false,
  },
  {
    name: "Hyderabad",
    growth: "+21.3%",
    options: "29,000+ Props",
    active: true,
  },
  {
    name: "Pune Metro",
    growth: "+9.8%",
    options: "22,000+ Props",
    active: false,
  },
  {
    name: "Chennai",
    growth: "+11.2%",
    options: "17,000+ Props",
    active: false,
  },
];

// ==========================================
// 2. MAIN CORE INTEGRATION EXPORT
// ==========================================
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("News");
  const [searchTab, setSearchTab] = useState("Buy");

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-left selection:bg-blue-600 selection:text-white">
      {/* 🌟 NEW ADDITION: 99ACRES STYLE HERO SEARCH BANNER (UPER ADD KIYA) */}
      <div className="relative h-[440px] md:h-[480px] w-full flex flex-col justify-center items-center px-4 overflow-hidden select-none bg-slate-900">
        {/* Background Image Overlay with Dark Premium Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
            alt="Hero Premium Real Estate Backdrop"
            className="w-full h-full object-cover opacity-45 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        {/* Hero Search Content Console */}
        <div className="relative z-10 w-full max-w-4xl text-center space-y-6 mt-16">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            Welcome Back! Discover Your Perfect Space
          </h1>

          {/* Mini Tab Switcher */}
          <div className="inline-flex bg-black/40 backdrop-blur-md p-1 rounded-xl border border-white/10 gap-1">
            {["Buy", "Rent", "Commercial", "Plots"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSearchTab(tab)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  searchTab === tab
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Giant Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/40 p-2 flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 flex-1 w-full px-3 py-1">
              <Search className="text-slate-400 shrink-0" size={18} />
              <input
                type="text"
                placeholder="Enter City, Locality, Project or Landmark to search..."
                className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
              />
              <button className="text-slate-400 hover:text-blue-600 transition cursor-pointer p-1">
                <LocateFixed size={18} />
              </button>
              <button className="text-slate-400 hover:text-blue-600 transition cursor-pointer p-1 border-r border-slate-100 pr-2">
                <Mic size={18} />
              </button>
            </div>

            <button className="w-full md:w-auto bg-[#0073e1] hover:bg-blue-600 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-lg transition-all cursor-pointer tracking-wide flex items-center justify-center gap-2">
              Search Properties
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: REAL ESTATE OPTIONS (NICHE SHIFT KIYA WITH EXTRA SPACING) */}
      <section className="bg-white py-14 border-b border-slate-100 shadow-xs relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm font-black tracking-[0.18em] uppercase text-slate-400">
              Get Started with Exploring Real Estate Options
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
            {exploreOptionsData.map((item) => (
              <div
                key={item.id}
                className="group min-w-[190px] sm:min-w-[220px] lg:min-w-0 flex-1 snap-start flex flex-col cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-50 aspect-[4/3] w-full border border-slate-200/60 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.isNew && (
                    <div className="absolute top-3 left-3 bg-rose-600 text-[10px] font-black tracking-widest text-white uppercase px-2 py-0.5 rounded shadow-sm">
                      New
                    </div>
                  )}
                </div>
                <h3 className="mt-3.5 text-base sm:text-lg font-bold text-slate-800 tracking-tight transition-colors group-hover:text-blue-600">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAL CORE MAIN HEADLINE */}
      <div className="text-center py-16 px-4">
        <p className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-widest">
          All Property Needs - One Portal
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#091e42] mt-3 leading-[1.15] tracking-tight">
          Find Better Places to Live, Work <br className="hidden sm:block" />{" "}
          and Wonder...
        </h2>
      </div>

      {/* SECTION 2: BUY HERO SUITE & TABS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-white rounded-[32px] p-8 shadow-sm border border-slate-200/60">
          <div className="md:col-span-6 overflow-hidden rounded-2xl aspect-[16/10] shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Living"
              className="w-full h-full object-cover transform hover:scale-102 transition duration-500"
            />
          </div>
          <div className="md:col-span-6 space-y-5 pl-0 md:pl-4">
            <span className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest">
              Buy A Home
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#091e42] leading-tight tracking-tight">
              Find, Buy & Own Your <br />
              Dream Home
            </h3>
            <p className="text-base text-slate-500 max-w-md leading-relaxed">
              Explore from verified premium Apartments, independent land, modern
              builder floors, luxury villas and more.
            </p>
            <button className="bg-[#0078db] hover:bg-[#0062b3] text-white text-base font-extrabold px-8 py-4 rounded-xl transition cursor-pointer shadow-md shadow-blue-500/10">
              Explore Buying
            </button>
          </div>
        </div>

        {/* Dynamic News/Articles Tabber Box */}
        <div className="bg-white rounded-[32px] p-6 md:p-10 border border-slate-200/60 shadow-sm max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-100 pb-5">
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#091e42] tracking-tight">
                Top articles on home buying
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Read from expert Beginners check-list to pro-level insights
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(articleData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl transition cursor-pointer ${
                    activeTab === tab
                      ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600 shadow-xs"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {articleData[activeTab]?.map((art, idx) => (
              <div
                key={idx}
                className="flex gap-5 items-center group cursor-pointer"
              >
                <img
                  src={art.img}
                  alt="Thumb"
                  className="w-20 h-16 object-cover rounded-xl bg-slate-100 shrink-0 shadow-2xs"
                />
                <div className="space-y-1">
                  <h5 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug">
                    {art.title}
                  </h5>
                  <p className="text-xs text-slate-400 font-medium">
                    {art.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-5 border-t border-slate-100 flex justify-end">
            <a
              href="#"
              className="text-sm font-black text-slate-600 hover:text-blue-600 inline-flex items-center gap-1.5 transition"
            >
              Read realty news, guides & articles <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: NEWLY LAUNCHED PROJECTS SLIDER */}
      <section className="bg-gradient-to-b from-[#eef7ff] to-white border-y border-blue-100/50 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <div>
              <h3 className="text-3xl font-black text-[#091e42] tracking-tight flex items-center gap-2.5">
                <span className="text-2xl">🏢</span> Newly launched projects
              </h3>
              <p className="text-sm font-bold text-slate-500 mt-1 pl-1">
                Premium residential options available at zero brokerage fee
              </p>
            </div>
            <span className="text-sm font-black text-blue-600 cursor-pointer hover:underline inline-flex items-center gap-0.5">
              Explore Limited Launches <ArrowRight size={15} />
            </span>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none">
            {dataLaunches.map((item) => (
              <div
                key={item.id}
                className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs relative flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  <span
                    className={`absolute top-4 left-4 text-[10px] font-black tracking-widest text-white px-2.5 py-0.5 rounded shadow-sm ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                  <div className="flex items-start gap-4 mt-5">
                    <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden shrink-0 border border-slate-200/60">
                      <img
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=150&q=80"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-lg font-black text-slate-800 leading-tight tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-400">
                        {item.loc}
                      </p>
                      {item.rera && (
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-black bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-md mt-2">
                          <ShieldCheck size={11} /> RERA APPROVED
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 border-t border-dashed border-slate-100 pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-xl font-black text-slate-900 tracking-tight">
                        {item.price}
                      </p>
                      <p className="text-xs font-bold text-slate-400 mt-0.5">
                        {item.config}
                      </p>
                    </div>
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-xl">
                      {item.trend}
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold tracking-tight">
                    @zero brokerage
                  </span>
                  <button className="bg-[#0078db] hover:bg-[#0062b3] text-sm font-extrabold text-white px-5 py-2.5 rounded-xl transition cursor-pointer">
                    View Phone Number
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HANDPICKED RESIDENTIAL GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="mb-10">
          <h3 className="text-3xl font-black text-[#091e42] tracking-tight">
            Handpicked Residential Projects
          </h3>
          <p className="text-sm font-bold text-slate-400 mt-1">
            Top luxury & budget-friendly featured residential properties across
            India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {handpickedItems.map((proj) => (
            <div key={proj.id} className="group flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden relative border border-slate-200/50 shadow-xs">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-purple-600 text-[10px] font-black text-white px-2.5 py-0.5 rounded shadow-sm tracking-wider uppercase">
                  Featured Project
                </span>
                <button className="absolute top-4 right-4 bg-black/40 backdrop-blur-xs text-white p-2 rounded-full cursor-pointer hover:bg-black/60 transition">
                  <Star size={14} fill="white" stroke="transparent" />
                </button>
              </div>

              <div className="w-[92%] -mt-12 bg-white rounded-2xl p-5 border border-slate-200/60 shadow-md relative z-10 space-y-2 transition-all group-hover:border-blue-200">
                <h4 className="text-base sm:text-17px font-black text-[#091e42] tracking-tight line-clamp-1 transition-colors group-hover:text-blue-600">
                  {proj.title}
                </h4>
                <p className="text-xs font-semibold text-slate-400 line-clamp-1 leading-none">
                  {proj.desc}
                </p>
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-black text-blue-500 uppercase tracking-wider">
                    Market Price
                  </span>
                  <p className="text-base font-black text-slate-900 tracking-tight">
                    {proj.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: PREMIUM MINT SELL BANNER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50/20 to-white rounded-[40px] p-8 md:p-12 border border-emerald-100/60 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-emerald-100/30 rounded-3xl overflow-hidden shadow-2xs border border-emerald-100/50">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
                alt="Executive"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-5">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#091e42] tracking-tight leading-[1.15]">
              Sell or rent faster at the <br className="hidden sm:block" />
              <span className="text-emerald-600">perfect market price!</span>
            </h3>
            <p className="text-base md:text-lg font-medium text-slate-500 max-w-xl leading-relaxed">
              List your residential/commercial property now and interact
              directly with premium verified buyers instantly.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button className="bg-[#0078db] hover:bg-[#0062b3] text-base font-black text-white px-8 py-4 rounded-xl cursor-pointer shadow-md shadow-blue-500/10 transition">
                Post Property, It's FREE
              </button>
              <a
                href="#"
                className="text-sm font-black text-slate-700 hover:text-emerald-600 inline-flex items-center gap-1 py-2 transition"
              >
                Post via{" "}
                <span className="text-emerald-500 font-black">
                  WhatsApp Business
                </span>{" "}
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PREMIUM BUDGET SEGMENTATION CARDS */}
      <section className="bg-slate-900 text-white py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
              Targeted Discovery
            </span>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
              Find Properties in Your Budget
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Filter premium residential choices based on custom pocket-size
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetCategories.map((budget, index) => (
              <div
                key={index}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 group cursor-pointer flex justify-between items-center"
              >
                <div>
                  <h4 className="text-xl font-black tracking-tight group-hover:text-blue-400 transition">
                    {budget.range}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {budget.subtitle}
                  </p>
                  <span className="inline-block text-[10px] bg-slate-700/50 text-slate-300 font-bold px-2 py-0.5 rounded mt-3">
                    {budget.properties}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-700/40 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition">
                  <ChevronRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: HIGH-GROWTH LOCALITIES HOTSPOTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <h3 className="text-3xl font-black text-[#091e42] tracking-tight">
              Top Investment Hotspots
            </h3>
            <p className="text-sm font-bold text-slate-400 mt-1">
              Cities and investment corridors with maximum price spikes this
              season
            </p>
          </div>
          <button className="text-sm font-black text-blue-600 hover:underline inline-flex items-center gap-1">
            View All 50+ Cities <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {activeCities.map((city, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/70 rounded-2xl p-5 hover:shadow-md transition-all text-center space-y-2 cursor-pointer relative overflow-hidden"
            >
              {city.active && (
                <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500"></div>
              )}
              <div className="mx-auto w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                <MapPin size={18} />
              </div>
              <h4 className="text-base font-black text-slate-800">
                {city.name}
              </h4>
              <p className="text-[11px] font-bold text-slate-400">
                {city.options}
              </p>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                <TrendingUp size={10} /> {city.growth}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: POWERFUL REAL ESTATE UTILITIES TOOLS SUITE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="bg-blue-600 rounded-[36px] text-white p-8 md:p-12 relative overflow-hidden shadow-xl shadow-blue-600/10">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500/30 rounded-full blur-2xl pointer-events-none"></div>

          <div className="max-w-2xl mb-10">
            <h3 className="text-3xl font-black tracking-tight">
              Financial & Legal Services Suite
            </h3>
            <p className="text-sm text-blue-100 mt-1">
              Get your calculations and documentation sorted out sitting
              comfortably at home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer space-y-4">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-xs">
                <Calculator size={22} />
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tight">
                  Smart EMI Calculator
                </h4>
                <p className="text-xs text-blue-100 mt-1.5 leading-relaxed">
                  Calculate exact custom premium breakdowns with current 2026
                  banking rates instantly.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer space-y-4">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-xs">
                <FileText size={22} />
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tight">
                  Digital Rent Agreement
                </h4>
                <p className="text-xs text-blue-100 mt-1.5 leading-relaxed">
                  Draft government-approved e-stamped legal rental contracts
                  online safely.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer space-y-4">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-xs">
                <BadgeIndianRupee size={22} />
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tight">
                  Instant Home Loan
                </h4>
                <p className="text-xs text-blue-100 mt-1.5 leading-relaxed">
                  Check verified eligibility curves across 15+ partner banks at
                  lowest margins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React, { useState } from "react";
// import {
//   ChevronRight,
//   ArrowRight,
//   ShieldCheck,
//   Star,
//   Calculator,
//   FileText,
//   BadgeIndianRupee,
//   MapPin,
//   TrendingUp,
//   Search,
//   Mic,
//   LocateFixed,
// } from "lucide-react";
// // ==========================================
// // 1. ALL MOCK DATA IN ONE PLACE
// // ==========================================
// const exploreOptionsData = [
//   {
//     id: 1,
//     title: "Buying a home",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
//     isNew: false,
//   },
//   {
//     id: 2,
//     title: "Renting a home",
//     image:
//       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
//     isNew: false,
//   },
//   {
//     id: 3,
//     title: "Invest in Real Estate",
//     image:
//       "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=500&q=80",
//     isNew: true,
//   },
//   {
//     id: 4,
//     title: "Sell/Rent your property",
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
//     isNew: false,
//   },
//   {
//     id: 5,
//     title: "Plots/Land",
//     image:
//       "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
//     isNew: false,
//   },
//   {
//     id: 6,
//     title: "Explore Insights",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
//     isNew: true,
//   },
// ];
// const articleData = {
//   News: [
//     {
//       title: "Noida Sports City projects update and delay clearance...",
//       date: "Jul 08, 2026",
//       img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=120&q=80",
//     },
//     {
//       title: "GRAP Stage 1 imposed across Delhi-NCR with strict rules...",
//       date: "May 21, 2026",
//       img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=120&q=80",
//     },
//     {
//       title: "Land acquisitions to begin for New Noida residential hub...",
//       date: "May 22, 2026",
//       img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=120&q=80",
//     },
//     {
//       title: "Bhoo scheme for digital property records launched...",
//       date: "May 15, 2026",
//       img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=120&q=80",
//     },
//   ],
//   "Tax & Legal": [
//     {
//       title: "Understanding RERA tax implementations on residential plots",
//       date: "Jan 12, 2026",
//       img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&q=80",
//     },
//   ],
//   "Help Guides": [
//     {
//       title: "Step-by-step checklist for smooth property registry process",
//       date: "Feb 10, 2026",
//       img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=120&q=80",
//     },
//   ],
//   Investment: [
//     {
//       title: "Top 5 fast-growing tech corridors for massive real estate growth",
//       date: "Mar 05, 2026",
//       img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=120&q=80",
//     },
//   ],
// };
// const dataLaunches = [
//   {
//     id: 1,
//     tag: "NEW ARRIVAL",
//     tagColor: "bg-amber-500",
//     name: "Leverage Green Heights",
//     loc: "Wardha Road, Nagpur",
//     price: "₹42 - 58.9 Lacs",
//     config: "2, 3 BHK Apartment",
//     rera: true,
//     trend: "+8.7% Last 3 Months",
//   },
//   {
//     id: 2,
//     tag: "NEW LAUNCH",
//     tagColor: "bg-orange-500",
//     name: "Fugen Royal Millenia",
//     loc: "Vuyyuru, Vijayawada",
//     price: "₹20.04 - 48.00 Lacs",
//     config: "Residential Land / Plots",
//     rera: false,
//     trend: "+22.7% Last Year",
//   },
//   {
//     id: 3,
//     tag: "NEW ARRIVAL",
//     tagColor: "bg-amber-500",
//     name: "Maruti Akrida",
//     loc: "Sarjapur, Bangalore",
//     price: "₹70.93 L - 1.44 Cr",
//     config: "2, 3 BHK Luxury Builder Floors",
//     rera: true,
//     trend: "+9.2% Trend Spike",
//   },
// ];
// const handpickedItems = [
//   {
//     id: 1,
//     title: "Shaligram Rudraksh Kingston",
//     desc: "3, 4 BHK Luxury Apartment, Bawadia Kalan, Bhopal",
//     price: "₹ 2.00 - 3.10 Crore",
//     img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80",
//   },
//   {
//     id: 2,
//     title: "Nishija Akshita Eastern Meadows",
//     desc: "Premium Commercial Land, Ghatkesar, Hyderabad",
//     price: "₹ 19.54 - 34.25 Lacs",
//     img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
//   },
//   {
//     id: 3,
//     title: "Paras Emperor Grand Tower",
//     desc: "4, 5 BHK Premium Duplex Villa, Arera Colony, Bhopal",
//     price: "₹ 2.37 - 5.50 Crore",
//     img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80",
//   },
// ];
// const budgetCategories = [
//   {
//     range: "Under ₹ 30 Lacs",
//     subtitle: "Affordable housing options",
//     properties: "12,400+ Active Listings",
//   },
//   {
//     range: "₹ 30 - 60 Lacs",
//     subtitle: "Mid-segment premium flats",
//     properties: "24,800+ Active Listings",
//   },
//   {
//     range: "₹ 60 - 90 Lacs",
//     subtitle: "Spacious family apartments",
//     properties: "18,100+ Active Listings",
//   },
//   {
//     range: "₹ 90 L - 1.5 Cr",
//     subtitle: "Elite builders & urban living",
//     properties: "15,200+ Active Listings",
//   },
//   {
//     range: "₹ 1.5 - 3.0 Cr",
//     subtitle: "Premium duplex & penthouses",
//     properties: "9,600+ Active Listings",
//   },
//   {
//     range: "Above ₹ 3.0 Cr",
//     subtitle: "Ultra-luxury mansions & villas",
//     properties: "4,300+ Active Listings",
//   },
// ];
// const activeCities = [
//   {
//     name: "Delhi NCR",
//     growth: "+12.4%",
//     options: "45,000+ Props",
//     active: true,
//   },
//   {
//     name: "Mumbai Hub",
//     growth: "+18.2%",
//     options: "62,000+ Props",
//     active: false,
//   },
//   {
//     name: "Bangalore",
//     growth: "+14.7%",
//     options: "38,000+ Props",
//     active: false,
//   },
//   {
//     name: "Hyderabad",
//     growth: "+21.3%",
//     options: "29,000+ Props",
//     active: true,
//   },
//   {
//     name: "Pune Metro",
//     growth: "+9.8%",
//     options: "22,000+ Props",
//     active: false,
//   },
//   {
//     name: "Chennai",
//     growth: "+11.2%",
//     options: "17,000+ Props",
//     active: false,
//   },
// ];
// // ==========================================
// // 2. MAIN CORE INTEGRATION EXPORT
// // ==========================================
// export default function HomePage() {
//   const [activeTab, setActiveTab] = useState("News");
//   const [searchTab, setSearchTab] = useState("Buy");
//   const [showNavbarSearch, setShowNavbarSearch] = useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       const mainSearchBar = document.getElementById("main-hero-search");
//       if (mainSearchBar) {
//         const rect = mainSearchBar.getBoundingClientRect();
//         // Yahan check ho raha hai ki bada search bar screen ke top (64px) ke paas pahuncha ya nahi
//         if (rect.top < 0) {
//           setShowNavbarSearch(true);
//         } else {
//           setShowNavbarSearch(false);
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial load par run karne ke liye
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-left selection:bg-blue-600 selection:text-white">
//       {/* 🌟 NEW ADDITION: 99ACRES STYLE HERO SEARCH BANNER (UPER ADD KIYA) */}
//       <div className="relative h-[440px] md:h-[480px] w-full flex flex-col justify-center items-center px-4 overflow-hidden select-none bg-slate-900">
//         {/* Background Image Overlay with Dark Premium Mask */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
//             alt="Hero Premium Real Estate Backdrop"
//             className="w-full h-full object-cover opacity-45 transform scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
//         </div>
//         {/* Hero Search Content Console */}
//         <div className="relative z-10 w-full max-w-4xl text-center space-y-6 mt-16">
//           <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
//             Welcome Back! Discover Your Perfect Space
//           </h1>
//           {/* Mini Tab Switcher */}
//           <div className="inline-flex bg-black/40 backdrop-blur-md p-1 rounded-xl border border-white/10 gap-1">
//             {["Buy", "Rent", "Commercial", "Plots"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setSearchTab(tab)}
//                 className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
//                   searchTab === tab
//                     ? "bg-white text-slate-900 shadow-sm"
//                     : "text-white/80 hover:text-white hover:bg-white/5"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           {/* Main Giant Search Bar */}
//           <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/40 p-2 flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto">
//             <div className="flex items-center gap-2 flex-1 w-full px-3 py-1">
//               <Search className="text-slate-400 shrink-0" size={18} />
//               <input
//                 type="text"
//                 placeholder="Enter City, Locality, Project or Landmark to search..."
//                 className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
//               />
//               <button className="text-slate-400 hover:text-blue-600 transition cursor-pointer p-1">
//                 <LocateFixed size={18} />
//               </button>
//               <button className="text-slate-400 hover:text-blue-600 transition cursor-pointer p-1 border-r border-slate-100 pr-2">
//                 <Mic size={18} />
//               </button>
//             </div>
//             <button className="w-full md:w-auto bg-[#0073e1] hover:bg-blue-600 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-lg transition-all cursor-pointer tracking-wide flex items-center justify-center gap-2">
//               Search Properties
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* SECTION 1: REAL ESTATE OPTIONS (NICHE SHIFT KIYA WITH EXTRA SPACING) */}
//       <section className="bg-white py-14 border-b border-slate-100 shadow-xs relative z-10">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <p className="text-xs sm:text-sm font-black tracking-[0.18em] uppercase text-slate-400">
//               Get Started with Exploring Real Estate Options
//             </p>
//           </div>
//           <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
//             {exploreOptionsData.map((item) => (
//               <div
//                 key={item.id}
//                 className="group min-w-[190px] sm:min-w-[220px] lg:min-w-0 flex-1 snap-start flex flex-col cursor-pointer"
//               >
//                 <div className="relative overflow-hidden rounded-2xl bg-slate-50 aspect-[4/3] w-full border border-slate-200/60 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   {item.isNew && (
//                     <div className="absolute top-3 left-3 bg-rose-600 text-[10px] font-black tracking-widest text-white uppercase px-2 py-0.5 rounded shadow-sm">
//                       New
//                     </div>
//                   )}
//                 </div>
//                 <h3 className="mt-3.5 text-base sm:text-lg font-bold text-slate-800 tracking-tight transition-colors group-hover:text-blue-600">
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* PORTAL CORE MAIN HEADLINE */}
//       <div className="text-center py-16 px-4">
//         <p className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-widest">
//           All Property Needs - One Portal
//         </p>
//         <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#091e42] mt-3 leading-[1.15] tracking-tight">
//           Find Better Places to Live, Work <br className="hidden sm:block" />{" "}
//           and Wonder...
//         </h2>
//       </div>
//       {/* SECTION 2: BUY HERO SUITE & TABS */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12 mb-20">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-white rounded-[32px] p-8 shadow-sm border border-slate-200/60">
//           <div className="md:col-span-6 overflow-hidden rounded-2xl aspect-[16/10] shadow-xs">
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
//               alt="Living"
//               className="w-full h-full object-cover transform hover:scale-102 transition duration-500"
//             />
//           </div>
//           <div className="md:col-span-6 space-y-5 pl-0 md:pl-4">
//             <span className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest">
//               Buy A Home
//             </span>
//             <h3 className="text-3xl sm:text-4xl font-black text-[#091e42] leading-tight tracking-tight">
//               Find, Buy & Own Your <br />
//               Dream Home
//             </h3>
//             <p className="text-base text-slate-500 max-w-md leading-relaxed">
//               Explore from verified premium Apartments, independent land, modern
//               builder floors, luxury villas and more.
//             </p>
//             <button className="bg-[#0078db] hover:bg-[#0062b3] text-white text-base font-extrabold px-8 py-4 rounded-xl transition cursor-pointer shadow-md shadow-blue-500/10">
//               Explore Buying
//             </button>
//           </div>
//         </div>
//         {/* Dynamic News/Articles Tabber Box */}
//         <div className="bg-white rounded-[32px] p-6 md:p-10 border border-slate-200/60 shadow-sm max-w-5xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-100 pb-5">
//             <div>
//               <h4 className="text-xl sm:text-2xl font-black text-[#091e42] tracking-tight">
//                 Top articles on home buying
//               </h4>
//               <p className="text-sm text-slate-400 mt-1">
//                 Read from expert Beginners check-list to pro-level insights
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {Object.keys(articleData).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl transition cursor-pointer ${
//                     activeTab === tab
//                       ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600 shadow-xs"
//                       : "text-slate-400 hover:text-slate-700"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
//             {articleData[activeTab]?.map((art, idx) => (
//               <div
//                 key={idx}
//                 className="flex gap-5 items-center group cursor-pointer"
//               >
//                 <img
//                   src={art.img}
//                   alt="Thumb"
//                   className="w-20 h-16 object-cover rounded-xl bg-slate-100 shrink-0 shadow-2xs"
//                 />
//                 <div className="space-y-1">
//                   <h5 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug">
//                     {art.title}
//                   </h5>
//                   <p className="text-xs text-slate-400 font-medium">
//                     {art.date}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 pt-5 border-t border-slate-100 flex justify-end">
//             <a
//               href="#"
//               className="text-sm font-black text-slate-600 hover:text-blue-600 inline-flex items-center gap-1.5 transition"
//             >
//               Read realty news, guides & articles <ChevronRight size={16} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: NEWLY LAUNCHED PROJECTS SLIDER */}
//       <section className="bg-gradient-to-b from-[#eef7ff] to-white border-y border-blue-100/50 py-16 mb-20">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
//             <div>
//               <h3 className="text-3xl font-black text-[#091e42] tracking-tight flex items-center gap-2.5">
//                 <span className="text-2xl">🏢</span> Newly launched projects
//               </h3>
//               <p className="text-sm font-bold text-slate-500 mt-1 pl-1">
//                 Premium residential options available at zero brokerage fee
//               </p>
//             </div>
//             <span className="text-sm font-black text-blue-600 cursor-pointer hover:underline inline-flex items-center gap-0.5">
//               Explore Limited Launches <ArrowRight size={15} />
//             </span>
//           </div>

//           <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none">
//             {dataLaunches.map((item) => (
//               <div
//                 key={item.id}
//                 className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs relative flex flex-col justify-between transition-all hover:shadow-md"
//               >
//                 <div>
//                   <span
//                     className={`absolute top-4 left-4 text-[10px] font-black tracking-widest text-white px-2.5 py-0.5 rounded shadow-sm ${item.tagColor}`}
//                   >
//                     {item.tag}
//                   </span>
//                   <div className="flex items-start gap-4 mt-5">
//                     <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden shrink-0 border border-slate-200/60">
//                       <img
//                         src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=150&q=80"
//                         alt="Avatar"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="space-y-0.5">
//                       <h4 className="text-lg font-black text-slate-800 leading-tight tracking-tight">
//                         {item.name}
//                       </h4>
//                       <p className="text-xs font-semibold text-slate-400">
//                         {item.loc}
//                       </p>
//                       {item.rera && (
//                         <span className="inline-flex items-center gap-0.5 text-[9px] font-black bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-md mt-2">
//                           <ShieldCheck size={11} /> RERA APPROVED
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="mt-6 border-t border-dashed border-slate-100 pt-4 flex justify-between items-center">
//                     <div>
//                       <p className="text-xl font-black text-slate-900 tracking-tight">
//                         {item.price}
//                       </p>
//                       <p className="text-xs font-bold text-slate-400 mt-0.5">
//                         {item.config}
//                       </p>
//                     </div>
//                     <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-xl">
//                       {item.trend}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
//                   <span className="text-xs text-slate-400 font-bold tracking-tight">
//                     @zero brokerage
//                   </span>
//                   <button className="bg-[#0078db] hover:bg-[#0062b3] text-sm font-extrabold text-white px-5 py-2.5 rounded-xl transition cursor-pointer">
//                     View Phone Number
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4: HANDPICKED RESIDENTIAL GRID */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
//         <div className="mb-10">
//           <h3 className="text-3xl font-black text-[#091e42] tracking-tight">
//             Handpicked Residential Projects
//           </h3>
//           <p className="text-sm font-bold text-slate-400 mt-1">
//             Top luxury & budget-friendly featured residential properties across
//             India
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {handpickedItems.map((proj) => (
//             <div key={proj.id} className="group flex flex-col items-center">
//               <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden relative border border-slate-200/50 shadow-xs">
//                 <img
//                   src={proj.img}
//                   alt={proj.title}
//                   className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
//                 />
//                 <span className="absolute top-4 left-4 bg-purple-600 text-[10px] font-black text-white px-2.5 py-0.5 rounded shadow-sm tracking-wider uppercase">
//                   Featured Project
//                 </span>
//                 <button className="absolute top-4 right-4 bg-black/40 backdrop-blur-xs text-white p-2 rounded-full cursor-pointer hover:bg-black/60 transition">
//                   <Star size={14} fill="white" stroke="transparent" />
//                 </button>
//               </div>

//               <div className="w-[92%] -mt-12 bg-white rounded-2xl p-5 border border-slate-200/60 shadow-md relative z-10 space-y-2 transition-all group-hover:border-blue-200">
//                 <h4 className="text-base sm:text-17px font-black text-[#091e42] tracking-tight line-clamp-1 transition-colors group-hover:text-blue-600">
//                   {proj.title}
//                 </h4>
//                 <p className="text-xs font-semibold text-slate-400 line-clamp-1 leading-none">
//                   {proj.desc}
//                 </p>
//                 <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
//                   <span className="text-[11px] font-black text-blue-500 uppercase tracking-wider">
//                     Market Price
//                   </span>
//                   <p className="text-base font-black text-slate-900 tracking-tight">
//                     {proj.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 5: PREMIUM MINT SELL BANNER */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
//         <div className="bg-gradient-to-r from-emerald-50 via-teal-50/20 to-white rounded-[40px] p-8 md:p-12 border border-emerald-100/60 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
//           <div className="md:col-span-5 flex justify-center">
//             <div className="relative w-full max-w-sm aspect-square bg-emerald-100/30 rounded-3xl overflow-hidden shadow-2xs border border-emerald-100/50">
//               <img
//                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
//                 alt="Executive"
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>
//           </div>
//           <div className="md:col-span-7 space-y-5">
//             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#091e42] tracking-tight leading-[1.15]">
//               Sell or rent faster at the <br className="hidden sm:block" />
//               <span className="text-emerald-600">perfect market price!</span>
//             </h3>
//             <p className="text-base md:text-lg font-medium text-slate-500 max-w-xl leading-relaxed">
//               List your residential/commercial property now and interact
//               directly with premium verified buyers instantly.
//             </p>

//             <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-5">
//               <button className="bg-[#0078db] hover:bg-[#0062b3] text-base font-black text-white px-8 py-4 rounded-xl cursor-pointer shadow-md shadow-blue-500/10 transition">
//                 Post Property, It's FREE
//               </button>
//               <a
//                 href="#"
//                 className="text-sm font-black text-slate-700 hover:text-emerald-600 inline-flex items-center gap-1 py-2 transition"
//               >
//                 Post via{" "}
//                 <span className="text-emerald-500 font-black">
//                   WhatsApp Business
//                 </span>{" "}
//                 <ArrowRight size={15} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 6: PREMIUM BUDGET SEGMENTATION CARDS */}
//       <section className="bg-slate-900 text-white py-20 mb-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="mb-12">
//             <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
//               Targeted Discovery
//             </span>
//             <h3 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
//               Find Properties in Your Budget
//             </h3>
//             <p className="text-sm text-slate-400 mt-2">
//               Filter premium residential choices based on custom pocket-size
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {budgetCategories.map((budget, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 group cursor-pointer flex justify-between items-center"
//               >
//                 <div>
//                   <h4 className="text-xl font-black tracking-tight group-hover:text-blue-400 transition">
//                     {budget.range}
//                   </h4>
//                   <p className="text-xs text-slate-400 mt-1">
//                     {budget.subtitle}
//                   </p>
//                   <span className="inline-block text-[10px] bg-slate-700/50 text-slate-300 font-bold px-2 py-0.5 rounded mt-3">
//                     {budget.properties}
//                   </span>
//                 </div>
//                 <div className="w-10 h-10 rounded-xl bg-slate-700/40 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition">
//                   <ChevronRight size={18} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 7: HIGH-GROWTH LOCALITIES HOTSPOTS */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
//           <div>
//             <h3 className="text-3xl font-black text-[#091e42] tracking-tight">
//               Top Investment Hotspots
//             </h3>
//             <p className="text-sm font-bold text-slate-400 mt-1">
//               Cities and investment corridors with maximum price spikes this
//               season
//             </p>
//           </div>
//           <button className="text-sm font-black text-blue-600 hover:underline inline-flex items-center gap-1">
//             View All 50+ Cities <ArrowRight size={14} />
//           </button>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {activeCities.map((city, idx) => (
//             <div
//               key={idx}
//               className="bg-white border border-slate-200/70 rounded-2xl p-5 hover:shadow-md transition-all text-center space-y-2 cursor-pointer relative overflow-hidden"
//             >
//               {city.active && (
//                 <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500"></div>
//               )}
//               <div className="mx-auto w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
//                 <MapPin size={18} />
//               </div>
//               <h4 className="text-base font-black text-slate-800">
//                 {city.name}
//               </h4>
//               <p className="text-[11px] font-bold text-slate-400">
//                 {city.options}
//               </p>
//               <span className="inline-flex items-center gap-0.5 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
//                 <TrendingUp size={10} /> {city.growth}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 8: POWERFUL REAL ESTATE UTILITIES TOOLS SUITE */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
//         <div className="bg-blue-600 rounded-[36px] text-white p-8 md:p-12 relative overflow-hidden shadow-xl shadow-blue-600/10">
//           <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500/30 rounded-full blur-2xl pointer-events-none"></div>

//           <div className="max-w-2xl mb-10">
//             <h3 className="text-3xl font-black tracking-tight">
//               Financial & Legal Services Suite
//             </h3>
//             <p className="text-sm text-blue-100 mt-1">
//               Get your calculations and documentation sorted out sitting
//               comfortably at home
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
//             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer space-y-4">
//               <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-xs">
//                 <Calculator size={22} />
//               </div>
//               <div>
//                 <h4 className="text-lg font-black tracking-tight">
//                   Smart EMI Calculator
//                 </h4>
//                 <p className="text-xs text-blue-100 mt-1.5 leading-relaxed">
//                   Calculate exact custom premium breakdowns with current 2026
//                   banking rates instantly.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer space-y-4">
//               <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-xs">
//                 <FileText size={22} />
//               </div>
//               <div>
//                 <h4 className="text-lg font-black tracking-tight">
//                   Digital Rent Agreement
//                 </h4>
//                 <p className="text-xs text-blue-100 mt-1.5 leading-relaxed">
//                   Draft government-approved e-stamped legal rental contracts
//                   online safely.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer space-y-4">
//               <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-xs">
//                 <BadgeIndianRupee size={22} />
//               </div>
//               <div>
//                 <h4 className="text-lg font-black tracking-tight">
//                   Instant Home Loan
//                 </h4>
//                 <p className="text-xs text-blue-100 mt-1.5 leading-relaxed">
//                   Check verified eligibility curves across 15+ partner banks at
//                   lowest margins.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
