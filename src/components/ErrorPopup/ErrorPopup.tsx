import { FC } from 'react'
import { motion } from 'framer-motion'

import s from './errorPopup.module.scss'

interface ErrorPopupProps {
  errorMessage: string
}
export const ErrorPopup: FC<ErrorPopupProps> = ({ errorMessage }) => {
  return (
    <motion.div
      className={s.error}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
      }}
    >
      <h2 className={s.title}>Something went wrong</h2>
      <p>{errorMessage}</p>
    </motion.div>
  )
}
