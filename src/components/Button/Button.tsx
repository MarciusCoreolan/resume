import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'

import s from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  classNames?: string
}

export const Button: FC<ButtonProps> = ({
  onClick,
  classNames,
  children,
  ...props
}) => {
  return (
    <button className={cn(s.button, classNames)} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
