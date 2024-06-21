
import { getClient } from '@/lib/clients'
import { getClientIdByEstimateId, getProductsDetailsByEstimateId } from '@/lib/estimates'

export default function EstimateDetail({estimateId}) {

    const clientId = getClientIdByEstimateId(estimateId)
    const client = getClient(clientId.id_client)
    const products = getProductsDetailsByEstimateId(estimateId)

    console.log('PRODUCTS DETAIL: ', products)

    return (
        <>
        <h1>Client name: {client.name} {client.lastname}</h1>
        <h2>product list</h2>
        <ul>
            {products.map(product => <li key={product.id}>{product.description} / {product.price} / {product.quantity}</li>)}
        </ul>
        </>
    )
}