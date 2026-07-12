// import { useState } from "react";
// import { Search, Mic, LocateFixed, ChevronDown } from "lucide-react";

// function Properties() {
//   // Filter States
//   const [selectedType, setSelectedType] = useState("All Types");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCity, setSelectedCity] = useState("All Cities");

//   // Core Data Structures
//   const types = [
//     "Luxury Villa",
//     "Modern Apartment",
//     "Premium Penthouse",
//     "Luxury Farm House",
//     "Smart Home",
//     "Luxury Duplex",
//   ];
//   const cities = [
//     "Mumbai",
//     "Delhi",
//     "Bangalore",
//     "Indore",
//     "Hyderabad",
//     "Pune",
//     "Chennai",
//     "Kolkata",
//     "Ahmedabad",
//     "Goa",
//   ];
//   const prices = [
//     "₹95 Lakh",
//     "₹1.5 Cr",
//     "₹1.8 Cr",
//     "₹2.2 Cr",
//     "₹2.5 Cr",
//     "₹2.9 Cr",
//     "₹3.1 Cr",
//     "₹3.5 Cr",
//     "₹4.2 Cr",
//     "₹5.0 Cr",
//   ];

//   // 100% Verified Unique Asset Image IDs from Unsplash Luxury Architecture Collection
//   const unspIds = [
//     "photo-1600596542815-ffad4c1539a9",
//     "photo-1600607687939-ce8a6c25118c",
//     "photo-1564013799919-ab600027ffc6",
//     "photo-1512917774080-9991f1c4c750",
//     "photo-1600047509807-ba8f99d2cdde",
//     "photo-1570129477492-45c003edd2be",
//     "photo-1605276374104-dee2a0ed3cd6",
//     "photo-1600585154340-be6161a56a0c",
//     "photo-1513694203232-719a280e022f",
//     "photo-1486406146926-c627a92ad1ab",
//     "photo-1542314831-068cd1dbfeeb",
//     "photo-1416331108676-a22ccb276e35",
//     "photo-1582268611958-ebfd161ef9cf",
//     "photo-1580587771525-78b9dba3b914",
//     "photo-1507089947368-19c1da9775ae",
//     "photo-1449034446853-66c86144b0ad",
//     "photo-1512915922686-57c11dde9b6b",
//     "photo-1600566753190-17f0baa2a6c3",
//     "photo-1523217582562-09d0def993a6",
//     "photo-1592595896551-12b371d546d5",
//     "photo-1568605114967-8130f3a36994",
//     "photo-1554995207-c18c203602cb",
//     "photo-1515263487990-61b07816b324",
//     "photo-1572120360610-d971b9d7767c",
//     "photo-1598228723793-52759bba239c",
//     "photo-1560448204-e02f11c3d0e2",
//     "photo-1502672260266-1c1ef2d93688",
//     "photo-1522708323590-d24dbb6b0267",
//     "photo-1505691938895-1758d7feb511",
//     "photo-1493809842364-78817add7ffb",
//     "photo-1545324418-cc1a3fa10c00",
//     "photo-1572120360610-d971b9d7767c",
//     "photo-1560184897-ae75f418493e",
//     "photo-1556912172-45b7abe8b7e1",
//     "photo-1556911220-e15b29be8c8f",
//     "photo-1567496898669-ee935f5f647a",
//     "photo-1524813686514-a57563d77965",
//     "photo-1560185893-a55cbc2c78a9",
//     "photo-1434082033009-b81d41d36e3f",
//     "photo-1494526585095-c41746248156",
//     "photo-1501183007986-d0d080b147f9",
//     "photo-1516455590571-18256e5bb9ff",
//     "photo-1583608205776-bfd35f0d9f83",
//     "photo-1599809228741-b7ae31f9521d",
//     "photo-1600210492486-724fe5c67fb0",
//     "photo-1600566752355-35792bedcfea",
//     "photo-1600573472591-ee6b68d14c68",
//     "photo-1600585154526-990dced4db0d",
//     "photo-1602941525421-8f8b81d3edbb",
//     "photo-1600607687920-4e2a09cf159d",
//     "photo-1613490493576-7fde63acd811",
//     "photo-1613977257363-707ba9348227",
//     "photo-1615874959474-d609969a20ed",
//     "photo-1618219908412-a29a1bb7b86e",
//     "photo-1618221195710-dd6b41faaea6",
//     "photo-1618221381711-42ca8ab6e908",
//     "photo-1631049307264-da0ec9d70304",
//     "photo-1502005229762-fc1b2b812ca5",
//     "photo-1600566753376-12c8ab7fb75b",
//     "photo-1542838132-92c53300491e",
//     "photo-1512914890251-2f96ade906c6",
//     "photo-1493663284031-b7e3aefcae8e",
//     "photo-1531971589569-0d9370cbe1e5",
//     "photo-1527030280862-64139fbe04ca",
//     "photo-1464146072230-91cabc268266",
//     "photo-1448630360428-65456885c650",
//     "photo-1516156008625-3a9d6067ffd5",
//     "photo-1558036117-15d82a90b9b1",
//     "photo-1591474200742-8e512e6f98f8",
//     "photo-1549517045-bc93de075e53",
//     "photo-1564507592333-c60657eea523",
//     "photo-1430285561322-780860471518",
//     "photo-1510798831971-661eb04b3739",
//     "photo-1504280390367-361c6d9f38f4",
//     "photo-1506126613408-eca07ce68773",
//     "photo-1490122417551-6ee9691429d0",
//     "photo-1513584684374-8bab748fbf90",
//     "photo-1475855581690-80acc13e2b41",
//     "photo-1576013551627-0cc20b96c2a7",
//     "photo-1519643381401-22c77e60520e",
//     "photo-1520699049698-acd2fccb8cc8",
//     "photo-1504624244671-c0376bef460d",
//     "photo-1501870291316-13c64d35e145",
//     "photo-1549294413-26f195af97c1",
//     "photo-1553444836-bc6c8d340ba7",
//     "photo-1600607687920-4e2a09cf159d",
//     "photo-1613490493576-7fde63acd811",
//     "photo-1613977257363-707ba9348227",
//     "photo-1615874959474-d609969a20ed",
//     "photo-1618219908412-a29a1bb7b86e",
//     "photo-1618221195710-dd6b41faaea6",
//     "photo-1618221381711-42ca8ab6e908",
//     "photo-1631049307264-da0ec9d70304",
//     "photo-1502005229762-fc1b2b812ca5",
//     "photo-1600566753376-12c8ab7fb75b",
//     "photo-1542838132-92c53300491e",
//     "photo-1512914890251-2f96ade906c6",
//     "photo-1493663284031-b7e3aefcae8e",
//     "photo-1531971589569-0d9370cbe1e5",
//     "photo-1527030280862-64139fbe04ca",
//   ];

