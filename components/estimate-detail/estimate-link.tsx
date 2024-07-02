import { getClient } from '@/lib/clients'
import { getClientIdByEstimateId, getProductsDetailsByEstimateId } from '@/lib/estimates'

export default function EstimateLink({estimateId}) {

    const clientId = getClientIdByEstimateId(estimateId)
    const client = getClient(clientId.id_client)
    const products = getProductsDetailsByEstimateId(estimateId)

    let totalAmount = 0
    let totalProducts = 0

    for (let product of products) {
        totalAmount += product.price * product.quantity;
        totalProducts += product.quantity
    }
    

    return (
        <>
        {/* <h1>Client name: {client.name} {client.lastname}</h1>
        <h2>product list</h2>
        <ul>
            {products.map(product => <li key={product.id}>{product.description} / {product.price} / {product.quantity}</li>)}
        </ul> */}
        <div>
            <p>Client: {client.name} {client.lastname} Estimate: {estimateId} Product Count: {totalProducts} Total Amount: {totalAmount}</p>
        </div>
        </>
    )
}