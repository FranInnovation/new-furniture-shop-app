
import ProductList from "@/components/product-list/product-list";
import { getProducts } from '@/lib/products'
import Link from "next/link";
import classes from './page.module.css'

export default function ProductPage() {

    const products = getProducts()

    return (
        <>
            <header className={classes.header}>
                <h1>Product Page</h1>
                <button><Link href='/product/new-product'>New Product</Link></button>
            </header>
            <main className={classes.main}>
                <ProductList products={products} />
            </main>
        </>
    )
}