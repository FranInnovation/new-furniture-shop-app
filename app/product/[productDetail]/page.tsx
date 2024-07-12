import { getProduct } from "@/lib/products"
import { ProductDetailPageProps } from "@/types/types"
import classes from './page.module.css'

export default function ProductDetailPage({params}: ProductDetailPageProps) {

    const productId = params.productDetail
    const product = getProduct(productId)

    return (
        <>
        <header className="header">
            <h1>Product Detail Page</h1>
        </header>
        <main className="main">
            <div className={classes.info_container}>
                <div className={classes.product_info}>
                    <p>Product Description: {product.description}</p>
                    <p>Product Price: {product.price}</p>
                </div>
            </div>
        </main>
        </>
    )
}