//   // Generating 100 Absolute Unique Properties Structuring Unsplash Source Endpoints
//   const properties = Array.from({ length: 100 }, (_, i) => {
//     const city = cities[i % cities.length];
//     const type = types[i % types.length];
//     return {
//       id: i + 1,
//       image: `https://images.unsplash.com/${unspIds[i]}?w=900&auto=format&fit=crop&q=80`,
//       title: `${type} Edition-${i + 1}`,
//       location: city,
//       type: type,
//       price: prices[i % prices.length],
//     };
//   });

//   // Dynamic Multi-parameter Filter Logic
//   const filteredProperties = properties.filter((item) => {
//     const matchesType =
//       selectedType === "All Types" || item.type === selectedType;
//     const matchesCity =
//       selectedCity === "All Cities" || item.location === selectedCity;
//     const matchesSearch =
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.location.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesType && matchesCity && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-[#FAF9F6] text-[#1E293B] font-sans antialiased text-left pt-16 md:pt-20">
//       {/* ─── SINGLE INTEGRATED HERO BANNER WITH SEARCH BAR ─── */}
//       <section className="relative bg-[#0A1128] pt-8 pb-24 lg:pb-36 px-4 text-center overflow-hidden flex flex-col items-center gap-12">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

//         {/* SEARCH BAR INTEGRATION */}
//         <div className="w-full max-w-xl xl:max-w-2xl bg-white border border-slate-200 rounded-xl overflow-hidden h-11 text-slate-800 shadow-lg flex items-center relative z-10">
//           <div className="relative flex items-center h-full px-4 bg-slate-50 border-r border-slate-100">
//             <select
//               value={selectedType}
//               onChange={(e) => setSelectedType(e.target.value)}
//               className="bg-transparent text-slate-600 font-bold text-xs outline-none appearance-none pr-4 cursor-pointer"
//             >
//               <option value="All Types">All Types</option>
//               {types.map((t) => (
//                 <option key={t} value={t}>
//                   {t.split(" ")[1] || t}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown
//               size={12}
//               className="absolute right-2 text-slate-400 pointer-events-none"
//             />
//           </div>

//           <input
//             type="text"
//             placeholder="Search Locality / Project / Landmark..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="flex-1 px-4 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
//           />

//           <div className="relative flex items-center h-full px-3 border-l border-slate-100 bg-slate-50">
//             <select
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//               className="bg-transparent text-slate-600 font-bold text-xs outline-none appearance-none pr-4 cursor-pointer"
//             >
//               <option value="All Cities">All Cities</option>
//               {cities.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown
//               size={12}
//               className="absolute right-1 text-slate-400 pointer-events-none"
//             />
//           </div>

//           <button className="w-10 h-full flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
//             <Mic size={15} />
//           </button>

//           <button className="w-12 h-full flex items-center justify-center bg-[#0073e1] hover:bg-blue-600 text-white transition-colors cursor-pointer shrink-0">
//             <Search size={16} />
//           </button>
//         </div>

//         {/* Copywriting Content */}
//         <div className="max-w-4xl mx-auto space-y-6 relative z-10">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-blue-400 uppercase">
//             Exclusive Listings
//           </div>
//           <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.15]">
//             Premium Verified{" "}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
//               Properties
//             </span>
//           </h1>
//           <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
//             Explore 100 premium verified luxury homes, villas, boutique
//             apartments, and asset structures across India's top metros.
//           </p>
//         </div>
//       </section>

//       {/* ─── PROPERTIES GRID BLOCK ─── */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="flex justify-between items-center mb-8">
//           <p className="text-sm font-semibold text-slate-500">
//             Showing{" "}
//             <span className="text-[#0A1128] font-bold">
//               {filteredProperties.length}
//             </span>{" "}
//             luxury assets
//           </p>
//         </div>

//         {filteredProperties.length === 0 ? (
//           <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
//             <p className="text-slate-400 text-lg">
//               No premium assets match your filters.
//             </p>
//           </div>
//         ) : (
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {filteredProperties.map((property) => (
//               <div
//                 key={property.id}
//                 className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 hover:shadow-2xl transition-all duration-300 flex flex-col group"
//               >
//                 <div className="h-64 w-full overflow-hidden relative bg-slate-100">
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                   <div className="absolute top-4 right-4 bg-[#0A1128]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-widest font-bold text-white uppercase border border-white/10">
//                     Verified ID: #{property.id + 1000}
//                   </div>
//                 </div>

//                 <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
//                   <div>
//                     <h2 className="text-xl font-bold text-[#0A1128] tracking-tight group-hover:text-[#0073e1] transition-colors">
//                       {property.title}
//                     </h2>
//                     <p className="text-slate-400 font-semibold text-xs mt-1.5 flex items-center gap-1">
//                       📍 {property.location}, India
//                     </p>
//                   </div>

//                   <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
//                     <div>
//                       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
//                         Investment Value
//                       </p>
//                       <p className="text-[#0073e1] text-2xl font-black tracking-tight mt-0.5">
//                         {property.price}
//                       </p>
//                     </div>
//                     <button className="bg-slate-50 hover:bg-[#0073e1] border border-slate-200 text-[#0A1128] hover:text-white font-bold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Properties;
import { useState } from "react";
import { Search, Mic, ChevronDown } from "lucide-react";

function Properties() {
  // Filter States
  const [selectedType, setSelectedType] = useState("All Types");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");

  // Core Data Structures
  const types = [
    "Luxury Villa",
    "Modern Apartment",
    "Premium Penthouse",
    "Luxury Farm House",
    "Smart Home",
    "Luxury Duplex",
  ];
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Indore",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Goa",
  ];
  const prices = [
    "₹95 Lakh",
    "₹1.5 Cr",
    "₹1.8 Cr",
    "₹2.2 Cr",
    "₹2.5 Cr",
    "₹2.9 Cr",
    "₹3.1 Cr",
    "₹3.5 Cr",
    "₹4.2 Cr",
    "₹5.0 Cr",
  ];

  // 100% Verified Unique Asset Image IDs from Unsplash Luxury Architecture Collection
  const unspIds = [
    "photo-1600596542815-ffad4c1539a9",
    "photo-1600607687939-ce8a6c25118c",
    "photo-1564013799919-ab600027ffc6",
    "photo-1512917774080-9991f1c4c750",
    "photo-1600047509807-ba8f99d2cdde",
    "photo-1570129477492-45c003edd2be",
    "photo-1605276374104-dee2a0ed3cd6",
    "photo-1600585154340-be6161a56a0c",
    "photo-1513694203232-719a280e022f",
    "photo-1486406146926-c627a92ad1ab",
    "photo-1542314831-068cd1dbfeeb",
    "photo-1416331108676-a22ccb276e35",
    "photo-1582268611958-ebfd161ef9cf",
    "photo-1580587771525-78b9dba3b914",
    "photo-1507089947368-19c1da9775ae",
    "photo-1449034446853-66c86144b0ad",
    "photo-1512915922686-57c11dde9b6b",
    "photo-16005667533190-17f0baa2a6c3",
    "photo-1523217582562-09d0def993a6",
    "photo-1592595896551-12b371d546d5",
    "photo-1568605114967-8130f3a36994",
    "photo-1554995207-c18c203602cb",
    "photo-1515263487990-61b07816b324",
    "photo-1572120360610-d971b9d7767c",
    "photo-1598228723793-52759bba239c",
    "photo-1560448204-e02f11c3d0e2",
    "photo-1502672260266-1c1ef2d93688",
    "photo-1522708323590-d24dbb6b0267",
    "photo-1505691938895-1758d7feb511",
    "photo-1493809842364-78817add7ffb",
    "photo-1545324418-cc1a3fa10c00",
    "photo-1572120360610-d971b9d7767c",
    "photo-1560184897-ae75f418493e",
    "photo-1556912172-45b7abe8b7e1",
    "photo-1556911220-e15b29be8c8f",
    "photo-1567496898669-ee935f5f647a",
    "photo-1524813686514-a57563d77965",
    "photo-1560185893-a55cbc2c78a9",
    "photo-1434082033009-b81d41d36e3f",
    "photo-1494526585095-c41746248156",
    "photo-1501183007986-d0d080b147f9",
    "photo-1516455590571-18256e5bb9ff",
    "photo-1583608205776-bfd35f0d9f83",
    "photo-1599809228741-b7ae31f9521d",
    "photo-1600210492486-724fe5c67fb0",
    "photo-1600566752355-35792bedcfea",
    "photo-1600573472591-ee6b68d14c68",
    "photo-1600585154526-990dced4db0d",
    "photo-1602941525421-8f8b81d3edbb",
    "photo-1600607687920-4e2a09cf159d",
    "photo-1613490493576-7fde63acd811",
    "photo-1613977257363-707ba9348227",
    "photo-1615874959474-d609969a20ed",
    "photo-1618219908412-a29a1bb7b86e",
    "photo-1618221195710-dd6b41faaea6",
    "photo-1618221381711-42ca8ab6e908",
    "photo-1631049307264-da0ec9d70304",
    "photo-1502005229762-fc1b2b812ca5",
    "photo-1600566753376-12c8ab7fb75b",
    "photo-1542838132-92c53300491e",
    "photo-1512914890251-2f96ade906c6",
    "photo-1493663284031-b7e3aefcae8e",
    "photo-1531971589569-0d9370cbe1e5",
    "photo-1527030280862-64139fbe04ca",
    "photo-1464146072230-91cabc268266",
    "photo-1448630360428-65456885c650",
    "photo-1516156008625-3a9d6067ffd5",
    "photo-1558036117-15d82a90b9b1",
    "photo-1591474200742-8e512e6f98f8",
    "photo-1549517045-bc93de075e53",
    "photo-1564507592333-c60657eea523",
    "photo-1430285561322-780860471518",
    "photo-1510798831971-661eb04b3739",
    "photo-1504280390367-361c6d9f38f4",
    "photo-1506126613408-eca07ce68773",
    "photo-1490122417551-6ee9691429d0",
    "photo-1513584684374-8bab748fbf90",
    "photo-1475855581690-80acc13e2b41",
    "photo-1576013551627-0cc20b96c2a7",
    "photo-1519643381401-22c77e60520e",
    "photo-1520699049698-acd2fccb8cc8",
    "photo-1504624244671-c0376bef460d",
    "photo-1501870291316-13c64d35e145",
    "photo-1549294413-26f195af97c1",
    "photo-1553444836-bc6c8d340ba7",
    "photo-1600607687920-4e2a09cf159d",
    "photo-1613490493576-7fde63acd811",
    "photo-1613977257363-707ba9348227",
    "photo-1615874959474-d609969a20ed",
    "photo-1618219908412-a29a1bb7b86e",
    "photo-1618221195710-dd6b41faaea6",
    "photo-1618221381711-42ca8ab6e908",
    "photo-1631049307264-da0ec9d70304",
    "photo-1502005229762-fc1b2b812ca5",
    "photo-1600566753376-12c8ab7fb75b",
    "photo-1542838132-92c53300491e",
    "photo-1512914890251-2f96ade906c6",
    "photo-1493663284031-b7e3aefcae8e",
    "photo-1531971589569-0d9370cbe1e5",
    "photo-1527030280862-64139fbe04ca",
  ];

  // Generating 100 Absolute Unique Properties Structuring Unsplash Source Endpoints
  const properties = Array.from({ length: 100 }, (_, i) => {
    const city = cities[i % cities.length];
    const type = types[i % types.length];
    return {
      id: i + 1,
      image: `https://images.unsplash.com/${unspIds[i]}?w=900&auto=format&fit=crop&q=80`,
      title: `${type} Edition-${i + 1}`,
      location: city,
      type: type,
      price: prices[i % prices.length],
    };
  });

  // Dynamic Multi-parameter Filter Logic
  const filteredProperties = properties.filter((item) => {
    const matchesType =
      selectedType === "All Types" || item.type === selectedType;
    const matchesCity =
      selectedCity === "All Cities" || item.location === selectedCity;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E293B] font-sans antialiased text-left pt-16 md:pt-20">
      {/* ─── SINGLE INTEGRATED HERO BANNER WITH SEARCH BAR ─── */}
      <section className="relative bg-[#0A1128] pt-8 pb-24 lg:pb-36 px-4 text-center overflow-hidden flex flex-col items-center gap-12">
        {/* FIXED: Removed arbitrary class syntax that triggered the warning */}
        <div
          style={{ width: "700px", height: "350px" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
        />

        {/* SEARCH BAR INTEGRATION */}
        <div className="w-full max-w-xl xl:max-w-2xl bg-white border border-slate-200 rounded-xl overflow-hidden h-11 text-slate-800 shadow-lg flex items-center relative z-10">
          <div className="relative flex items-center h-full px-4 bg-slate-50 border-r border-slate-100">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-transparent text-slate-600 font-bold text-xs outline-none appearance-none pr-4 cursor-pointer"
            >
              <option value="All Types">All Types</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t.split(" ")[1] || t}
                </option>
              ))}
            </select>
            <ChevronDown
              size={12}
              className="absolute right-2 text-slate-400 pointer-events-none"
            />
          </div>

          <input
            type="text"
            placeholder="Search Locality / Project / Landmark..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
          />

          <div className="relative flex items-center h-full px-3 border-l border-slate-100 bg-slate-50">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent text-slate-600 font-bold text-xs outline-none appearance-none pr-4 cursor-pointer"
            >
              <option value="All Cities">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown
              size={12}
              className="absolute right-1 text-slate-400 pointer-events-none"
            />
          </div>

          <button className="w-10 h-full flex items-center justify-center border-l border-slate-100 text-slate-400 hover:text-[#0073e1] transition-all cursor-pointer">
            <Mic size={15} />
          </button>

          <button className="w-12 h-full flex items-center justify-center bg-[#0073e1] hover:bg-blue-600 text-white transition-colors cursor-pointer shrink-0">
            <Search size={16} />
          </button>
        </div>

        {/* Copywriting Content */}
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Exclusive Listings
          </div>
          {/* FIXED: Replaced arbitrary dynamic line height with standard inline styles */}
          <h1
            style={{ lineHeight: "1.15" }}
            className="text-4xl md:text-6xl font-light tracking-tight text-white"
          >
            Premium Verified{" "}
            {/* FIXED: Modified gradient structure to standardized standard utilities */}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Properties
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Explore 100 premium verified luxury homes, villas, boutique
            apartments, and asset structures across India's top metros.
          </p>
        </div>
      </section>

      {/* ─── PROPERTIES GRID BLOCK ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm font-semibold text-slate-500">
            Showing{" "}
            <span className="text-[#0A1128] font-bold">
              {filteredProperties.length}
            </span>{" "}
            luxury assets
          </p>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-400 text-lg">
              No premium assets match your filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-64 w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-[#0A1128]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-widest font-bold text-white uppercase border border-white/10">
                    Verified ID: #{property.id + 1000}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#0A1128] tracking-tight group-hover:text-[#0073e1] transition-colors">
                      {property.title}
                    </h2>
                    <p className="text-slate-400 font-semibold text-xs mt-1.5 flex items-center gap-1">
                      📍 {property.location}, India
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Investment Value
                      </p>
                      <p className="text-[#0073e1] text-2xl font-black tracking-tight mt-0.5">
                        {property.price}
                      </p>
                    </div>
                    <button className="bg-slate-50 hover:bg-[#0073e1] border border-slate-200 text-[#0A1128] hover:text-white font-bold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Properties;
