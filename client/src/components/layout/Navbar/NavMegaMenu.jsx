// import { useState } from "react";
// import { Link } from "react-router-dom";

// function NavMegaMenu({ activeMenu, currentCity, onLinkClick }) {
//   const [activeSubTab, setActiveSubTab] = useState("main");

//   if (!activeMenu) return null;

//   // ─── 100% ALIGNED DATA ENGINE BASED ON YOUR APP-ROUTES ───
//   const menuData = {
//     buyers: {
//       sidebar: [
//         { id: "main", label: "BUY A HOME" },
//         { id: "commercial", label: "COMMERCIAL BUY" },
//         { id: "popular", label: "POPULAR AREAS" },
//       ],
//       content: {
//         main: {
//           title: `RESIDENTIAL PROPERTIES IN ${currentCity.toUpperCase()}`,
//           links: [
//             { label: "Flats / Apartments", path: "/flats" },
//             { label: "Villas & Independent Houses", path: "/villas" },
//             { label: "New Launch Projects", path: "/new-projects" },
//           ],
//           popular: [
//             { label: "Ready to Move Flats", path: "/ready-to-move" },
//             { label: "Affordable Housing", path: "/affordable" },
//           ],
//         },
//         commercial: {
//           title: "COMMERCIAL BUY ASSETS",
//           links: [
//             { label: "Commercial Office Spaces", path: "/commercial" },
//             { label: "Shops & Showrooms", path: "/shops" },
//           ],
//           popular: [{ label: "Industrial Plots", path: "/industrial" }],
//         },
//         popular: {
//           title: "TRENDING SEARCHES",
//           links: [
//             { label: "Properties Under 50 Lakhs", path: "/under-50-lakh" },
//             { label: "💎 Luxury Collection", path: "/luxury" },
//           ],
//         },
//       },
//     },
//     tenants: {
//       sidebar: [
//         { id: "main", label: "RENT A HOME" },
//         { id: "commercial", label: "COMMERCIAL RENT" },
//         { id: "popular", label: "POPULAR AREAS" },
//       ],
//       content: {
//         main: {
//           title: `PROPERTIES FOR RENT IN ${currentCity.toUpperCase()}`,
//           links: [
//             { label: "Flats / Apartments", path: "/flats" },
//             { label: "Houses & Villas", path: "/villas" },
//           ],
//           popular: [
//             { label: "Ready to Move Options", path: "/ready-to-move" },
//             { label: "Affordable Rental Homes", path: "/affordable" },
//           ],
//         },
//         commercial: {
//           title: "COMMERCIAL SPACES ON RENT",
//           links: [
//             { label: "Commercial Business Centers", path: "/commercial" },
//             { label: "Shops for Rent", path: "/shops" },
//           ],
//           popular: [{ label: "Industrial Hubs", path: "/industrial" }],
//         },
//         popular: {
//           title: "BUDGET RENTALS",
//           links: [
//             {
//               label: "Rentals Under 50 Lakh Budget Area",
//               path: "/under-50-lakh",
//             },
//             { label: "Premium Luxury Spaces", path: "/luxury" },
//           ],
//         },
//       },
//     },
//     owners: {
//       sidebar: [{ id: "main", label: "POST PROPERTY" }],
//       content: {
//         main: {
//           title: "FOR PROPERTY OWNERS",
//           links: [{ label: "Post Property for Free", path: "/post-property" }],
//           popular: [
//             { label: "Manage Active Profile Dashboard", path: "/dashboard" },
//           ],
//         },
//       },
//     },
//     dealers: {
//       sidebar: [{ id: "main", label: "DEALER SPACE" }],
//       content: {
//         main: {
//           title: "PARTNER PORTAL",
//           links: [
//             { label: "Access Agent Dashboard", path: "/dashboard" },
//             { label: "Post Client Properties", path: "/post-property" },
//           ],
//         },
//       },
//     },
//     insights: {
//       sidebar: [{ id: "main", label: "MARKET WATCH" }],
//       content: {
//         main: {
//           title: "DATA TRENDS",
//           links: [
//             { label: "View Luxury Projects Analytics", path: "/luxury" },
//             { label: "New Launch Studies", path: "/new-projects" },
//           ],
//         },
//       },
//     },
//   };

