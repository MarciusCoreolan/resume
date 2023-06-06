import { FC } from 'react'
import cn from 'classnames'

import s from './exampleContainer.module.scss'

export interface ExampleContainerProps {
  classNames?: string
  children: any
  title: string
}

export const ExampleContainer: FC<ExampleContainerProps> = ({
  classNames,
  children,
  title,
}) => {
  return (
    <div className={cn(s.exampleContainer, classNames)}>
      <div className={s.title}>{title}</div>
      <div className={s.exampleComponent}>{children}</div>
    </div>
  )
}
