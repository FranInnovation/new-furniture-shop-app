import { getClient } from '@/lib/clients';
import { getClientIdByEstimateId, getProductsDetailsByEstimateId } from '@/lib/estimates';

interface Client {
  id_client: string;
  name: string;
  lastname: string;
}

interface Product {
  id: string;
  description: string;
  price: number;
  quantity: number;
}

interface EstimateDetailProps {
  params: {
    estimateDetail: string;
  };
}

export default function EstimateDetail({ params }: EstimateDetailProps) {
  const estimateId = params.estimateDetail;
  const clientId = getClientIdByEstimateId(estimateId);
  const client: Client = getClient(clientId.id_client);
  const products: Product[] = getProductsDetailsByEstimateId(estimateId);

  return (
    <>
      <h1>Estimate Detail</h1>
      <h1>Client name: {client.name} {client.lastname}</h1>
      <h2>product list</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.description} / {product.price} / {product.quantity}
          </li>
        ))}
      </ul>
    </>
  );
}
