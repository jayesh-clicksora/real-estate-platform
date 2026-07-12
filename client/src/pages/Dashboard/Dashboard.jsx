// import React, { useState } from "react";
// import {
//   Building2,
//   Users2,
//   UserCheck,
//   Wallet,
//   Plus,
//   Settings2,
//   MessageSquareCode,
//   ArrowUpRight,
//   TrendingUp,
//   Globe2,
//   Briefcase,
//   ChevronRight,
//   Activity,
// } from "lucide-react";

// // ─── 100% PREMIUM CORPORATE HEADSHOTS FOR LIVE TELEMETRY LOGS ───
// const LIVE_USERS = [
//   "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80&sig=exec-1",
//   "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80&sig=exec-2",
//   "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80&sig=exec-3",
//   "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80&sig=exec-4",
// ];

// function Dashboard() {
//   const [activeTab, setActiveTab] = useState("overview");

//   // Mocking Live Trans-Logs for Premium Feel
//   const recentActivities = [
//     {
//       id: "TXN-9021",
//       user: "Amit Sharma",
//       avatar: LIVE_USERS[0],
//       action: "Placed token for Vanguard Heavy Engineering",
//       value: "₹8.50 Cr",
//       type: "credit",
//     },
//     {
//       id: "TXN-8843",
//       user: "Sarah Jenkins",
//       avatar: LIVE_USERS[1],
//       action: "Enquired about The Zenith Luxury Flagship",
//       value: "Premium High-Street",
//       type: "neutral",
//     },
//     {
//       id: "TXN-7391",
//       user: "Rajesh Malhotra",
//       avatar: LIVE_USERS[2],
//       action: "Closed lease lock-in for Nexus Cyber-Tower",
//       value: "5 Year Tenure",
//       type: "success",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#06080A] font-sans antialiased text-[#E2E8F0] pt-28 pb-16 px-4 sm:px-8 relative overflow-hidden">
//       {/* ─── GLOW MATRIX BACKDROPS ─── */}
//       <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto space-y-10 relative z-10">
//         {/* ─── TOP HEADER EXECUTIVE BAR ─── */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-900 pb-8 text-left">
//           <div className="space-y-2">
//             <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 border border-emerald-500/20 rounded-md">
//               <Activity className="w-3 h-3 animate-pulse" /> Core System Live
//             </span>
//             <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
//               Command Suite{" "}
//               <span className="font-serif italic font-normal tracking-normal lowercase text-slate-400">
//                 Control Ledger
//               </span>
//             </h1>
//             <p className="text-xs text-slate-500 font-mono">
//               ESTATEPRO INTEL // SESSION CONFIRMED SECURE // METRICS LIVE
//             </p>
//           </div>

//           {/* Quick Date Telemetry */}
//           <div className="bg-[#0B1013] border border-slate-900 p-3 rounded-xl flex items-center gap-4 text-xs font-mono">
//             <div>
//               <span className="block text-slate-600 font-bold text-[9px] uppercase">
//                 Data Integrity
//               </span>
//               <span className="text-slate-300">100% Synced</span>
//             </div>
//             <div className="border-l border-slate-900 pl-4">
//               <span className="block text-slate-600 font-bold text-[9px] uppercase">
//                 Server Location
//               </span>
//               <span className="text-slate-300">IN-SOUTH-1</span>
//             </div>
//           </div>
//         </div>

//         {/* ─── EXECUTIVE HIGH-YIELD STATS MATRIX ─── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* STAT CARD 1 */}
//           <div className="bg-[#0B1013] border border-slate-900 hover:border-blue-500/30 transition-all rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden text-left shadow-2xl">
//             <div className="flex items-start justify-between">
//               <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-lg text-blue-400">
//                 <Building2 className="w-5 h-5" />
//               </div>
//               <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
//                 <TrendingUp className="w-3 h-3" /> +4.2%
//               </span>
//             </div>
//             <div className="mt-6 space-y-1">
//               <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
//                 Total Asset Pipeline
//               </span>
//               <span className="text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
//                 1,245
//               </span>
//             </div>
//             <div className="border-t border-slate-900/60 mt-4 pt-3 flex justify-between text-[10px] font-mono text-slate-500">
//               <span>Grade-A: 740</span>
//               <span>Heavy Ind: 505</span>
//             </div>
//           </div>

