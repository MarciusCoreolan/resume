import { FC } from 'react'
import { useRouter } from 'next/router'

import { Button } from 'components'

import Arrow from '/public/assets/icons/arrow.svg'
import Tick from '/public/assets/icons/tick.svg'

import s from './thankYouPage.module.scss'

export const ThankYouPage: FC = () => {
  const { push } = useRouter()

  return (
    <div className={s.thankYouPage}>
      <div className={s.contentWrapper}>
        <div className={s.header}>
          <Tick />

          <h2 className={s.title}>Message delivered successfully!</h2>
          <div className={s.subTitle}>
            Thank you for your message, <br />I will reply as soon <br />
            as possible
          </div>
        </div>

        <div className={s.footer}>
          <Button onClick={() => push('/')} classNames={s.button}>
            GO HOME <Arrow />
          </Button>
        </div>
      </div>
    </div>
  )
}
