import './globals.css'
import styles from './layout.module.css'
import Link from 'next/link'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳입니다.',
  icons:{
    icon:'/favicon.ico222'
  }
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <header className={styles.header}>
          <h1>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            
           
          </nav>
        </header>
        <section className={styles.contents}>
          {children}  
        </section>
        
      </body>
    </html>
  )
}
