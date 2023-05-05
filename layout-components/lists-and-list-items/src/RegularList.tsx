import React from 'react';

interface Person {
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

interface IRegularList {
  items: Person[];
  resourceName: string;
  itemComponent: React.FC<{ [resourceName: string]: Person  }>;
}

export const RegularList: React.FC<IRegularList> = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <ItemComponent key={index} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}
