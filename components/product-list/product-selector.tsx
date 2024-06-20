export default function ProductSelector ({products, onProductSelect}) {
    return (
        <>
        <div>
            <ul>
                {products.map(product => <li key={product.id} onClick={()=> onProductSelect(product)}>
                    {product.description} {product.price}</li>)}
            </ul>
        </div>
        </>
    )
}