//   const currentMenuData = menuData[activeMenu] || menuData["buyers"];
//   const currentSubTab =
//     currentMenuData.content[activeSubTab] || currentMenuData.content["main"];

//   return (
//     <div
//       className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[900px] bg-[#f9f9f9] text-slate-800 rounded-b-xl shadow-2xl border border-slate-200 flex overflow-hidden z-50"
//       onMouseLeave={() => setActiveSubTab("main")}
//     >
//       {/* ─── LEFT SIDEBAR PANEL ─── */}
//       <div className="w-[240px] bg-[#eef1f5] border-r border-slate-200 p-4 flex flex-col justify-between shrink-0">
//         <div className="space-y-1">
//           {currentMenuData.sidebar.map((tab) => (
//             <button
//               key={tab.id}
//               onMouseEnter={() =>
//                 currentMenuData.content[tab.id] && setActiveSubTab(tab.id)
//               }
//               className={`w-full text-left font-bold text-[11px] tracking-wider px-4 py-3 rounded-md transition-all uppercase cursor-pointer ${
//                 activeSubTab === tab.id
//                   ? "bg-white text-[#0073e1] shadow-2xs"
//                   : "text-slate-600 hover:bg-white/50"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//         <div className="pt-6 border-t border-slate-200/60 pl-4">
//           <p className="text-[10px] text-slate-400 font-medium">
//             contact us toll free on
//           </p>
//           <p className="text-xs font-black text-slate-700 mt-0.5">
//             1800 41 99099
//           </p>
//         </div>
//       </div>

//       {/* ─── DYNAMIC CONTENT CONTAINER ─── */}
//       <div className="flex-1 bg-white p-6 flex flex-col justify-between min-h-[320px]">
//         <div className="grid grid-cols-2 gap-8 text-left">
//           {/* Main Sub Links */}
//           <div className="space-y-3.5">
//             <h4 className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
//               {currentSubTab.title}
//             </h4>
//             <ul className="space-y-2 text-xs font-semibold text-slate-600">
//               {currentSubTab.links?.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.path}
//                     onClick={onLinkClick}
//                     className="hover:text-[#0073e1] transition-colors block py-0.5"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Popular Searches Links */}
//           {currentSubTab.popular && (
//             <div className="space-y-3.5">
//               <h4 className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
//                 POPULAR SEARCHES
//               </h4>
//               <ul className="space-y-2 text-xs font-semibold text-slate-600">
//                 {currentSubTab.popular.map((link, i) => (
//                   <li key={i}>
//                     <Link
//                       to={link.path}
//                       onClick={onLinkClick}
//                       className="hover:text-[#0073e1] transition-colors block py-0.5"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Bottom Bar */}
//         <div className="text-[10px] text-slate-400 font-medium border-t border-slate-100 pt-4 mt-6 text-left">
//           Email us at{" "}
//           <span className="text-slate-500 font-semibold">
//             services@estatepro.com
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavMegaMenu;
import { useState } from "react";
import { Link } from "react-router-dom";

