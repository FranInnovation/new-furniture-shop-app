
'use client'

import { useEffect, useState } from "react";
import ProductSelector from "../product-list/product-selector";
import ClientSelector from "../clients-list/client-selector";

import { newEstimate } from '@/lib/actions'

export default function EstimateBuilder({ products, clients }) {

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [estimatePrice, setEstimatePrice] = useState(0);

    const [selectedClient, setSelectedClient] = useState<string>("");
    
    const handleClientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedClient(event.target.value);
    };



    useEffect(() => {
        setEstimatePrice(selectedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0));
    }, [selectedProducts]);

    const handleProductSelect = (product) => {
        setSelectedProducts(prevSelectedProducts => {
            const existingProductIndex = prevSelectedProducts.findIndex(p => p.id === product.id);
            if (existingProductIndex !== -1) {
                return prevSelectedProducts.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            } else {
                return [...prevSelectedProducts, { ...product, quantity: 1 }];
            }
        });
    };

    const handleProductDeselect = (product) => {
        setSelectedProducts(prevSelectedProducts => {
            const existingProductIndex = prevSelectedProducts.findIndex(p => p.id === product.id);
            if (existingProductIndex !== -1) {
                return prevSelectedProducts
                    .map(p =>
                        p.id === product.id
                            ? { ...p, quantity: p.quantity - 1 }
                            : p
                    )
                    .filter(p => p.quantity > 0);
            }
            return prevSelectedProducts;
        });
    };

    const handleSubmit = (selectedClient, selectedProducts) => {

        newEstimate(selectedClient, selectedProducts)
    }

    return (
        <>
            <ClientSelector clients={clients} selectedClient={selectedClient} onClientChange={handleClientChange}/>
            <ProductSelector products={products} onProductSelect={handleProductSelect} />
            <div>
                <h2>Estimate Products</h2>
                <ul>
                    {selectedProducts.map(product => (
                        <li key={product.id} onClick={() => handleProductDeselect(product)}>
                            {product.description} - {product.price} x {product.quantity} 
                        </li>
                    ))}
                </ul>
                <div>
                    <p>Total: {estimatePrice}</p>
                </div>
            </div>

            <button type="button" onClick={() => handleSubmit(selectedClient, selectedProducts)}>Submit Estimate</button>
        </>
    );
}

