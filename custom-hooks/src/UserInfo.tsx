import {useResource} from "./useResource.tsx";

export interface IUserInfo {
  id: string;
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

export interface IUser {
  user?: IUserInfo | null;
}

export const UserInfo = ({ userId }: { userId: string }) => {
  // const user = useCurrentUser();
  // const user = useUser(userId)
  const user = useResource(`http://localhost:8080/users/${userId}`)


  if (!user) {
    return <div>Loading...</div>;
  }

  const { name, age, hairColor, hobbies } = user as IUserInfo || {};

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies ? hobbies.map((hobby: string) => <li key={hobby}>{hobby}</li>) : null}
      </ul>
    </>
  );
};
