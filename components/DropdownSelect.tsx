'use client';

import React, { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface IOption {
  label: string;
  value: Value;
}

type FunctionOptionLabel = (option: IOption) => string | React.ReactNode;

interface IProps {
  label: string;
  options: IOption[];
  children?: React.ReactNode;
  onValueChange: (value: string) => any;
  initialValue?: Value;
  optionKey?: keyof IOption;
  btnLabel: string | React.ReactNode;
  optionLabel?: FunctionOptionLabel;
}

type Value = string;

const DropdownSelect = ({
  optionKey,
  label,
  options,
  children,
  initialValue,
  btnLabel,
  optionLabel,
  onValueChange,
}: IProps) => {
  const [value, setValue] = useState<Value | undefined>(initialValue);

  const onValueChangeHandler = (newValue: Value) => {
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children ? (
          children
        ) : (
          <button className="flex gap-x-3 rounded-full bg-gray py-2 px-4">
            {btnLabel}
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray text-white">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={onValueChangeHandler}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option[optionKey ?? 'value']}
              value={option.value}
            >
              {optionLabel ? optionLabel(option) : option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownSelect;
