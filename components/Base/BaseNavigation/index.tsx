'use client';

import Image from 'next/image';
import BaseLogo from '../BaseLogo';
import BaseNavigationItem from './BaseNavigationItem';

import { useRouter } from 'next/navigation';
import DropdownSelect, { IOption } from '@/components/DropdownSelect';
import { useState } from 'react';

const BaseNavigation = () => {
  const router = useRouter();

  const NavigationItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Services',
      link: '/services',
    },
    {
      title: 'Projects',
      link: '/projects',
    },
    {
      title: 'About',
      link: '/about',
    },
  ];

  enum Language {
    english = 'english',
    indonesia = 'indonesia',
  }

  const dropdownSelectOptions: IOption[] = [
    {
      label: Language.english,
      value: Language.english,
    },
    {
      label: Language.indonesia,
      value: Language.indonesia,
    },
  ];

  type IFlagImageMap = {
    [key: string]: string;
  };

  const flagImageMap: IFlagImageMap = {
    [Language.english]: '/flag-us.svg',
    [Language.indonesia]: '/flag-indonesia.svg',
  };

  const [language, setLanguage] = useState<Language>(Language.english);

  return (
    <div className="bg-primary">
      <div className="container flex h-14 items-center justify-between gap-x-5">
        <div className="flex items-center gap-x-5">
          <div className="flex items-center mr-6">
            <BaseLogo containerClass="cursor-pointer" />
          </div>
          {NavigationItems.map(({ title, link }) => (
            <div className="hidden md:block" key={link}>
              <BaseNavigationItem title={title} link={link} />
            </div>
          ))}
        </div>
        <div className="gap-x-5 hidden md:flex items-center">
          <DropdownSelect
            label="Select Language"
            options={dropdownSelectOptions}
            onValueChange={(value) => setLanguage(value as Language)}
            initialValue={Language.english}
            btnLabel={
              <div className="flex capitalize gap-x-3">
                <Image
                  src={flagImageMap[language]}
                  alt={`${language} flag`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-5 h-auto"
                />
                {language}
              </div>
            }
            optionLabel={(option) => {
              return (
                <div className="flex capitalize gap-x-3">
                  <Image
                    src={flagImageMap[option.value]}
                    alt={`${option.value} flag`}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-5 h-auto"
                  />
                  {option.value}
                </div>
              );
            }}
          />
          <button
            onClick={() => router.push('/contact-us')}
            className="flex items-center gap-x-2 rounded-full bg-[#383838] py-2 px-4"
          >
            <Image src="/phone.svg" alt="phone icon" width={16} height={16} />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaseNavigation;