//           {/* STAT CARD 2 */}
//           <div className="bg-[#0B1013] border border-slate-900 hover:border-emerald-500/30 transition-all rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden text-left shadow-2xl">
//             <div className="flex items-start justify-between">
//               <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg text-emerald-400">
//                 <Users2 className="w-5 h-5" />
//               </div>
//               <span className="text-[10px] font-mono text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800">
//                 Active Desk
//               </span>
//             </div>
//             <div className="mt-6 space-y-1">
//               <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
//                 Broker Network Concierge
//               </span>
//               <span className="text-3xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
//                 152
//               </span>
//             </div>
//             <div className="border-t border-slate-900/60 mt-4 pt-3 flex justify-between text-[10px] font-mono text-slate-500">
//               <span>KYC Verified: 148</span>
//               <span>Pending: 4</span>
//             </div>
//           </div>

//           {/* STAT CARD 3 */}
//           <div className="bg-[#0B1013] border border-slate-900 hover:border-amber-500/30 transition-all rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden text-left shadow-2xl">
//             <div className="flex items-start justify-between">
//               <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg text-amber-400">
//                 <UserCheck className="w-5 h-5" />
//               </div>
//               <span className="text-[10px] font-mono text-amber-400 flex items-center gap-0.5 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
//                 +18% MoM
//               </span>
//             </div>
//             <div className="mt-6 space-y-1">
//               <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
//                 Institutional Onboarded
//               </span>
//               <span className="text-3xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
//                 324
//               </span>
//             </div>
//             <div className="border-t border-slate-900/60 mt-4 pt-3 flex justify-between text-[10px] font-mono text-slate-500">
//               <span>Corporate B2B: 88</span>
//               <span>HNIs / Retail: 236</span>
//             </div>
//           </div>

//           {/* STAT CARD 4 */}
//           <div className="bg-[#0B1013] border border-slate-900 hover:border-purple-500/30 transition-all rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden text-left shadow-2xl">
//             <div className="flex items-start justify-between">
//               <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-lg text-purple-400">
//                 <Wallet className="w-5 h-5" />
//               </div>
//               <span className="text-[10px] font-mono text-purple-400 flex items-center gap-0.5 bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">
//                 Target 92%
//               </span>
//             </div>
//             <div className="mt-6 space-y-1">
//               <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
//                 Gross Commission Escrow
//               </span>
//               <span className="text-3xl font-black text-white tracking-tight group-hover:text-purple-400 transition-colors">
//                 ₹18.50L
//               </span>
//             </div>
//             <div className="border-t border-slate-900/60 mt-4 pt-3 flex justify-between text-[10px] font-mono text-slate-500">
//               <span>Realized: 14.2L</span>
//               <span>Pipeline: 4.3L</span>
//             </div>
//           </div>
//         </div>

//         {/* ─── TWO-COLUMN WORKSPACE ENGINE ─── */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           {/* COLUMN 1 & 2: QUICK ACTION DRIVER + TELEMETRY SYSTEM */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* ACTION PANELS */}
//             <div className="bg-[#0B1013] border border-slate-900 rounded-xl p-6 sm:p-8 text-left shadow-2xl">
//               <div className="flex justify-between items-center border-b border-slate-900 pb-4 mb-6">
//                 <div>
//                   <h2 className="text-lg font-extrabold text-white tracking-tight">
//                     Operational Quick Actions
//                   </h2>
//                   <p className="text-[11px] text-slate-500 font-mono">
//                     Execute high-priority inventory adjustments
//                   </p>
//                 </div>
//                 <Globe2 className="w-4 h-4 text-slate-700" />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <button className="flex items-center justify-between p-4 bg-[#11181D] border border-slate-800/80 hover:border-blue-500/40 rounded-xl group transition-all cursor-pointer">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-black transition-all">
//                       <Plus className="w-4 h-4" />
//                     </div>
//                     <div className="text-left">
//                       <span className="block font-bold text-xs text-white">
//                         Ingest New Asset
//                       </span>
//                       <span className="block text-[10px] text-slate-500 font-mono">
//                         Villa / Shop / Industrial
//                       </span>
//                     </div>
//                   </div>
//                   <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
//                 </button>

