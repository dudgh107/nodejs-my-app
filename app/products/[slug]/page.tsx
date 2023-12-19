import { notFound } from "next/navigation";

type Props = {
    params : {
        slug: String;
    }
};

export default function pantsPage({params}: Props) {
    if (params.slug === 'nothing'){
        notFound();
    }
    return (
        <div>
            {params.slug}  제품소계 페이지입니다. !!
        </div>
    );
}



export function generateMetadata({params}: Props) {
    return {
        title : `제품의 이름 ${params.slug}`
    }
}


export function generateStaticParams() {

    const products = ['pants', 'skirt'];
    return products.map(product => ({
        slug : product


    }))
    
}
