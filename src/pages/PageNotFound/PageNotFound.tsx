import { FC } from 'react'
import { useRouter } from 'next/router'

import { Button } from 'components'

import Arrow from '/public/assets/icons/arrow.svg'

import s from './pageNotFound.module.scss'

export const PageNotFound: FC = () => {
  const { push } = useRouter()

  return (
    <div className={s.pageNotFound}>
      <div className={s.contentWrapper}>
        <h2 className={s.title}>404</h2>
        <div className={s.subTitle}>Page Not Found</div>

        <Button onClick={() => push('/')} classNames={s.button}>
          GO HOME <Arrow />
        </Button>
      </div>
    </div>
  )
}
