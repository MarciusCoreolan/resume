import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { contacts_mock } from 'shared/mocks/navigation_mock'

import s from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.contactsWrap}>
        <div className={s.contactsTitle}>Contacts</div>

        <div className={s.contacts}>
          {contacts_mock.map(item => (
            <div key={item.link}>
              <Link href={item.link}>
                <a target={'_blank'}>
                  <Image
                    src={item.icon}
                    width={30}
                    height={30}
                    alt={'contact icon'}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
