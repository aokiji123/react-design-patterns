import React, {useEffect, useState} from "react";
import axios from "axios";
import {IUserInfo} from "./UserInfo.tsx";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export const withEditableResource = (Component: React.ComponentType<any>, resourcePath: string, resourceName: string) => {
    return (props: any) => {
        const [originalData, setOriginalData] = useState<IUserInfo | null>(null);
        const [data, setData] = useState<IUserInfo | null>(null);
        console.log(resourcePath)

        useEffect(() => {
            (async () => {
                const {data} = await axios.get(`http://localhost:8080/${resourceName}/${resourcePath}`);
                setData(data);
                setOriginalData(data);
            })();
        }, [])

        const onChange = (changes: Partial<IUserInfo>) => {
            setData({ ...data, ...changes } as IUserInfo)
        }

        const onSave = async () => {
            const response = await axios.post(`http://localhost:8080/${resourceName}/${resourcePath}`, { [resourceName]: data })
            setOriginalData(response.data)
            setData(response.data)
        }

        const onReset = () => {
            setData(originalData)
        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange(${capitalize(resourceName)})`]: onChange,
            [`onChange(${capitalize(resourceName)})`]: onSave,
            [`onChange(${capitalize(resourceName)})`]: onReset,
        }

        return (
            <Component
                {...props}
                {...resourceProps}
            />
        )
    }
}
