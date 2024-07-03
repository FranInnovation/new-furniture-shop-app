
// import Link from "next/link";

// export default function ProductList({products}) {
//     return (
//         <>
//         <header>
//             <h2>Products List</h2>
//         </header>
//         <div>
//             <ul>
//                 <li>
//                     <div>
//                         <p>ID</p>
//                         <p>Description</p>
//                         <p>Price</p>
//                     </div>
//                 </li>
//                 {products.map(product => <li key={product.id}><Link href={`/product/${product.id}`} key={product.id}>{product.description} {product.price}</Link></li>)}
//             </ul>
//         </div>
//         </>
//     )
// }

import Link from "next/link";
import classes from './product-list.module.css';

export default function ProductList({ products }) {
    return (
        <>
            <header className={classes.header}>
                <h2>Products List</h2>
            </header>
            <main className={classes.main}>
            <div className={classes.tableContainer}>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td><Link href={`/product/${product.id}`}>{product.description}</Link></td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </main>
        </>
    );
}
