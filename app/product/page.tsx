// import Link from 'next/link';
// import { getProducts } from '../../lib/products'

import ProductList from "@/components/product-list/product-list";
import { getProducts } from '@/lib/products'
import Link from "next/link";
import classes from './page.module.css'

// interface Product {
//     id: number;
//     description: string;
//     price: number
// }

// const ProductPage: React.FC = () => {

//     const products: Product[] = getProducts();

//     console.log(products)

//     return (
//         <>
//         <h1>Product Page</h1>
//         <ul>
//             {products && products.map(product => (<Link key={product.id} href={`/product/${product.id}`}>{product.description}</Link>))}
//         </ul>
//         </>
//     )
// }

// export default ProductPage

export default function ProductPage() {

    const products = getProducts()

    return (
        <>
            <header className={classes.header}>
                <h1>Product Page</h1>
                <button><Link href='/product/new-product'>New Product</Link></button>
            </header>
            <main>
                <ProductList products={products} />
            </main>
        </>
    )
}