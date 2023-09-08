'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

const SectionPortfolioInfo = () => {
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('#porto-info-left', {
        scrollTrigger: {
          trigger: '#porto-info-container',
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
        },
        y: 100,
      });

      gsap.from('#porto-info-main-text', {
        scrollTrigger: {
          trigger: '#porto-info-container',
          start: 'bottom bottom',
          end: 'bottom center',
        },
        scale: 0,
        opacity: 0,
        transformOrigin: 'left center',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="mt-44">
      <div
        id="porto-info-container"
        className=" flex flex-col lg:flex-row lg:justify-between gap-x-16 gap-y-10 lg:items-center"
      >
        <div
          id="porto-info-left"
          className="order-2 lg:order-1 flex flex-col gap-y-6 text-base"
        >
          <p className="w-[220px]">
            Our portfolio represents the culmination of creativity & expertise
            in architecture.
          </p>
          <div>
            <button
              id="more-project-btn"
              className="rounded-full text-sm px-4 py-2 bg-secondary"
            >
              More Projects
            </button>
          </div>
        </div>
        <div
          id="porto-info-main-text"
          className="order-1 lg:order-2 text-4xl sm:text-6xl lg:text-6xl xl:text-7xl !leading-chill"
        >
          Creating{' '}
          <span className="font-merriweather">Extraordinary Spaces</span> is
          what we do
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolioInfo;
