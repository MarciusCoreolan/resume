import { FC } from 'react'
import cn from 'classnames'

import s from './footer.module.scss'

export interface FooterProps {
  classNames?: string
}

export const Footer: FC<FooterProps> = ({ classNames }) => {
  return <div className={cn(s.footer, classNames)}>Footer</div>
}
