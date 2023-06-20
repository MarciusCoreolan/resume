import { FC, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

import { Button, Input } from 'components'

import Arrow from '/public/assets/icons/arrow.svg'
import { contacts_mock } from 'shared/mocks/contacts_mock'

import s from './contacts.module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'

export const Contacts: FC = () => {
  const { push } = useRouter()
  const titleRef = useRef(null)
  const listRef = useRef(null)

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const isInViewTitle = useInView(titleRef, { once: true })
  const isInViewList = useInView(titleRef, { once: true })

  const botToken = '6240659689:AAG61CCJZcZpd6WoYd4ukOJSaWbq5Pe_aVY'
  const chatId = 309435208
  const onSubmit = async (e: { message: string; name: string }) => {
    const messageData = {
      name: e.name,
      message: e.message,
    }

    try {
      const { data } = await axios.get(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${JSON.stringify(
          messageData
        )}`
      )
      if (!data.ok) {
        throw new Error()
      }
      push('/thankYou')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={s.contactsWrapper} id={'contacts'}>
      <div className={s.contacts}>
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

                <Button
                  onClick={() => {
                    onSubmit({ message: message, name: name })
                  }}
                  classNames={s.button}
                >
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
    </div>
  )
}
