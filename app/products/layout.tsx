import Link from 'next/link'
import styles from './layout.module.css'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '멋진 제품 사이트 >> 상품들',
  description: '멋진 상품들을 판매하는 곳입니다.',
  
}
 

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/woman">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section className={styles.product}>
        {children}
      </section>
    </>

    
    
  )
}
