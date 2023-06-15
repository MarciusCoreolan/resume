import { FC, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

import { Button, Input } from 'components'

import Arrow from '/public/assets/icons/arrow.svg'
import { contacts_mock } from 'shared/mocks/contacts_mock'

import s from './contacts.module.scss'

export const Contacts: FC = () => {
  const titleRef = useRef(null)
  const listRef = useRef(null)

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const isInViewTitle = useInView(titleRef, { once: true })
  const isInViewList = useInView(titleRef, { once: true })

  return (
    <div className={s.contacts} id={'contacts'}>
      <div className={s.wrapper} ref={titleRef}>
        <div className={s.sendMe}>
          {isInViewTitle ? (
            <motion.h2
              className={s.sendMeTitle}
              initial={{ x: '-130vw' }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: 'linear',
                type: 'spring',
              }}
            >
              Send me
            </motion.h2>
          ) : null}

          {isInViewList ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: 'easeIn',
              }}
            >
              <Input
                value={name}
                onChange={value => setName(value)}
                label={'Name'}
                classNames={s.input}
              />

              <Input
                value={message}
                onChange={value => setMessage(value)}
                label={'Message'}
                classNames={s.input}
              />

              <Button onClick={() => {}} classNames={s.button}>
                Send <Arrow />
              </Button>
            </motion.div>
          ) : null}
        </div>

        <div className={s.services} ref={listRef}>
          {isInViewTitle ? (
            <motion.h2
              className={s.servicesTitle}
              initial={{ x: '130vw' }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: 'linear',
                type: 'spring',
              }}
            >
              Services
            </motion.h2>
          ) : null}

          {isInViewList ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: 'easeIn',
              }}
            >
              {contacts_mock.map(item => (
                <div key={item.title} className={s.service}>
                  <div className={s.serviceIcon}>
                    <img src={item.icon} alt={'services icon'} />
                  </div>

                  <div>{item.title}</div>
                </div>
              ))}
            </motion.div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
