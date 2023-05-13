import React from 'react'

export interface IUserInfo {
  id: string;
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

export interface IUser {
  user?: IUserInfo;
}

export const UserInfo = ({ user }: IUser) => {
  const { name, age, hairColor, hobbies } = user || {};

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies ? hobbies.map(hobby => <li key={hobby}>{hobby}</li>) : null}
      </ul>
    </>
  );
}
