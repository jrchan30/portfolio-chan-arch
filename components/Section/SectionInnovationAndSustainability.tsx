'use client';

import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface INumberInfoWidgetProps {
  countInfo: string;
  label: string;
}

const NumberInfoWidget = ({ countInfo, label }: INumberInfoWidgetProps) => {
  return (
    <div className="flex flex-col gap-y-4 text-center items-center">
      <div className="text-3xl lg:text-4xl">{countInfo}</div>
      <div className="text-xs capitalize">{label}</div>
    </div>
  );
};

const SectionInnovationAndSustainability = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('#building-left', {
        scrollTrigger: {
          trigger: '#building-left',
          start: 'top bottom',
          end: 'center bottom',
          scrub: true,
        },
        y: 200,
        x: -120,
        opacity: 0,
      });

      gsap.from('#building-left-text', {
        scrollTrigger: {
          trigger: '#building-left-text',
          start: '100 bottom',
          end: 'center bottom',
          scrub: true,
        },
        y: 50,
        opacity: 0,
      });

      gsap.from('#building-right', {
        scrollTrigger: {
          trigger: '#building-right',
          start: 'top bottom',
          end: 'center bottom',
          scrub: true,
        },
        y: 200,
        x: 120,
        opacity: 0,
      });

      gsap.from('#building-right-text', {
        scrollTrigger: {
          trigger: '#building-right-text',
          start: 'center bottom',
          end: 'center center',
          scrub: true,
        },
        opacity: 0,
        y: 120,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const numbersInfo = [
    {
      countInfo: '650+',
      label: 'Total Client',
    },
    {
      countInfo: '12+',
      label: 'Years Experience',
    },
    {
      countInfo: '10+',
      label: 'Talented Member',
    },
    {
      countInfo: '1230',
      label: 'Unit Launch',
    },
  ];

  return (
    <section ref={container} className="relative mt-32">
      <div className="relative md:grid grid-cols-3 gap-x-10">
        <Image
          id="building-left"
          src="/building-jagged.jpg"
          alt="jagged building architecture"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto col-span-2"
        />
        <div id="building-left-text" className="cols-span-1 mt-8 md:mt-4">
          <h3 className="font-merriweather text-2xl sm:text-5xl md:text-2xl lg:text-4xl !leading-chill tracking-wider">
            Innovation and Sustainability
          </h3>
          <p className="mt-4 md:mt-6 text-xs sm:text-base md:text-xs lg:text-sm">
            Over the years, we have collected a diverse portfolio of projects,
            spanning residential, commercials, hospitality, public spaces and
            many more.
          </p>
        </div>
      </div>
      <div className="mt-20 md:-mt-20 lg:-mt-40 xl:-mt-72">
        <div className=" relative flex flex-col md:grid grid-cols-3 gap-x-10">
          <div
            id="building-right-text"
            className="mt-8 md:mt-0 order-2 md:order-1 flex w-full items-end justify-between"
          >
            <div className="w-full cols-span-1 grid grid-cols-2 gap-x-3 gap-y-14 sm:gap-y-10 lg:gap-y-14 md:mb-8 lg:mb-16">
              {numbersInfo.map((item) => (
                <NumberInfoWidget
                  key={item.label}
                  label={item.label}
                  countInfo={item.countInfo}
                />
              ))}
            </div>
          </div>

          <Image
            id="building-right"
            src="/outdoor-lighting.avif"
            alt="outdoor lighting house at night"
            width={0}
            height={0}
            sizes="100vw"
            className="order-1 md:order-2 w-full h-auto col-span-2 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionInnovationAndSustainability;
