import { FC } from 'react'
import cn from 'classnames'

import s from './header.module.scss'

export interface HeaderProps {
  classNames?: string
}

export const Header: FC<HeaderProps> = ({ classNames }) => {
  return <div className={cn(s.header, classNames)}>header</div>
}
