'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

const SectionFounderInfo = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('#complimentary-square', {
        scrollTrigger: {
          trigger: '#squares-container',
          start: 'top bottom',
          end: '-150 center',
          scrub: true,
        },
        y: -120,
        x: -120,
        opacity: 0,
      });

      gsap.from('#secondary-square', {
        scrollTrigger: {
          trigger: '#squares-container',
          start: '250 bottom',
          end: 'center center',
          scrub: true,
        },
        scale: 0,
        opacity: 0,
      });

      gsap.from('#text-1', {
        scrollTrigger: {
          trigger: '#squares-container',
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
        y: 200,
        x: 100,
        opacity: 0,
      });

      gsap.from('#text-2', {
        scrollTrigger: {
          trigger: '#squares-container',
          start: '150 bottom',
          end: 'center center',
          scrub: true,
        },
        y: 200,
        x: 150,
        opacity: 0,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="mt-16 max-w-[1200px] flex flex-col gap-y-8 text-center text-lg md:flex-row md:text-left md:text-sm justify-between gap-x-10 items-center"
    >
      <div id="squares-container" className="relative mb-8 md:mb-0">
        <div
          id="complimentary-square"
          className="bg-complimentary w-40 h-40"
        ></div>
        <div
          id="secondary-square"
          className="absolute bg-secondary top-[15%] left-[15%] w-40 h-40 flex flex-col items-center justify-center text-4xl "
        >
          <div className="flex flex-col">
            <span>Chan-</span>
            <span className="!font-merriweather font-bold">arch</span>
          </div>
        </div>
      </div>
      <div
        id="text-1"
        className="md:ml-4 md:max-w-[350px] leading-relaxed tracking-widest"
      >
        Founded by Russell Chan with a dream of creating spaces that inspire and
        uplift. Chan-arch embarked on its journey in the heart of Jakarta.
        Combining artistry and technical expertise, the agency challenged
        conventions.
      </div>
      <div
        id="text-2"
        className="md:max-w-[350px] leading-relaxed tracking-widest"
      >
        Chan-arch significant strides in incorporating innovation and
        environmental consciousness into its designs. Into reducing the
        ecological footprint, this commitment position the agency as a thought
        leader.
      </div>
    </section>
  );
};

export default SectionFounderInfo;
