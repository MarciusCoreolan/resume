import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'

import { Sidebar } from 'components'
import { Header, Footer } from 'features'

import { noLayout } from './utils'

import s from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useRouter()

  return (
    <div className={s.layout}>
      {!noLayout.includes(pathname) ? (
        <main className={s.content}>{children}</main>
      ) : (
        <>
          <Sidebar isOpened={isOpen} onClose={() => setIsOpen(false)} />
          <Header onOpen={() => setIsOpen(prevState => !prevState)} />
          <div className={s.content}>{children}</div>
          <Footer />
        </>
      )}
    </div>
  )
}
