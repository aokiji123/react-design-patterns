import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const withUser = (Component: React.ComponentType<any>, userId: number) => {
    return (props: any) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            return () => {
                (async () => {
                    const {data} = await axios.get(`http://localhost:8080/users/${userId}`);
                    setUser(data);
                })();
            };
        }, []);

        return <Component {...props} user={user} />;
    }
}
