import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css'
import MeowArticle from '@/components/MeowArticle';
import testImage from '../../public/images/img001.jpg'
import Image from 'next/image';

//export const revalidate = 3;
export  default async function ProductsPage() {
    
    
    const productList = await getProducts();    
    //서버 파일(db)
    return (
        <>
        
            <h1>제품 소개페이지!</h1>
            <Image src={testImage} alt='보트'></Image>
            {productList.map((item, index)=>(<li key={index}><Link href={`/products/${item.id}`}>{item.name}</Link></li>))}
            <MeowArticle/>
        </>
    );
}

