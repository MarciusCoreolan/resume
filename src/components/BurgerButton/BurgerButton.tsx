import { FC } from 'react'
import cn from 'classnames'

import s from './burgerButton.module.scss'

export interface BurgerButtonProps {
  onOpen: () => void
  isActive: boolean
}

export const BurgerButton: FC<BurgerButtonProps> = ({ onOpen, isActive }) => {
  return (
    <button className={cn(s.burger, { [s.active]: isActive })} onClick={onOpen}>
      <svg
        width='56'
        height='42'
        viewBox='0 0 56 42'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3 3H53'
          stroke='currentColor'
          stroke-width='5'
          stroke-linecap='round'
        />
        <path
          d='M3 21H41.6453'
          stroke='currentColor'
          stroke-width='5'
          stroke-linecap='round'
        />
        <path
          d='M3 39H29.5197'
          stroke='currentColor'
          stroke-width='5'
          stroke-linecap='round'
        />
      </svg>
    </button>
  )
}
