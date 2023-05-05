import React from 'react';

interface IPerson {
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

interface ILargePersonListItem {
  person: IPerson;
}

export const LargePersonListItem: React.FC<ILargePersonListItem> = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby: string) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

