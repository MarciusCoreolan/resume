import { FC } from 'react'

import { About, Contacts, Experience, Intro, Portfolio, Skills } from 'features'

import s from './homePage.module.scss'

export const HomePage: FC = () => {
  return (
    <div className={s.homePage} id={'home'}>
      <Intro />
      <About />
      <Portfolio />
      <Experience />
      <Skills />
      <Contacts />
    </div>
  )
}
