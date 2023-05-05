import React from 'react';

interface Product {
  name: string;
  price: string;
  description: string;
  rating: number;
}

interface INumberedList {
  items: Product[];
  resourceName: string;
  itemComponent: React.FC<{ [resourceName: string]: Product  }>;
}

export const NumberedList: React.FC<INumberedList> = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3>
          {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
          {/*@ts-ignore*/}
          <ItemComponent key={index} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
}
