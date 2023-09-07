import Link from 'next/link';
import React from 'react';

interface IProps {
  title: string;
  link: string;
}

const BaseNavigationItem = ({ title, link }: IProps) => {
  return (
    <Link
      className="relative cursor-pointer group flex flex-col gap-y-0.5"
      href={link}
    >
      <span>{title}</span>
      <div className="absolute top-full h-0.5 bg-white w-0 group-hover:w-full transition-all"></div>
    </Link>
  );
};

export default BaseNavigationItem;
