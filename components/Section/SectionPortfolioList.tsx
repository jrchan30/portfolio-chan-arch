import Image from 'next/image';
import React from 'react';

const SectionPortfolioList = () => {
  const buildingProjects = [
    {
      title: "St George's House East",
      desc: 'A 300,000sqft gross flagship office development designed by Aukett Swanks for M&G Real Estate working with Bell Hammer.',
      image: '/building-pool2.jpg',
    },
    {
      title: 'Bradfield Centre Palace',
      desc: 'The concept seeks to attract entrepreneurial start-ups and act as a hub for the Park where existing businesses, occupiers and visitors.',
      image: '/building-wood.jpg',
    },
    {
      title: 'Statesman House',
      desc: 'Mixed use master plan creating a new community of 125 residential homes and two new headquarters office buildings.',
      image: '/building-window.jpg',
    },
  ];

  return (
    <section className="mt-40">
      <div className="relative grid grid-cols-3 gap-x-10">
        {buildingProjects.map((building, i) => {
          return (
            <div
              className="flex flex-col gap-y-8"
              style={{ marginTop: `${i * 100}px` }}
            >
              <Image
                src={building.image}
                alt={building.title}
                sizes="100vw"
                className="w-full h-auto"
                width={500}
                height={300}
              />
              <h4 className="text-5xl !leading-chill min-h-[]">
                {building.title}
              </h4>
              <p className="text-base">{building.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionPortfolioList;
