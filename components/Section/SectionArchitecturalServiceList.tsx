'use client';

import React, { useLayoutEffect, useRef } from 'react';
import IconDiagonalUp from '../Icon/IconDiagonalUp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface IListItemProps {
  currentNumber?: string | number;
  title: string;
}

const ListItem = ({ currentNumber, title }: IListItemProps) => {
  return (
    <div
      data-animate
      className="flex justify-between pt-8 pb-6 md:pt-10 md:pb-8 border-b-2"
    >
      <div className="flex gap-x-2">
        {currentNumber && (
          <span className="text-sm">{`${
            Number(currentNumber) <= 9 ? '0' : ''
          }${Number(currentNumber)}`}</span>
        )}
        <span className="text-2xl md:text-4xl">{title}</span>
      </div>
      <IconDiagonalUp containerClass="h-9 w-auto" />
    </div>
  );
};

const SectionArchitecturalServiceList = () => {
  const list = [
    {
      title: 'Residential Architecture',
    },
    {
      title: 'Urban Planning Architecture',
    },
    {
      title: 'Landscape Architecture',
    },
    {
      title: 'Interior Design Concept',
    },
    {
      title: 'Commercial Architecture',
    },
  ];

  const listItem = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.registerPlugin(ScrollTrigger);
      // gsap.from(listItem.current, {
      //   scrollTrigger: {
      //     trigger: '.list',
      //     start: 'top center',
      //     end: 'bottom bottom',
      //     scrub: true,
      //     //   pin: true,
      //   },
      //   scaleX: 0,
      //   transformOrigin: 'left center',
      //   ease: 'none',
      // });
    }, listItem);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={listItem} className="list">
      <section className="list mt-32">
        {list.map((listItem, i) => (
          <ListItem
            key={listItem.title}
            title={listItem.title}
            currentNumber={i + 1}
          />
        ))}
      </section>
    </div>
  );
};

export default SectionArchitecturalServiceList;
