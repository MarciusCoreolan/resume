import { FC } from 'react'
import { motion } from 'framer-motion'

import { Logo } from 'components'

import Burger from '/public/assets/icons/burger.svg'

import s from './header.module.scss'

interface HeaderProps {
  onOpen: () => void
}
export const Header: FC<HeaderProps> = ({ onOpen }) => {
  return (
    <motion.div
      className={s.header}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className={s.wrapper}>
        <button className={s.burger} onClick={onOpen}>
          <Burger />
        </button>

        <Logo />
      </div>
    </motion.div>
  )
}