function NavMegaMenu({ activeMenu, currentCity, onLinkClick }) {
  const [activeSubTab, setActiveSubTab] = useState("main");

  if (!activeMenu) return null;

  const menuData = {
    buyers: {
      sidebar: [
        { id: "main", label: "BUY A HOME" },
        { id: "commercial", label: "COMMERCIAL BUY" },
        { id: "popular", label: "POPULAR AREAS" },
      ],
      content: {
        main: {
          title: `RESIDENTIAL PROPERTIES IN ${currentCity.toUpperCase()}`,
          links: [
            { label: "Flats / Apartments", path: "/flats" },
            { label: "Independent House / Villa", path: "/villas" },
            { label: "Builder Floors", path: "/builder-floors" },
            { label: "Plots / Land", path: "/plots" },
            { label: "Ready to Move", path: "/ready-to-move" },
            { label: "New Launch Projects", path: "/new-projects" },
          ],
          popular: [
            { label: "Affordable Housing", path: "/affordable" },
            { label: "Under 50 Lakhs", path: "/under-50-lakh" },
            { label: "Luxury Collection", path: "/luxury" },
          ],
        },
        commercial: {
          title: "COMMERCIAL BUY",
          links: [
            { label: "Commercial Office", path: "/commercial" },
            { label: "Shops & Showrooms", path: "/shops" },
            { label: "Industrial Property", path: "/industrial" },
          ],
        },
        popular: {
          title: `POPULAR SEARCHES IN ${currentCity.toUpperCase()}`,
          links: [
            { label: `Flats in ${currentCity}`, path: "/flats" },
            { label: `Villas in ${currentCity}`, path: "/villas" },
            { label: `Luxury Homes`, path: "/luxury" },
            { label: `Affordable Homes`, path: "/affordable" },
          ],
        },
      },
    },
    tenants: {
      sidebar: [
        { id: "main", label: "RENT A HOME" },
        { id: "commercial", label: "COMMERCIAL RENT" },
        { id: "popular", label: "POPULAR AREAS" },
      ],
      content: {
        main: {
          title: `RENTAL PROPERTIES IN ${currentCity.toUpperCase()}`,
          links: [
            { label: "Flats / Apartments", path: "/flats" },
            { label: "Independent House", path: "/villas" },
            { label: "Builder Floors", path: "/builder-floors" },
          ],
          popular: [
            { label: "Ready to Move", path: "/ready-to-move" },
            { label: "Affordable Rentals", path: "/affordable" },
          ],
        },
        commercial: {
          title: "COMMERCIAL RENT",
          links: [
            { label: "Office Spaces", path: "/commercial" },
            { label: "Retail Shops", path: "/shops" },
          ],
        },
        popular: {
          title: "TRENDING RENTALS",
          links: [
            { label: "Luxury Rentals", path: "/luxury" },
            { label: "Budget Rentals", path: "/under-50-lakh" },
          ],
        },
      },
    },
    owners: {
      sidebar: [{ id: "main", label: "POST PROPERTY" }],
      content: {
        main: {
          title: "FOR PROPERTY OWNERS",
          links: [
            { label: "Post Property for FREE", path: "/post-property" },
            { label: "Dashboard", path: "/dashboard" },
          ],
        },
      },
    },
    dealers: {
      sidebar: [{ id: "main", label: "DEALER PANEL" }],
      content: {
        main: {
          title: "DEALER SERVICES",
          links: [
            { label: "Dealer Dashboard", path: "/dashboard" },
            { label: "Post Client Property", path: "/post-property" },
          ],
        },
      },
    },
    insights: {
      sidebar: [{ id: "main", label: "MARKET INSIGHTS" }],
      content: {
        main: {
          title: "REAL ESTATE INSIGHTS",
          links: [
            { label: "Luxury Market", path: "/luxury" },
            { label: "New Projects", path: "/new-projects" },
          ],
        },
      },
    },
  };

  const currentMenuData = menuData[activeMenu] || menuData.buyers;
  const currentSubTab =
    currentMenuData.content[activeSubTab] || currentMenuData.content.main;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 z-50 flex w-[920px] overflow-hidden rounded-b-2xl border border-slate-200 bg-white shadow-2xl"
      onMouseLeave={() => setActiveSubTab("main")}
    >
      {/* Left Sidebar */}
      <div className="w-64 bg-slate-50 border-r border-slate-200 p-5 shrink-0 flex flex-col justify-between">
        <div className="space-y-2">
          {currentMenuData.sidebar.map((item) => (
            <button
              key={item.id}
              onMouseEnter={() =>
                currentMenuData.content[item.id] && setActiveSubTab(item.id)
              }
              className={`w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition cursor-pointer ${
                activeSubTab === item.id
                  ? "bg-white text-blue-600 shadow"
                  : "text-slate-600 hover:bg-white hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-10 border-t pt-5">
          <p className="text-xs text-slate-500">Contact us toll free</p>
          <h3 className="mt-1 font-bold text-slate-800">1800 41 99099</h3>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-8 min-h-[320px] flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-12 text-left">
          {/* Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              {currentSubTab.title}
            </h3>
            <ul className="space-y-3">
              {currentSubTab.links?.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    onClick={onLinkClick}
                    className="block text-sm font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          {currentSubTab.popular && (
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                Popular Searches
              </h3>
              <ul className="space-y-3">
                {currentSubTab.popular.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      onClick={onLinkClick}
                      className="block text-sm font-medium text-slate-700 transition hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-500 text-left">
          Email us at{" "}
          <span className="font-semibold text-slate-700">
            services@estatepro.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavMegaMenu;
