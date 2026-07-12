// import SearchSelect from "./SearchSelect";
// import { locations, propertyTypes, priceRanges } from "./searchData";
// import {
//   FaMagnifyingGlass,
//   FaHouseChimney,
//   FaShieldHeart,
// } from "react-icons/fa6";

// function PropertySearch() {
//   return (
//     <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Heading */}
//         <div className="mx-auto mb-14 max-w-3xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
//             <FaHouseChimney />
//             Premium Property Search
//           </span>

//           <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
//             Find Your Perfect Property
//           </h2>

//           <p className="mt-5 text-lg leading-8 text-gray-600">
//             Browse thousands of verified luxury villas, apartments, penthouses
//             and commercial spaces with our advanced search.
//           </p>
//         </div>

//         {/* Search Card */}
//         <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
//           <div className="grid gap-6 lg:grid-cols-4">
//             <SearchSelect label="Location" options={locations} />

//             <SearchSelect label="Property Type" options={propertyTypes} />

//             <SearchSelect label="Budget" options={priceRanges} />

//             <div className="flex items-end">
//               <button
//                 className="
//                 flex
//                 w-full
//                 items-center
//                 justify-center
//                 gap-3
//                 rounded-2xl
//                 bg-blue-600
//                 py-4
//                 text-lg
//                 font-bold
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:bg-blue-700
//                 hover:shadow-xl
//                 "
//               >
//                 <FaMagnifyingGlass />
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Bottom */}
//           <div className="mt-10 border-t border-gray-200 pt-8">
//             <div className="grid gap-6 text-center md:grid-cols-3">
//               <div>
//                 <h3 className="text-3xl font-black text-blue-600">15K+</h3>

//                 <p className="mt-2 text-gray-600">Verified Listings</p>
//               </div>

//               <div>
//                 <h3 className="text-3xl font-black text-blue-600">850+</h3>

//                 <p className="mt-2 text-gray-600">Certified Agents</p>
//               </div>

//               <div>
//                 <div className="flex justify-center text-blue-600 text-2xl">
//                   <FaShieldHeart />
//                 </div>

//                 <h3 className="mt-2 text-xl font-bold text-gray-900">
//                   Secure & Trusted
//                 </h3>

//                 <p className="mt-2 text-gray-600">
//                   Every listing is manually verified before publishing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PropertySearch;

import SearchSelect from "./SearchSelect";
import { locations, propertyTypes, priceRanges } from "./searchData";
import {
  FaMagnifyingGlass,
  FaHouseChimney,
  FaShieldHeart,
} from "react-icons/fa6";

function PropertySearch() {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: "linear-gradient(to bottom, #f9fafb, #ffffff)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            <FaHouseChimney />
            Premium Property Search
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Find Your Perfect Property
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Browse thousands of verified luxury villas, apartments, penthouses
            and commercial spaces with our advanced search.
          </p>
        </div>

        {/* Search Card */}
        <div
          className="border border-gray-200 bg-white p-10"
          style={{
            borderRadius: "32px",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="grid gap-6 lg:grid-cols-4">
            <SearchSelect label="Location" options={locations} />

            <SearchSelect label="Property Type" options={propertyTypes} />

            <SearchSelect label="Budget" options={priceRanges} />

            <div className="flex items-end">
              <button
                className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-blue-600
                py-4
                text-lg
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-xl
                "
              >
                <FaMagnifyingGlass />
                Search
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-gray-200 pt-8">
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-black text-blue-600">15K+</h3>

                <p className="mt-2 text-gray-600">Verified Listings</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-blue-600">850+</h3>

                <p className="mt-2 text-gray-600">Certified Agents</p>
              </div>

              <div>
                <div className="flex justify-center text-blue-600 text-2xl">
                  <FaShieldHeart />
                </div>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  Secure & Trusted
                </h3>

                <p className="mt-2 text-gray-600">
                  Every listing is manually verified before publishing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertySearch;
