'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';

const SectionCompanyName = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const ourText = new SplitType('#brand-text', { types: 'chars' });
      const chars = ourText.chars;

      gsap.registerPlugin(ScrollTrigger);
      gsap.from(chars, {
        scrollTrigger: {
          trigger: '#brand-text',
          start: 'top bottom',
          end: 'center bottom',
        },
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: 'power4.out',
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="logo-container" className="mt-20">
      <div id="brand-text" className="text-center md:text-start text-[12.9vw]">
        <span>Chan-</span>
        <span className="!font-merriweather font-bold">arch</span>
      </div>
    </section>
  );
};

export default SectionCompanyName;
