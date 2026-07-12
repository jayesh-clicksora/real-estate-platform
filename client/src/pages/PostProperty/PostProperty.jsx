import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileText,
  Image as ImageIcon,
  IndianRupee,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function PostProperty() {
  // Wizard States
  const [lookingTo, setLookingTo] = useState("Sell");
  const [propertyType, setPropertyType] = useState("Residential");
  const [subType, setSubType] = useState("Flat/Apartment");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Recent Listings States
  const [recentTab, setRecentTab] = useState("Buy");
  const [selectedCity, setSelectedCity] = useState("Delhi");

  // Accordion States
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What type of property I can post on the platform for selling/renting?",
      a: "As an owner, agent, or builder, you can post all types of premium residential and commercial properties for rent, lease, or sale. Millions of high-intent clients search daily for exclusive flats, villas, office structures, and showrooms.",
    },
    {
      q: "Is posting property for selling/renting absolutely FREE?",
      a: "Yes, our basic standard tier allows you to list your property online for sale or rent completely free of cost. All verified enquiries are delivered seamlessly without any hidden commissions.",
    },
    {
      q: "Can I sell/rent out my property on my own without paying brokerage?",
      a: "Absolutely. As an independent property owner, you have full control over your listings. You can deal directly with thousands of potential clients visiting us daily, skipping the traditional broker channel entirely.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-left font-sans text-[#1E293B] antialiased selection:bg-[#0073e1]/10 pb-16">
      {/* ─── SECTION 1: LUXURY HERO & WIZARD FORM ─── */}
      <div className="relative bg-[#0A1128] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Background Accent Gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-blue-400 uppercase">
              <Sparkles size={14} /> Global Premium Real Estate Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              Sell or Rent your <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Property Faster
              </span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-md font-normal leading-relaxed">
              List your residential or commercial assets on the most trusted
              luxury real estate marketplace globally.
            </p>

            <div className="h-px bg-gradient-to-r from-white/20 to-transparent my-6" />

            <ul className="space-y-4 text-slate-300 font-medium text-sm md:text-base">
              <li className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                </div>
                <span>Advertise with zero brokerage or hidden fees</span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                </div>
                <span>Get direct, high-intent consumer enquiries</span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                </div>
                <span>Dedicated professional photography support</span>
              </li>
            </ul>
          </div>

          {/* Right Main Wizard Card Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-2xl shadow-black/20 border border-slate-100 p-6 sm:p-10 transition-all hover:shadow-black/20">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#0A1128] tracking-tight">
                Create Free Listing
              </h3>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-1.5">
                Step 1: Primary Parameters
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              {/* Row 1: Looking To Option Tabs */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  I want to...
                </label>
                <div className="inline-flex p-1.5 bg-slate-50 border border-slate-100 rounded-2xl w-full sm:w-auto">
                  {["Sell", "Rent / Lease", "PG"].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setLookingTo(tab)}
                      className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                        lookingTo === tab
                          ? "bg-white text-[#0073e1] shadow-md border border-slate-100"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Category Radios & Variant Chips */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  Property Category
                </label>
                <div className="flex items-center gap-8 py-1">
                  <label className="flex items-center gap-3 text-sm font-semibold text-slate-700 cursor-pointer group">
                    <input
                      type="radio"
                      name="pType"
                      checked={propertyType === "Residential"}
                      onChange={() => {
                        setPropertyType("Residential");
                        setSubType("Flat/Apartment");
                      }}
                      className="h-4 w-4 text-[#0073e1] border-slate-300 focus:ring-[#0073e1]"
                    />
                    <span className="group-hover:text-slate-900 transition-colors">
                      Residential
                    </span>
                  </label>
                  <label className="flex items-center gap-3 text-sm font-semibold text-slate-700 cursor-pointer group">
                    <input
                      type="radio"
                      name="pType"
                      checked={propertyType === "Commercial"}
                      onChange={() => {
                        setPropertyType("Commercial");
                        setSubType("Commercial Office");
                      }}
                      className="h-4 w-4 text-[#0073e1] border-slate-300 focus:ring-[#0073e1]"
                    />
                    <span className="group-hover:text-slate-900 transition-colors">
                      Commercial
                    </span>
                  </label>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {(propertyType === "Residential"
                    ? [
                        "Flat/Apartment",
                        "Independent House / Villa",
                        "Independent / Builder Floor",
                        "Plot / Land",
                      ]
                    : [
                        "Commercial Office",
                        "Commercial Shops",
                        "Commercial Showrooms",
                        "Warehouse",
                      ]
                  ).map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setSubType(sub)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        subType === sub
                          ? "bg-slate-900 border-slate-950 text-white shadow-sm"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Contact input text box */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  Contact Configuration
                </label>
                <div className="relative max-w-md">
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter your 10-digit mobile number"
                    value={phoneNumber}
                    onChange={(e) =>
                      setPhoneNumber(e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:bg-white focus:border-[#0073e1] focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Row 4: Submit action wrapper */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="button"
                  className="bg-[#0073e1] hover:bg-blue-600 text-white font-medium py-3.5 px-8 rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 tracking-wide flex items-center justify-center gap-2 group"
                >
                  Begin to Post Property
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
                <p className="text-xs text-slate-400 font-medium">
                  Registered?{" "}
                  <span className="text-[#0073e1] hover:underline cursor-pointer font-semibold">
                    Sign In
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ─── SECTION 2: Minimalist 3-Step Process ─── */}
      <div className="py-24 px-4 max-w-[1140px] mx-auto">
        <h3 className="text-2xl md:text-3xl font-light text-center text-[#0A1128] tracking-tight mb-16">
          Architected for <span className="font-semibold">Simplicity</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Step 1 */}
          <div className="group space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#0A1128] text-white flex items-center justify-center shadow-lg transition-transform group-hover:-translate-y-1">
              <FileText size={20} />
            </div>
            <h4 className="text-lg font-semibold text-[#0A1128]">
              01. Structure Asset
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Provide basic structural characteristics, setup your spatial
              config matrices, and precise street locations.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:-translate-y-1">
              <ImageIcon size={20} />
            </div>
            <h4 className="text-lg font-semibold text-[#0A1128]">
              02. Visual Indexing
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Attach high-definition, verified panoramic visual assets or
              multi-angle walkthroughs directly from smartphones.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:-translate-y-1">
              <IndianRupee size={18} />
            </div>
            <h4 className="text-lg font-semibold text-[#0A1128]">
              03. Monetization Core
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Declare expectations benchmarks, ownership legalities parameters,
              and launch instantly live across global networks.
            </p>
          </div>
        </div>
      </div>

      {/* ─── SECTION 3: DEEP PREMIUM METRICS ─── */}
      <div className="bg-[#0A1128] text-white py-20 px-4">
        <div className="max-w-[1140px] mx-auto text-center space-y-12">
          <h4 className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed tracking-tight text-slate-300">
            With over{" "}
            <span className="text-white font-medium">
              7 Million premium verified monthly visitors
            </span>
            , your real estate listing receives top-tier corporate visibility
            instantly.
          </h4>
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-10 border-t border-white/10">
            <div>
              <span className="text-3xl md:text-4xl font-light tracking-tight block text-blue-400">
                1M+
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-medium block mt-2">
                Active Portfolios
              </span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-light tracking-tight block text-blue-400">
                5.5M
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-medium block mt-2">
                Searches Monthly
              </span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-light tracking-tight block text-blue-400">
                200K+
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-medium block mt-2">
                Verified Landlords
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: REAL-TIME PREMIUM DIRECTORY ─── */}
      <div className="max-w-[1140px] mx-auto py-24 px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#0A1128] tracking-tight">
              Recently Indexed Assets
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Live updates from target geographical jurisdictions
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-slate-100 border border-slate-200/50 rounded-xl self-start sm:self-auto">
            {["Buy", "Rent/Lease"].map((tab) => (
              <button
                key={tab}
                onClick={() => setRecentTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  recentTab === tab
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* City Filter Engine Layout */}
        <div className="flex flex-wrap gap-1.5 pb-6 border-b border-slate-200/60">
          {["Delhi", "Noida", "Gurgaon", "Mumbai", "Bangalore", "Pune"].map(
            (city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCity === city
                    ? "bg-[#0073e1]/10 text-[#0073e1]"
                    : "bg-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {city}
              </button>
            ),
          )}
        </div>

        {/* Directory Row Engine Output Splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-4 space-y-2">
            {[
              { label: "Flats & Luxury Suites", count: "33K+" },
              { label: "Independent Villas", count: "4.2K+" },
              { label: "Commercial Offices", count: "1.3K+" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-slate-200/60 rounded-xl flex justify-between items-center cursor-pointer hover:border-slate-300 hover:bg-slate-50/50 transition-all group"
              >
                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                  {item.label}
                </span>
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md group-hover:text-[#0073e1] group-hover:bg-blue-50 transition-all">
                  {item.count}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8 bg-white border border-slate-200/60 rounded-2xl divide-y divide-slate-100 overflow-hidden shadow-xs">
            {[
              {
                icon: "🏢",
                title: `2 BHK Independent Executive Floor (₹70 Lac) in Suraj Park, ${selectedCity}`,
              },
              {
                icon: "🏡",
                title: `3 BHK Modern Premium Villa (₹50 Lac) in Anand Vihar, ${selectedCity}`,
              },
              {
                icon: "🏢",
                title: `Corporate Bare-Shell Office Space (₹28 Lac) in South Zone, ${selectedCity}`,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 flex items-start gap-4 hover:bg-slate-50/40 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-[#0073e1] transition-colors">
                    {item.title}
                  </h5>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Verified Today
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 5: ACCORDION FAQs ─── */}
      <div className="bg-white border-t border-slate-100 py-24 px-4">
        <div className="max-w-[800px] mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
              FAQ Structure
            </span>
            <h3 className="text-2xl font-semibold text-[#0A1128] tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="border border-slate-200/70 rounded-2xl divide-y divide-slate-200/70 overflow-hidden bg-white shadow-xs">
            {faqs.map((faq, index) => (
              <div key={index} className="transition-all">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex items-center justify-between font-semibold text-slate-800 text-sm md:text-base text-left cursor-pointer p-5 hover:bg-slate-50/50 transition-colors focus:outline-none"
                >
                  <span className={openFaq === index ? "text-[#0073e1]" : ""}>
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp
                      size={18}
                      className="text-slate-400 shrink-0 ml-4"
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="text-slate-400 shrink-0 ml-4"
                    />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-slate-500 leading-relaxed font-normal bg-slate-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 6: INTERESTING READS & FOOTER UTILITIES ─── */}
      <div className="max-w-[1140px] mx-auto pt-16 px-4 border-t border-slate-200/60 mt-12 space-y-12">
        {/* Contextual Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-xs font-semibold text-slate-400 tracking-wide uppercase">
          <span className="hover:text-[#0073e1] cursor-pointer transition-colors">
            Post Property FAQs
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full hidden md:inline-block" />
          <span className="hover:text-[#0073e1] cursor-pointer transition-colors">
            Sell Property
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full hidden md:inline-block" />
          <span className="hover:text-[#0073e1] cursor-pointer transition-colors">
            Post Property for Rent
          </span>
        </div>

        {/* Directory Breadcrumbs */}
        <div className="text-xs text-slate-400 font-medium flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl w-fit">
          <span className="hover:text-slate-800 cursor-pointer transition-colors">
            Home
          </span>
          <ChevronRight size={12} className="text-slate-300" />
          <span className="text-slate-600 font-semibold">Post Property</span>
        </div>

        {/* Reads row labels heading structure */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-[#0A1128] tracking-tight">
              Interesting Reads
            </h3>
            <p className="text-sm text-slate-400">
              Stay updated with market movements and insights
            </p>
          </div>
          <span className="text-xs font-bold text-[#0073e1] hover:text-blue-600 transition-colors cursor-pointer uppercase tracking-wider flex items-center gap-1 group">
            Read realty news, guides & articles
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </span>
        </div>

        {/* Static horizontal news grid items row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
              title: "Noida Sports City projects update",
              date: "Jul 08, 2026",
            },
            {
              img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80",
              title: "Land acquisitions to begin for New Noida",
              date: "May 22, 2026",
            },
            {
              img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80",
              title: "GRAP Stage 1 imposed in Delhi-NCR",
              date: "May 21, 2026",
            },
            {
              img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80",
              title: "Bhoo scheme for Bangalore property records",
              date: "May 15, 2026",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300/80 transition-all group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <h5 className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-[#0073e1] transition-colors">
                  {item.title}
                </h5>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostProperty;
