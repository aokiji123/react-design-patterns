import { useState, useEffect } from 'react'
import axios from 'axios'
import {IUser, IUserInfo} from "./UserInfo.tsx";

export const useCurrentUser = () => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:8080/current-user')
      setUser(response.data)
    })()
  }, []);

  return user as IUserInfo
}
