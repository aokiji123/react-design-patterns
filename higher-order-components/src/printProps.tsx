import React from 'react'

export const printProps = (Component: React.ComponentType<any>) => {
    return (props: any) => {
        return <Component {...props} />;
    }
}
