import { FC, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { about_mock } from 'shared/mocks/about_mock'

import s from './about.module.scss'

export const About: FC = () => {
  const titleRef = useRef(null)
  const listRef = useRef(null)
  const isInViewTitle = useInView(titleRef, { once: true })
  const isInViewList = useInView(titleRef, { once: true })

  const listVariants = {
    visible: (i: number) => ({
      x: 0,
      transition: {
        duration: 1,
        delay: i * 0.5,
        ease: 'linear',
        type: 'spring',
      },
    }),
    hidden: {
      x: '300%',
    },
  }

  return (
    <div className={s.aboutWrapper} id={'about'}>
      <div className={s.about}>
        <div className={s.wrapper} ref={titleRef}>
          {isInViewTitle ? (
            <motion.h2
              className={s.title}
              initial={{ x: '300%' }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: 'linear', type: 'spring' }}
            >
              About
            </motion.h2>
          ) : null}

          {isInViewList ? (
            <div className={s.textSection} ref={listRef}>
              {about_mock.map((item, index) => (
                <motion.p
                  key={index}
                  className={s.text}
                  variants={isInViewList ? listVariants : undefined}
                  initial='hidden'
                  animate='visible'
                  custom={index}
                >
                  {item.text}
                </motion.p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
