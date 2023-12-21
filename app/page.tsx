import Count from '@/components/Count';
import Image from 'next/image'
import { notFound } from 'next/navigation'

import os from 'os'


export default function Home() {
  
  
  console.log('hello------server');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지다22   6번째 버전입니다.!!</h1>
      <Image src="https://www.shutterstock.com/shutterstock/photos/2095269505/display_1500/stock-photo-lit-up-candle-at-an-outdoor-table-of-a-restaurant-in-winter-cosy-atmosphere-selective-focus-2095269505.jpg" 
        alt="link image"
        priority
        width={400}
        height={400}
      />
      <Count/>
    </>
    
  )
}
