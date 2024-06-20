'use client'

import { useEffect, useState } from "react";
import ProductSelector from "../product-list/product-selector";

export default function EstimateBuilder({products}) {

    const [selectedProducts, setSelectedProducts] = useState([]);

    const [estimatePrice, setEstimatePrice] = useState(0)

    useEffect(() => {
        setEstimatePrice(selectedProducts.reduce((acc, product) => acc + product.price, 0))
    }, [selectedProducts])

    const handleProductSelect = (product) => {
        setSelectedProducts([...selectedProducts, product]);
    };

    return (
        <>
            <ProductSelector products={products} onProductSelect={handleProductSelect}/>
            <div>
                <h2>estimate products</h2>
                <ul>
                    {selectedProducts.map(product => <li key={product.id}>{product.description} {product.price}</li>)}
                </ul>
                <div>
                    <p>total: {estimatePrice}</p>
                </div>
            </div>
        </>
    )
}