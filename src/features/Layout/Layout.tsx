import { ReactNode } from 'react'
import { useRouter } from 'next/router'

import { Footer } from 'features'

import { noLayout } from './utils'

import s from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter()

  return (
    <div className={s.layout}>
      {!noLayout.includes(pathname) ? (
        <main className={s.content}>{children}</main>
      ) : (
        <>
          <div className={s.content}>{children}</div>
          <Footer />
        </>
      )}
    </div>
  )
}
