import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './input.module.scss'

export interface InputProps {
  placeholder?: string
  classNames?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  value: string
  onChange: (event: string) => void
  error?: string
  label?: string
}

export const Input: FC<InputProps> = ({
  icon,
  iconPosition = 'left',
  classNames,
  value,
  onChange,
  error,
  label,
  ...props
}) => {
  return (
    <div className={s.inputContainer}>
      {label ? <div className={s.label}>{label}</div> : null}

      <div className={cn(s.inputWrap, classNames)}>
        {icon && iconPosition === 'left' ? (
          <div className={s.icon}>{icon}</div>
        ) : null}

        <input
          className={s.input}
          value={value}
          onChange={event => onChange(event.target.value)}
          {...props}
        />

        {icon && iconPosition === 'right' ? (
          <div className={s.icon}>{icon}</div>
        ) : null}
      </div>

      {error ? <div className={s.error}>{error}</div> : null}
    </div>
  )
}
