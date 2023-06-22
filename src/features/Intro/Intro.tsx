import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Button, Sidebar } from 'components'
import { Header } from 'features'

import Arrow from '/public/assets/icons/arrow.svg'

import s from './intro.module.scss'

export const Intro: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.introWrapper}>
      <Sidebar isOpened={isOpen} onClose={() => setIsOpen(false)} />
      <Header onOpen={() => setIsOpen(prevState => !prevState)} isOpen={isOpen} />

      <div className={s.intro}>
        <motion.div
          className={s.cup}
          initial={{ y: '500%' }}
          animate={{ y: 0, rotate: '360deg' }}
          transition={{ duration: 1, delay: 1.3 }}
        />
        <motion.div
          className={s.laptop}
          initial={{ y: '-500%' }}
          animate={{ y: -50, rotate: '390deg' }}
          transition={{ duration: 1, delay: 1.3 }}
        />
        <motion.div
          className={s.copybook}
          initial={{ y: '-150vh' }}
          animate={{ y: 0, rotate: '340deg' }}
          transition={{ duration: 1, delay: 1.3 }}
        />
        <motion.div
          className={s.flower}
          initial={{ y: '-500%', x: '-500%' }}
          animate={{ y: 0, x: 0, rotate: '750deg' }}
          transition={{ duration: 1, delay: 1.3 }}
        />

        <div className={s.info}>
          <motion.h1
            className={s.title}
            initial={{ opacity: 0, y: '-1000%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: 'linear',
              type: 'spring',
            }}
          >
            frontend Developer
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: '1000%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: 'linear',
              type: 'spring',
            }}
          >
            <Link href='#contacts'>
              <a>
                <Button onClick={() => {}} classNames={s.button}>
                  <span>Get started</span> <Arrow />
                </Button>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
