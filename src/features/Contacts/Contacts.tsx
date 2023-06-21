import { FC, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/router'
import axios from 'axios'

import { Button, ErrorPopup, Input } from 'components'

import Arrow from '/public/assets/icons/arrow.svg'
import { contacts_mock } from 'shared/mocks/contacts_mock'

import s from './contacts.module.scss'

export const Contacts: FC = () => {
  const { push } = useRouter()
  const [error, setError] = useState<string>('')
  const titleRef = useRef(null)
  const listRef = useRef(null)

  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')

  const isInViewTitle = useInView(titleRef, { once: true })
  const isInViewList = useInView(titleRef, { once: true })

  const handleCloseError = () => {
    if (error) {
      setError('')
    }
  }

  const onSubmit = async () => {
    if (!message || !contact) {
      return setError('Please fill in all fields so that I can contact you')
    }

    const botToken = '6240659689:AAG61CCJZcZpd6WoYd4ukOJSaWbq5Pe_aVY'
    const chatId = 309435208

    const messageData = {
      name: contact,
      message: message,
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
      setError(
        'Message was not delivered, please try again later, or contact me via contacts'
      )
    }
  }

  return (
    <div
      className={s.contactsWrapper}
      id={'contacts'}
      onClick={handleCloseError}
    >
      {error ? <ErrorPopup errorMessage={error} /> : null}

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
                  value={contact}
                  onChange={value => setContact(value)}
                  label={'Contact details'}
                  classNames={s.inputContact}
                />

                <Input
                  value={message}
                  onChange={value => setMessage(value)}
                  label={'Message'}
                  classNames={s.input}
                />

                <Button onClick={onSubmit} classNames={s.button}>
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
