import { FC } from 'react'
import { motion } from 'framer-motion'

import { BurgerButton, Logo } from 'components'

import s from './header.module.scss'

interface HeaderProps {
  onOpen: () => void
  isOpen: boolean
}

export const Header: FC<HeaderProps> = ({ onOpen, isOpen }) => {
  return (
    <motion.div
      className={s.header}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className={s.wrapper}>
        <BurgerButton onOpen={onOpen} isActive={isOpen} />

        <Logo />
      </div>
    </motion.div>
  )
}
