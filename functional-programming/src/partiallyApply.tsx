import React from "react";
import {Button, IButton} from "./composition.tsx";

export const partiallyApply = (Component: React.ComponentType<IButton>, partialProps: IButton) => {
  return (props: IButton) => (
    <Component {...partialProps} {...props} />
  )
}

export const DangerButton = partiallyApply(Button, { color: 'red' })
export const BigSuccess = partiallyApply(Button, { color: 'green', size: 'large' })
