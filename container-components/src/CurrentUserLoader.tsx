import React, {useState, useEffect} from 'react';
import axios from "axios";
import {IUser} from "./UserInfo.tsx";

interface ICurrentUser {
  children: React.ReactNode;
}

export const CurrentUserLoader = ({ children }: ICurrentUser) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:8080/current-user')
      setUser(response.data)
    })()
  }, []);

  return user ? (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user } as IUser)
        }

        return child
      })}
    </>
  ) : <p>Loading...</p>
}
