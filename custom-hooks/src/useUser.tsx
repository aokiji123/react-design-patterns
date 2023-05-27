import { useState, useEffect } from 'react';
import axios from 'axios';
import {IUser, IUserInfo} from "./UserInfo.tsx";

export const useUser = (userId: string) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return user as IUserInfo;
}
