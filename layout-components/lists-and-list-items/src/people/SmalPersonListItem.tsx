import React from "react";

interface IPerson {
  name: string;
  age: number;
}

interface ISmallPersonListItem {
  person: IPerson;
}

export const SmallPersonListItem: React.FC<ISmallPersonListItem> = ({ person }) => {
  const { name, age } = person;

  return (
    <p>Name: {name}, Age: {age} years</p>
  );
};

