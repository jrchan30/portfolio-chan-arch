import Image from 'next/image';
import React from 'react';

const SectionArchitecturalService = () => {
  return (
    <section className="relative mt-40">
      <h2 className="text-4xl md:text-6xl lg:text-7xl !leading-chill">
        We offer a{' '}
        <span className="font-merriweather">Comprehensive Range</span> of
        architectural services
      </h2>
      <div className="mt-10 flex items-center gap-x-6 md:gap-x-14 md:pl-10 lg:pl-36 lg:gap-x-28">
        <div>
          <Image
            src="/brushed-arrow.png"
            alt="arrow illustration"
            width={0}
            height={0}
            sizes="100vw"
            className="min-w-[3rem] md:min-w-[5rem] lg:min-w-[7rem] h-auto"
          />
        </div>
        <p className="max-w-lg">
          Our team of highly skilled architects and designers are committed to
          delivering excellence in every project we undertake. From concept to
          completion, we work tirelessly to transform your vision into reality.
        </p>
      </div>
    </section>
  );
};

export default SectionArchitecturalService;
