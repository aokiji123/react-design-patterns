import React, {useEffect, useState} from "react";
import axios from "axios";
import {IUserInfo} from "./UserInfo.tsx";

export const withEditableUser = (Component: React.ComponentType<any>, userId: number) => {
    return (props: any) => {
        const [originalUser, setOriginalUser] = useState<IUserInfo | null>(null);
        const [user, setUser] = useState<IUserInfo | null>(null);

        useEffect(() => {
            (async () => {
                const {data} = await axios.get(`http://localhost:8080/users/${userId}`);
                setUser(data);
                setOriginalUser(data);
            })();
        }, [])

        const onChangeUser = (changes: Partial<IUserInfo>) => {
            setUser({ ...user, ...changes } as IUserInfo)
        }

        const onSaveUser = async () => {
            const response = await axios.post(`http://localhost:8080/users/${userId}`, { user })
            setOriginalUser(response.data)
            setUser(response.data)
        }

        const onResetUser = () => {
            setUser(originalUser)
        }

        return (
            <Component
                {...props}
                user={user}
                onChangeUser={onChangeUser}
                onSaveUser={onSaveUser}
                onResetUser={onResetUser}
            />
        )
    }
}
