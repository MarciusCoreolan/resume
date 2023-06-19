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
    <div className={cn(s.buttonWrapper, classNames)}>
      <div className={s.buttonBgHover} />

      <button className={s.button} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  )
}
