import { FC } from 'react'

import s from './checkbox.module.scss'

export interface CheckboxProps {
  onChecked: (value: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({ onChecked }) => {
  const handleChange = (value: boolean) => {
    onChecked(value)
  }

  return (
    <label className={s.rocker}>
      <input type={'checkbox'} onChange={e => handleChange(e.target.checked)} />
      <span className={s.switchLeft}>On</span>
      <span className={s.switchRight}>Off</span>
    </label>
  )
}
