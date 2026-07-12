// import React, { useState } from "react";
// import {
//   ShieldAlert,
//   KeyRound,
//   Mail,
//   User,
//   MapPin,
//   Building2,
//   Calendar,
//   CheckCircle2,
//   Lock,
//   Menu,
//   Sliders,
//   BellRing,
//   Award,
//   ArrowUpRight,
//   Fingerprint,
// } from "lucide-react";

// function Profile() {
//   const [isTwoFactor, setIsTwoFactor] = useState(true);

//   return (
//     <div className="min-h-screen bg-[#06080A] font-sans antialiased text-[#E2E8F0] pt-28 pb-16 px-4 sm:px-8 relative overflow-hidden">
//       {/* ─── GLOW MATRIX BACKDROPS ─── */}
//       <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
//       <div className="absolute bottom-12 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto space-y-8 relative z-10">
//         {/* ─── HEADER COMMAND BAR ─── */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-900 pb-6 text-left">
//           <div className="space-y-1">
//             <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 border border-blue-500/20 rounded-md">
//               <Fingerprint className="w-3 h-3" /> Identity Verified
//             </span>
//             <h1 className="text-3xl font-black text-white tracking-tight uppercase">
//               Operator Profile{" "}
//               <span className="font-serif italic font-normal tracking-normal lowercase text-slate-400">
//                 credentials
//               </span>
//             </h1>
//           </div>
//           <div className="text-right font-mono text-[11px] text-slate-500">
//             <span>SECURE CLEARANCE LEVEL // 01</span>
//           </div>
//         </div>

//         {/* ─── MAIN GRID SYSTEM ─── */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           {/* COLUMN 1: HERO AVATAR & CLEARANCE CARD */}
//           <div className="bg-[#0B1013] border border-slate-900 rounded-2xl p-6 text-center shadow-2xl space-y-6 relative overflow-hidden">
//             <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />

//             {/* Avatar Frame */}
//             <div className="relative w-32 h-32 mx-auto">
//               <img
//                 src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
//                 alt="Executive Admin"
//                 className="w-full h-full rounded-2xl object-cover border-2 border-slate-800 filter brightness-95"
//               />
//               <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-black p-1.5 rounded-xl border-4 border-[#0B1013]">
//                 <CheckCircle2 className="w-4 h-4" />
//               </span>
//             </div>

//             {/* Profile Meta */}
//             <div className="space-y-1">
//               <h2 className="text-xl font-black text-white tracking-tight">
//                 Ananya Roy
//               </h2>
//               <p className="text-xs font-mono text-slate-500">
//                 Chief Managing Director
//               </p>
//             </div>

//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#11181D] border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
//               <Building2 className="w-3.5 h-3.5 text-blue-400" />
//               <span>EstatePro HQ, Mumbai</span>
//             </div>

//             {/* Micro Specs List */}
//             <div className="border-t border-slate-900/80 pt-4 space-y-2 text-left font-mono text-[11px] text-slate-400">
//               <div className="flex justify-between">
//                 <span className="text-slate-600">ID TOKEN</span>
//                 <span className="text-white font-bold">EP-9942A</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-slate-600">JOINED</span>
//                 <span>Oct 2024</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-slate-600">TOTAL LOCK-INS</span>
//                 <span className="text-emerald-400 font-bold">42 Deals</span>
//               </div>
//             </div>
//           </div>

