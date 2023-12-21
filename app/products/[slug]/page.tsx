import { getProduct, getProducts } from "@/service/products";
import { notFound, redirect } from "next/navigation";
import Image from 'next/image'
import GoProductButton from "@/components/GoProductButton";

type Props = {
    params : {
        slug: string;
    }
};

export default async function productPage({params : {slug}}: Props) {
    
    const product = await getProduct(slug);

    if(!product) {
        redirect('/products');
        //notFound();
    }

    return (
        <div>
            {product.name}  제품소계 페이지입니다. !!
            <Image src={product.imgNm} alt={product.name} width={400}
        height={400}></Image>
        <GoProductButton></GoProductButton>
        </div>
    );
}



export function generateMetadata({params}: Props) {
    return {
        title : `제품의 이름 ${params.slug}`
    }
}


export async function generateStaticParams() {

    const products = await getProducts();
    return products.map(product => ({
        slug : product.id


    }))
    
}
