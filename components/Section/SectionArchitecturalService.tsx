'use client';

import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SectionArchitecturalService = () => {
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('#arrow', {
        scrollTrigger: {
          trigger: '#arch-service-container',
          start: 'bottom bottom',
          // end: 'bottom center',
          markers: true,
        },
        x: -200,
        scaleY: 0,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className=" mt-40">
      <div id="arch-service-container" className="relative">
        <h2 className="text-4xl md:text-6xl lg:text-7xl !leading-chill">
          We offer a{' '}
          <span className="font-merriweather">Comprehensive Range</span> of
          architectural services
        </h2>
        <div className="mt-10 flex items-center gap-x-6 md:gap-x-14 md:pl-10 lg:pl-36 lg:gap-x-28">
          <div>
            <Image
              id="arrow"
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
            completion, we work tirelessly to transform your vision into
            reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionArchitecturalService;
