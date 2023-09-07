import React from 'react';
import IconDiagonalUp from './Icon/IconDiagonalUp';

interface IListItemProps {
  currentNumber?: string | number;
  title: string;
}

interface IProps {
  list: IListItemProps[];
}

const ListItem = ({ currentNumber, title }: IListItemProps) => {
  return (
    <div className="flex justify-between pt-10 pb-8 border-b-2">
      <div className="flex gap-x-2">
        {currentNumber && (
          <span className="text-sm">{`${
            Number(currentNumber) <= 9 ? '0' : ''
          }${Number(currentNumber)}`}</span>
        )}
        <span className="text-4xl h-12">{title}</span>
      </div>
      <IconDiagonalUp containerClass="h-9 w-auto" />
    </div>
  );
};

const List = ({ list }: IProps) => {
  return (
    <div>
      {list.map((listItem, i) => (
        <ListItem title={listItem.title} currentNumber={i + 1} />
      ))}
    </div>
  );
};

export default List;
