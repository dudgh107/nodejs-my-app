import Link from 'next/link';
import React from 'react';

const productList = ['shirt', 'pants', 'skirt', 'shoes'];

export default function ProductPage() {

    

    return (
        <>
            <h1>제품 소개페이지!</h1>
            {productList.map((item, index)=>(<li key={index}><Link href={`/products/${item}`}>{item}</Link></li>))}
        </>
    );
}

