'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';

const SectionCover = () => {
  const typeText = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('#sketch-img', {
        scale: 0,
        opacity: 0,
      });
      gsap.from('#all-text', {
        scrollTrigger: {
          trigger: '#all-text',
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
        y: 120,
        opacity: 0,
      });
    }, typeText);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={typeText}>
      <div id="section-cover">
        <Image
          id="sketch-img"
          src="/house-sketch.png"
          alt="house sketch architecture"
          sizes="100vw"
          width={2500}
          height={1406}
          className="w-full h-auto"
        />
        <div>
          <h2
            id="all-text"
            className="container text-5xl md:text-6xl lg:text-7xl !leading-relaxed"
          >
            We are dedicated to{' '}
            <span id="type-animate" className="font-merriweather">
              Crafting extraordinary Spaces
            </span>{' '}
            that - inspire & Stand the test of time
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SectionCover;
