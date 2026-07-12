import { exploreOptionsData } from "./exploreData"; // check your path

function ExploreOptions() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Sub-Header Text */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-slate-400">
            Get Started with Exploring Real Estate Options
          </p>
        </div>

        {/* Horizontal Scrollable Track for Mobile, Auto-Grid for Desktop */}
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
          {exploreOptionsData.map((item) => (
            <div
              key={item.id}
              className="group min-w-[180px] sm:min-w-[220px] lg:min-w-0 flex-1 snap-start flex flex-col cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] w-full border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-blue-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Optional "NEW" Badge Element */}
                {item.isNew && (
                  <div className="absolute top-2.5 left-2.5 bg-rose-500 text-[9px] font-black tracking-wider text-white uppercase px-1.5 py-0.5 rounded-md shadow-xs animate-pulse">
                    New
                  </div>
                )}
              </div>

              {/* Card Typography Title */}
              <h3 className="mt-4 text-sm md:text-base font-semibold text-slate-700 tracking-tight transition-colors group-hover:text-blue-600">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreOptions;
