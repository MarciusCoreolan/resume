import { FC, useEffect, useState } from 'react'

import Logo1 from '/public/assets/icons/logo.svg'
import Logo2 from '/public/assets/icons/logo2.svg'

import s from './logo.module.scss'

export const Logo: FC = () => {
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsToggle(prevState => !prevState)
    }, 800)

    return () => {
      clearInterval(toggle)
    }
  }, [])

  return <div className={s.logo}>{isToggle ? <Logo1 /> : <Logo2 />}</div>
}
