import { getProduct } from "@/lib/products"

export default function ProductDetailPage({params}) {

    const productId = params.productDetail
    const product = getProduct(productId)

    return (
        <>
            <h1>Product Detail Page</h1>
            <h2>{product.description}</h2>
            <h2>{product.price}</h2>
        </>
    )
}