//                 <button className="flex items-center justify-between p-4 bg-[#11181D] border border-slate-800/80 hover:border-emerald-500/40 rounded-xl group transition-all cursor-pointer">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-black transition-all">
//                       <Settings2 className="w-4 h-4" />
//                     </div>
//                     <div className="text-left">
//                       <span className="block font-bold text-xs text-white">
//                         Audit Grid Matrix
//                       </span>
//                       <span className="block text-[10px] text-slate-500 font-mono">
//                         Modify prices & specs
//                       </span>
//                     </div>
//                   </div>
//                   <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
//                 </button>

//                 <button className="flex items-center justify-between p-4 bg-[#11181D] border border-slate-800/80 hover:border-amber-500/40 rounded-xl group transition-all cursor-pointer">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg group-hover:bg-amber-500 group-hover:text-black transition-all">
//                       <Users2 className="w-4 h-4" />
//                     </div>
//                     <div className="text-left">
//                       <span className="block font-bold text-xs text-white">
//                         User Access Ledger
//                       </span>
//                       <span className="block text-[10px] text-slate-500 font-mono">
//                         Review HNI onboarding
//                       </span>
//                     </div>
//                   </div>
//                   <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
//                 </button>

//                 <button className="flex items-center justify-between p-4 bg-[#11181D] border border-slate-800/80 hover:border-purple-500/40 rounded-xl group transition-all cursor-pointer">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-lg group-hover:bg-purple-500 group-hover:text-black transition-all">
//                       <MessageSquareCode className="w-4 h-4" />
//                     </div>
//                     <div className="text-left">
//                       <span className="block font-bold text-xs text-white">
//                         Encrypted Inbox
//                       </span>
//                       <span className="block text-[10px] text-slate-500 font-mono">
//                         3 unread client proposals
//                       </span>
//                     </div>
//                   </div>
//                   <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
//                 </button>
//               </div>
//             </div>

//             {/* LIVE CONSOLE LOG MATRIX */}
//             <div className="bg-[#0B1013] border border-slate-900 rounded-xl p-6 text-left shadow-2xl">
//               <span className="text-[9px] font-mono text-slate-600 uppercase block mb-1">
//                 // SECURE LOG STREAM
//               </span>
//               <div className="bg-black/40 border border-slate-900 p-4 rounded-lg font-mono text-[11px] text-slate-400 space-y-1.5">
//                 <p>
//                   <span className="text-blue-500">[INFO]</span> Asset pipeline
//                   cached successfully. (1,245 nodes indexed)
//                 </p>
//                 <p>
//                   <span className="text-emerald-500">[AUTH]</span> Webhook
//                   securely linked to urban development servers.
//                 </p>
//                 <p>
//                   <span className="text-purple-500">[LOAD]</span> Cloudinary
//                   direct image engine:{" "}
//                   <span className="text-white">STATUS_200_OK</span> (0 broken
//                   strings detected).
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* COLUMN 3: REAL-TIME LEDGER RECENT EVENTS */}
//           <div className="bg-[#0B1013] border border-slate-900 rounded-xl p-6 text-left shadow-2xl flex flex-col justify-between self-stretch">
//             <div>
//               <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-4">
//                 <div>
//                   <h2 className="text-base font-extrabold text-white tracking-tight">
//                     Live Pipeline Activity
//                   </h2>
//                   <p className="text-[10px] text-slate-500 font-mono">
//                     Recent updates across segments
//                   </p>
//                 </div>
//                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
//               </div>

