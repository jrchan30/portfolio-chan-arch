import Image from 'next/image';
import React from 'react';

interface IProps {
  title: string;
  onClick: () => {};
  iconUrl?: string;
}

const BaseNavigationPill = ({ title, onClick, iconUrl }: IProps) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-x-3 rounded-full bg-[#383838] py-2 px-4"
    >
      {iconUrl && (
        <Image src={iconUrl} alt="phone icon" width={20} height={20} />
      )}
      <span>{title}</span>
    </button>
  );
};

export default BaseNavigationPill;
