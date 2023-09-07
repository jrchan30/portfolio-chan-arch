import Link from 'next/link';
import React from 'react';

const BaseFooter = () => {
  const footerItems = [
    {
      title: 'Privacy Policy',
      link: '/',
    },
    {
      title: 'Terms of Use',
      link: '/',
    },
    {
      title: 'FAQ',
      link: '/',
    },
    {
      title: 'Cookies',
      link: '/',
    },
  ];
  return (
    <div className="container py-6 flex justify-between flex-col md:flex-row">
      <div className="flex gap-x-8 flex-col items-center md:flex-row justify-center mb-10">
        {footerItems.map((item) => {
          return (
            <Link key={item.title} href={item.link}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="text-center">
        Chan-<span className="font-merriweather">arch</span> 2023. All Rights
        Reserved
      </div>
    </div>
  );
};

export default BaseFooter;