//               {/* ITERATIVE ACTIVITY THREADS */}
//               <div className="space-y-4">
//                 {recentActivities.map((act) => (
//                   <div
//                     key={act.id}
//                     className="p-3 bg-[#11181D]/60 border border-slate-900/60 rounded-xl flex items-start gap-3 hover:border-slate-800 transition-all group"
//                   >
//                     <img
//                       src={act.avatar}
//                       alt={act.user}
//                       className="w-8 h-8 rounded-full object-cover border border-slate-800 filter brightness-90 shrink-0"
//                     />
//                     <div className="flex-1 min-w-0 space-y-1">
//                       <div className="flex items-center justify-between gap-2">
//                         <span className="block text-xs font-bold text-white truncate">
//                           {act.user}
//                         </span>
//                         <span className="block text-[8px] font-mono text-slate-600 uppercase">
//                           {act.id}
//                         </span>
//                       </div>
//                       <p className="text-[11px] text-slate-400 leading-tight line-clamp-2">
//                         {act.action}
//                       </p>

//                       <div className="pt-1 flex items-center justify-between">
//                         <span
//                           className={`text-[10px] font-mono font-semibold ${
//                             act.type === "credit"
//                               ? "text-blue-400"
//                               : act.type === "success"
//                                 ? "text-emerald-400"
//                                 : "text-amber-400"
//                           }`}
//                         >
//                           {act.value}
//                         </span>
//                         <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-slate-400 transition-colors" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* LEADERBOARD FOOTER LOG */}
//             <div className="border-t border-slate-900/80 pt-4 mt-6">
//               <button className="w-full text-center bg-[#161F25] border border-slate-800 hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center gap-1 cursor-pointer">
//                 View Full System Logs <ArrowUpRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import { useState } from "react";
import {
  Building2,
  Users2,
  UserCheck,
  Wallet,
  Plus,
  Settings2,
  MessageSquareCode,
  ArrowUpRight,
  TrendingUp,
  Globe2,
  ChevronRight,
  Activity,
} from "lucide-react";

