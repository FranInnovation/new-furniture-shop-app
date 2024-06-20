
import Link from "next/link";

export default function ProductList({products}) {
    return (
    <ul>
        {products.map(product => <p><Link href={`/product/${product.id}`} key={product.id}>{product.description} {product.price}</Link></p>)}
    </ul>
    )
}