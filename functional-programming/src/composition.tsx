import React from "react";

export interface IButton {
  size?: string,
  color?: string,
  text?: string,
  props?: React.ReactNode
}

export const Button = ({ size, color, text, ...props}: IButton) => {
  return (
    <button style={{
      padding: size === 'large' ? '32px' : '8px',
      fontSize: size === 'large' ? '32px' : '16px',
      backgroundColor: color,
    }} {...props}>{text}</button>
  )
}

export const DangerButton = (props: IButton) => {
  return (
    <Button {...props} color="red" />
  )
}

export const BigSuccess = (props: IButton) => {
  return (
    <Button {...props} color="green" size="large" />
  )
}