// ─── 100% PREMIUM CORPORATE HEADSHOTS FOR LIVE TELEMETRY LOGS ───
const LIVE_USERS = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80&sig=exec-1",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80&sig=exec-2",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80&sig=exec-3",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80&sig=exec-4",
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mocking Live Trans-Logs for Premium Feel
  const recentActivities = [
    {
      id: "TXN-9021",
      user: "Amit Sharma",
      avatar: LIVE_USERS[0],
      action: "Placed token for Vanguard Heavy Engineering",
      value: "₹8.50 Cr",
      type: "credit",
    },
    {
      id: "TXN-8843",
      user: "Sarah Jenkins",
      avatar: LIVE_USERS[1],
      action: "Enquired about The Zenith Luxury Flagship",
      value: "Premium High-Street",
      type: "neutral",
    },
    {
      id: "TXN-7391",
      user: "Rajesh Malhotra",
      avatar: LIVE_USERS[2],
      action: "Closed lease lock-in for Nexus Cyber-Tower",
      value: "5 Year Tenure",
      type: "success",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070A0C] text-slate-300 font-sans antialiased py-12 px-6 relative overflow-hidden">
      {/* ─── GLOW MATRIX BACKDROPS (FIXED TAILWIND V4 WARNINGS) ─── */}
      <div
        className="absolute top-0 left-1/4 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"
        style={{ width: "500px", height: "500px" }}
      />
      <div
        className="absolute bottom-0 right-1/4 rounded-full bg-purple-500/5 blur-[150px] pointer-events-none"
        style={{ width: "600px", height: "600px" }}
      />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* ─── TOP HEADER EXECUTIVE BAR ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-900 pb-8 text-left">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 border border-emerald-500/20 rounded-md">
              <Activity className="w-3 h-3 animate-pulse" /> Core System Live
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Command Suite{" "}
              <span className="font-serif italic font-normal tracking-normal lowercase text-slate-400">
                Control Ledger
              </span>
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              ESTATEPRO INTEL // SESSION CONFIRMED SECURE // METRICS LIVE //
              TAB: {activeTab.toUpperCase()}
            </p>
          </div>
          {/* Quick Date Telemetry */}
          <div className="bg-[#0B1013] border border-slate-900 p-3 rounded-xl flex items-center gap-4 text-xs font-mono">
            <div>
              <span className="block text-slate-600 font-bold text-[9px] uppercase">
                Data Integrity
              </span>
              <span className="text-slate-300">100% Synced</span>
            </div>
            <div className="border-l border-slate-900 pl-4">
              <span className="block text-slate-600 font-bold text-[9px] uppercase">
                Server Location
              </span>
              <span className="text-slate-300">IN-SOUTH-1</span>
            </div>
          </div>
        </div>

        {/* ─── EXECUTIVE HIGH-YIELD STATS MATRIX ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* STAT CARD 1 */}
          <div className="bg-[#0B1013] border border-slate-900 hover:border-blue-500/30 transition-all rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden text-left shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-lg text-blue-400">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                <TrendingUp className="w-3 h-3" /> +4.2%
              </span>
            </div>
            <div className="mt-6 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Total Asset Pipeline
              </span>
              <span className="text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                1,245
              </span>
            </div>
            <div className="border-t border-slate-900/60 mt-4 pt-3 flex justify-between text-[10px] font-mono text-slate-500">
              <span>Grade-A: 740</span>
              <span>Heavy Ind: 505</span>
            </div>
          </div>

          {/* STAT CARD 2 */}
          <div className="bg-[#0B1013] border border-slate-900 hover:border-emerald-500/30 transition-all rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden text-left shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg text-emerald-400">
                <Users2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800">
                Active Desk
              </span>
            </div>
            <div className="mt-6 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Broker Network Concierge
              </span>
              <span className="text-3xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                152
              </span>
            </div>
            <div className="border-t border-slate-900/60 mt-4 pt-3 flex justify-between text-[10px] font-mono text-slate-500">
              <span>KYC Verified: 148</span>
              <span>Pending: 4</span>
            </div>
          </div>

          {/* STAT CARD 3 */}
          <div className="bg-[#0B1013] border border-slate-900 hover:border-amber-500/30 transition-all rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden text-left shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg text-amber-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 flex items-center gap-0.5 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                +18% MoM
              </span>
            </div>
            <div className="mt-6 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Institutional Onboarded
              </span>
              <span className="text-3xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                324
              </span>
            </div>
            <div className="border-t border-slate-900/60 mt-4 pt-3 flex justify-between text-[10px] font-mono text-slate-500">
              <span>Corporate B2B: 88</span>
              <span>HNIs / Retail: 236</span>
            </div>
          </div>

          {/* STAT CARD 4 */}
          <div className="bg-[#0B1013] border border-slate-900 hover:border-purple-500/30 transition-all rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden text-left shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-lg text-purple-400">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-purple-400 flex items-center gap-0.5 bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">
                Target 92%
              </span>
            </div>
            <div className="mt-6 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Gross Commission Escrow
              </span>
              <span className="text-3xl font-black text-white tracking-tight group-hover:text-purple-400 transition-colors">
                ₹18.50L
              </span>
            </div>
            <div className="border-t border-slate-900/60 mt-4 pt-3 flex justify-between text-[10px] font-mono text-slate-500">
              <span>Realized: 14.2L</span>
              <span>Pipeline: 4.3L</span>
            </div>
          </div>
        </div>

        {/* ─── TWO-COLUMN WORKSPACE ENGINE ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* COLUMN 1 & 2: QUICK ACTION DRIVER + TELEMETRY SYSTEM */}
          <div className="lg:col-span-2 space-y-8">
            {/* ACTION PANELS */}
            <div className="bg-[#0B1013] border border-slate-900 rounded-xl p-6 sm:p-8 text-left shadow-2xl">
              <div className="flex justify-between items-center border-b border-slate-900 pb-4 mb-6">
                <div>
                  <h2 className="text-lg font-extrabold text-white tracking-tight">
                    Operational Quick Actions
                  </h2>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Execute high-priority inventory adjustments
                  </p>
                </div>
                <Globe2 className="w-4 h-4 text-slate-700" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveTab("ingest")}
                  className="flex items-center justify-between p-4 bg-[#11181D] border border-slate-800/80 hover:border-blue-500/40 rounded-xl group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-black transition-all">
                      <Plus className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-xs text-white">
                        Ingest New Asset
                      </span>
                      <span className="block text-[10px] text-slate-500 font-mono">
                        Villa / Shop / Industrial
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={() => setActiveTab("audit")}
                  className="flex items-center justify-between p-4 bg-[#11181D] border border-slate-800/80 hover:border-emerald-500/40 rounded-xl group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <Settings2 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-xs text-white">
                        Audit Grid Matrix
                      </span>
                      <span className="block text-[10px] text-slate-500 font-mono">
                        Modify prices & specs
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={() => setActiveTab("ledger")}
                  className="flex items-center justify-between p-4 bg-[#11181D] border border-slate-800/80 hover:border-amber-500/40 rounded-xl group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <Users2 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-xs text-white">
                        User Access Ledger
                      </span>
                      <span className="block text-[10px] text-slate-500 font-mono">
                        Review HNI onboarding
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={() => setActiveTab("inbox")}
                  className="flex items-center justify-between p-4 bg-[#11181D] border border-slate-800/80 hover:border-purple-500/40 rounded-xl group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-lg group-hover:bg-purple-500 group-hover:text-black transition-all">
                      <MessageSquareCode className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-xs text-white">
                        Encrypted Inbox
                      </span>
                      <span className="block text-[10px] text-slate-500 font-mono">
                        3 unread client proposals
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
            {/* LIVE CONSOLE LOG MATRIX */}
            <div className="bg-[#0B1013] border border-slate-900 rounded-xl p-6 text-left shadow-2xl">
              <span className="text-[9px] font-mono text-slate-600 uppercase block mb-1">
                // SECURE LOG STREAM
              </span>
              <div className="bg-black/40 border border-slate-900 p-4 rounded-lg font-mono text-[11px] text-slate-400 space-y-1.5">
                <p>
                  <span className="text-blue-500">[INFO]</span> Asset pipeline
                  cached successfully. (1,245 nodes indexed)
                </p>
                <p>
                  <span className="text-emerald-500">[AUTH]</span> Webhook
                  securely linked to urban development servers.
                </p>
                <p>
                  <span className="text-purple-500">[LOAD]</span> Cloudinary
                  direct image engine:{" "}
                  <span className="text-white">STATUS_200_OK</span> (0 broken
                  strings detected).
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: REAL-TIME LEDGER RECENT EVENTS */}
          <div className="bg-[#0B1013] border border-slate-900 rounded-xl p-6 text-left shadow-2xl flex flex-col justify-between self-stretch">
            <div>
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-4">
                <div>
                  <h2 className="text-base font-extrabold text-white tracking-tight">
                    Live Pipeline Activity
                  </h2>
                  <p className="text-[10px] text-slate-500 font-mono">
                    Recent updates across segments
                  </p>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              {/* ITERATIVE ACTIVITY THREADS */}
              <div className="space-y-4">
                {recentActivities.map((act) => (
                  <div
                    key={act.id}
                    className="p-3 bg-[#11181D]/60 border border-slate-900/60 rounded-xl flex items-start gap-3 hover:border-slate-800 transition-all group"
                  >
                    <img
                      src={act.avatar}
                      alt={act.user}
                      className="w-8 h-8 rounded-full object-cover border border-slate-800 filter brightness-90 shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="block text-xs font-bold text-white truncate">
                          {act.user}
                        </span>
                        <span className="block text-[8px] font-mono text-slate-600 uppercase">
                          {act.id}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight line-clamp-2">
                        {act.action}
                      </p>
                      <div className="pt-1 flex items-center justify-between">
                        <span
                          className={`text-[10px] font-mono font-semibold ${
                            act.type === "credit"
                              ? "text-blue-400"
                              : act.type === "success"
                                ? "text-emerald-400"
                                : "text-amber-400"
                          }`}
                        >
                          {act.value}
                        </span>
                        <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-slate-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* LEADERBOARD FOOTER LOG */}
            <div className="border-t border-slate-900/80 pt-4 mt-6">
              <button className="w-full text-center bg-[#161F25] border border-slate-800 hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center gap-1 cursor-pointer">
                View Full System Logs <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
