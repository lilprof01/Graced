import React from 'react'

type ButtonProps = {
  size: string;
  classname: string;
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Button