//           {/* COLUMN 2 & 3: FORM FACTOR & SECURITY LEDGER */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* CORE SETTINGS BLOCK */}
//             <div className="bg-[#0B1013] border border-slate-900 rounded-2xl p-6 sm:p-8 text-left shadow-2xl">
//               <h3 className="text-base font-extrabold text-white tracking-tight mb-6 flex items-center gap-2">
//                 <User className="w-4 h-4 text-blue-400" /> Administrative
//                 Information
//               </h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
//                     Legal Full Name
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       defaultValue="Ananya Roy"
//                       disabled
//                       className="w-full bg-[#11181D] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white font-medium focus:outline-none cursor-not-allowed filter opacity-80"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
//                     Corporate Email
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       defaultValue="ananya.roy@estatepro.in"
//                       disabled
//                       className="w-full bg-[#11181D] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white font-medium focus:outline-none cursor-not-allowed filter opacity-80"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
//                     Assigned Domain Hub
//                   </label>
//                   <input
//                     type="text"
//                     defaultValue="Premium Commercial & High-Street Leases"
//                     className="w-full bg-[#11181D] border border-slate-800 focus:border-blue-500/40 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none transition-all"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
//                     Node Location
//                   </label>
//                   <input
//                     type="text"
//                     defaultValue="Maharashtra, IN"
//                     className="w-full bg-[#11181D] border border-slate-800 focus:border-blue-500/40 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="mt-8 pt-6 border-t border-slate-900 flex justify-end">
//                 <button className="bg-white hover:bg-slate-200 text-black px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg cursor-pointer">
//                   Save Infrastructure Parameters
//                 </button>
//               </div>
//             </div>

//             {/* COMMAND DECK SECURITY ARCHITECTURE */}
//             <div className="bg-[#0B1013] border border-slate-900 rounded-2xl p-6 text-left shadow-2xl space-y-6">
//               <div>
//                 <h3 className="text-base font-extrabold text-white tracking-tight flex items-center gap-2">
//                   <Lock className="w-4 h-4 text-purple-400" /> Encryption &
//                   Gateways
//                 </h3>
//                 <p className="text-[11px] text-slate-500 font-mono">
//                   Real-time terminal node protection rules
//                 </p>
//               </div>

//               <div className="divide-y divide-slate-900">
//                 {/* Security Row 1 */}
//                 <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 first:pt-0">
//                   <div className="flex items-start gap-3">
//                     <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg shrink-0">
//                       <KeyRound className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <span className="block text-xs font-bold text-white">
//                         Two-Factor Hardware Authentication
//                       </span>
//                       <span className="block text-[11px] text-slate-500">
//                         Requires physical security key challenge on payload
//                         execution.
//                       </span>
//                     </div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => setIsTwoFactor(!isTwoFactor)}
//                       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
//                         isTwoFactor ? "bg-blue-500" : "bg-slate-800"
//                       }`}
//                     >
//                       <span
//                         className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                           isTwoFactor ? "translate-x-6" : "translate-x-1"
//                         }`}
//                       />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Security Row 2 */}
//                 <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div className="flex items-start gap-3">
//                     <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
//                       <ShieldAlert className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <span className="block text-xs font-bold text-white">
//                         Console Session Lock
//                       </span>
//                       <span className="block text-[11px] text-slate-500">
//                         Auto terminal wipe out after 15 minutes of inactivity.
//                       </span>
//                     </div>
//                   </div>
//                   <button className="px-4 py-1.5 bg-[#11181D] border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors cursor-pointer">
//                     Configure
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import { useState } from "react";
import {
  ShieldAlert,
  KeyRound,
  User,
  Building2,
  CheckCircle2,
  Lock,
  Fingerprint,
} from "lucide-react";

