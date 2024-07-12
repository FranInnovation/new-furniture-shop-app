
import ProductList from "@/components/product-list/product-list";
import { getProducts } from '@/lib/products'
import Link from "next/link";

export default function ProductPage() {

    const products = getProducts()

    return (
        <>
            <header className='header'>
                <h1>Product Page</h1>
                <button><Link href='/product/new-product'>New Product</Link></button>
            </header>
            <main className='main'>
                <ProductList products={products} />
            </main>
        </>
    )
}