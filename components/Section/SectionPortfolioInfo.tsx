import React from 'react';

const SectionPortfolioInfo = () => {
  return (
    <section className="mt-44 flex flex-col lg:flex-row lg:justify-between gap-x-16 gap-y-10 lg:items-center">
      <div className="order-2 lg:order-1 flex flex-col gap-y-6 text-base">
        <p className="w-[220px]">
          Our portfolio represents the culmination of creativity & expertise in
          architecture.
        </p>
        <div>
          <button className="rounded-full text-sm px-4 py-2 bg-secondary">
            More Projects
          </button>
        </div>
      </div>
      <div className="order-1 lg:order-2 text-4xl sm:text-6xl lg:text-6xl xl:text-7xl !leading-chill">
        Creating <span className="font-merriweather">Extraordinary Spaces</span>{' '}
        is what we do
      </div>
    </section>
  );
};

export default SectionPortfolioInfo;