function Profile() {
  const [isTwoFactor, setIsTwoFactor] = useState(true);

  return (
    <div className="min-h-screen bg-[#06080A] font-sans antialiased text-[#E2E8F0] pt-28 pb-16 px-4 sm:px-8 relative overflow-hidden">
      {/* ─── GLOW MATRIX BACKDROPS ─── */}
      <div
        className="absolute top-0 left-1/4 rounded-full bg-blue-600/5 blur-[130px] pointer-events-none"
        style={{ width: "450px", height: "450px" }}
      />
      <div
        className="absolute bottom-12 right-1/4 rounded-full bg-purple-500/5 blur-[150px] pointer-events-none"
        style={{ width: "500px", height: "500px" }}
      />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        {/* ─── HEADER COMMAND BAR ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-900 pb-6 text-left">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 border border-blue-500/20 rounded-md">
              <Fingerprint className="w-3 h-3" /> Identity Verified
            </span>
            <h1 className="text-3xl font-black text-white tracking-tight uppercase">
              Operator Profile{" "}
              <span className="font-serif italic font-normal tracking-normal lowercase text-slate-400">
                credentials
              </span>
            </h1>
          </div>
          <div className="text-right font-mono text-[11px] text-slate-500">
            <span>SECURE CLEARANCE LEVEL // 01</span>
          </div>
        </div>

        {/* ─── MAIN GRID SYSTEM ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* COLUMN 1: HERO AVATAR & CLEARANCE CARD */}
          <div className="bg-[#0B1013] border border-slate-900 rounded-2xl p-6 text-center shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500" />

            {/* Avatar Frame */}
            <div className="relative w-32 h-32 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Executive Admin"
                className="w-full h-full rounded-2xl object-cover border-2 border-slate-800 filter brightness-95"
              />
              <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-black p-1.5 rounded-xl border-4 border-[#0B1013]">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            {/* Profile Meta */}
            <div className="space-y-1">
              <h2 className="text-xl font-black text-white tracking-tight">
                Ananya Roy
              </h2>
              <p className="text-xs font-mono text-slate-500">
                Chief Managing Director
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#11181D] border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>EstatePro HQ, Mumbai</span>
            </div>

            {/* Micro Specs List */}
            <div className="border-t border-slate-900/80 pt-4 space-y-2 text-left font-mono text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span className="text-slate-600">ID TOKEN</span>
                <span className="text-white font-bold">EP-9942A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">JOINED</span>
                <span>Oct 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">TOTAL LOCK-INS</span>
                <span className="text-emerald-400 font-bold">42 Deals</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2 & 3: FORM FACTOR & SECURITY LEDGER */}
          <div className="lg:col-span-2 space-y-8">
            {/* CORE SETTINGS BLOCK */}
            <div className="bg-[#0B1013] border border-slate-900 rounded-2xl p-6 sm:p-8 text-left shadow-2xl">
              <h3 className="text-base font-extrabold text-white tracking-tight mb-6 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-400" /> Administrative
                Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Legal Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="Ananya Roy"
                      disabled
                      className="w-full bg-[#11181D] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white font-medium focus:outline-none cursor-not-allowed filter opacity-80"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Corporate Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      defaultValue="ananya.roy@estatepro.in"
                      disabled
                      className="w-full bg-[#11181D] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white font-medium focus:outline-none cursor-not-allowed filter opacity-80"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Assigned Domain Hub
                  </label>
                  <input
                    type="text"
                    defaultValue="Premium Commercial & High-Street Leases"
                    className="w-full bg-[#11181D] border border-slate-800 focus:border-blue-500/40 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Node Location
                  </label>
                  <input
                    type="text"
                    defaultValue="Maharashtra, IN"
                    className="w-full bg-[#11181D] border border-slate-800 focus:border-blue-500/40 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-900 flex justify-end">
                <button className="bg-white hover:bg-slate-200 text-black px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg cursor-pointer">
                  Save Infrastructure Parameters
                </button>
              </div>
            </div>

            {/* COMMAND DECK SECURITY ARCHITECTURE */}
            <div className="bg-[#0B1013] border border-slate-900 rounded-2xl p-6 text-left shadow-2xl space-y-6">
              <div>
                <h3 className="text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                  <Lock className="w-4 h-4 text-purple-400" /> Encryption &
                  Gateways
                </h3>
                <p className="text-[11px] text-slate-500 font-mono">
                  Real-time terminal node protection rules
                </p>
              </div>

              <div className="divide-y divide-slate-900">
                {/* Security Row 1 */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 first:pt-0">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg shrink-0">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">
                        Two-Factor Hardware Authentication
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        Requires physical security key challenge on payload
                        execution.
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setIsTwoFactor(!isTwoFactor)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        isTwoFactor ? "bg-blue-500" : "bg-slate-800"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isTwoFactor ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Security Row 2 */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">
                        Console Session Lock
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        Auto terminal wipe out after 15 minutes of inactivity.
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-[#11181D] border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors cursor-pointer">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
