import { FC, useEffect } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import { contacts_mock, navigation_mock } from 'shared/mocks/navigation_mock'
import CloseIcon from '/public/assets/icons/closeCros.svg'

import s from './sidebar.module.scss'

export interface SidebarProps {
  isOpened: boolean
  onClose: () => void
}

export const Sidebar: FC<SidebarProps> = ({ onClose, isOpened }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpened])

  return (
    <div className={cn(s.sidebar, { [s.visible]: isOpened })}>
      <button className={s.closeButton} onClick={onClose}>
        <CloseIcon />
      </button>

      {navigation_mock.map(item => (
        <div key={item.title} className={s.navLink} onClick={onClose}>
          <Link href={item.link}>{item.title}</Link>
        </div>
      ))}

      <div className={s.contacts}>
        {contacts_mock.map(item => (
          <div key={item.link} className={s.links}>
            <Link href={item.link}>
              <a target={'_blank'}>
                <Image
                  src={item.icon}
                  width={35}
                  height={35}
                  alt={'contact links'}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
