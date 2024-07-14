
// 'use client'

// import { useEffect, useState } from "react";
// import ProductSelector from "../product-list/product-selector";
// import ClientSelector from "../clients-list/client-selector";
// import { Product, Client, EstimateBuilderProps } from "@/types/types";

// import { newEstimate } from '@/lib/actions';

// export default function EstimateBuilder({ products, clients }: EstimateBuilderProps) {
//     const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
//     const [estimatePrice, setEstimatePrice] = useState<number>(0);
//     const [selectedClient, setSelectedClient] = useState<string>("");

//     const handleClientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedClient(event.target.value);
//     };

//     useEffect(() => {
//         setEstimatePrice(selectedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0));
//     }, [selectedProducts]);

//     const handleProductSelect = (product: Product) => {
//         setSelectedProducts(prevSelectedProducts => {
//             const existingProductIndex = prevSelectedProducts.findIndex(p => p.id === product.id);
//             if (existingProductIndex !== -1) {
//                 return prevSelectedProducts.map(p =>
//                     p.id === product.id
//                         ? { ...p, quantity: p.quantity + 1 }
//                         : p
//                 );
//             } else {
//                 return [...prevSelectedProducts, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     const handleProductDeselect = (product: Product) => {
//         setSelectedProducts(prevSelectedProducts => {
//             const existingProductIndex = prevSelectedProducts.findIndex(p => p.id === product.id);
//             if (existingProductIndex !== -1) {
//                 return prevSelectedProducts
//                     .map(p =>
//                         p.id === product.id
//                             ? { ...p, quantity: p.quantity - 1 }
//                             : p
//                     )
//                     .filter(p => p.quantity > 0);
//             }
//             return prevSelectedProducts;
//         });
//     };

//     const handleSubmit = (selectedClient: string, selectedProducts: Product[]) => {
//         newEstimate(selectedClient, selectedProducts);
//     };

//     return (
//         <>
//             <ClientSelector clients={clients} selectedClient={selectedClient} onClientChange={handleClientChange} />
//             <ProductSelector products={products} onProductSelect={handleProductSelect} />
//             <div>
//                 <h2>Estimate Products</h2>
//                 <ul>
//                     {selectedProducts.map(product => (
//                         <li key={product.id} onClick={() => handleProductDeselect(product)}>
//                             {product.description} - {product.price} x {product.quantity}
//                         </li>
//                     ))}
//                 </ul>
//                 <div>
//                     <p>Total: {estimatePrice}</p>
//                 </div>
//             </div>
//             <button type="button" onClick={() => handleSubmit(selectedClient, selectedProducts)}>Submit Estimate</button>
//         </>
//     );
// }

'use client'

import { useEffect, useState } from "react";
import ProductSelector from "../product-list/product-selector";
import ClientSelector from "../clients-list/client-selector";
import { Product, Client, EstimateBuilderProps } from "@/types/types";

import { newEstimate } from '@/lib/actions';

import classes from './estimate-builder.module.css'

export default function EstimateBuilder({ products, clients }: EstimateBuilderProps) {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [estimatePrice, setEstimatePrice] = useState<number>(0);
    const [selectedClient, setSelectedClient] = useState<string>("");

    const handleClientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedClient(event.target.value);
    };

    useEffect(() => {
        setEstimatePrice(selectedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0));
    }, [selectedProducts]);

    const handleProductSelect = (product: Product) => {
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

    const handleProductDeselect = (product: Product) => {
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

    const handleSubmit = (selectedClient: string, selectedProducts: Product[]) => {
        newEstimate(selectedClient, selectedProducts);
    };

    return (
        <div className={classes.estimateContainer}>
            <header className={classes.estimateHeader}>
                <h1>Estimate Builder</h1>
            </header>
            <main className={classes.estimateMain}>
                <ClientSelector clients={clients} selectedClient={selectedClient} onClientChange={handleClientChange} />
                <ProductSelector products={products} onProductSelect={handleProductSelect} />
                <div className={classes.estimateProducts}>
                    <h2>Estimate Products</h2>
                    <ul>
                        {selectedProducts.map(product => (
                            <li key={product.id} onClick={() => handleProductDeselect(product)}>
                                {product.description} - {product.price} x {product.quantity}
                            </li>
                        ))}
                    </ul>
                    <div className={classes.estimateTotal}>
                        <p>Total: {estimatePrice}</p>
                    </div>
                </div>
                <button type="button" className={classes.estimateButton} onClick={() => handleSubmit(selectedClient, selectedProducts)}>Submit Estimate</button>
            </main>
        </div>
    );
}



