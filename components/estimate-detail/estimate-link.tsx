
import { getClient } from '@/lib/clients';
import { getClientIdByEstimateId, getProductsDetailsByEstimateId } from '@/lib/estimates';
import { EstimateLinkProps, Product } from '@/types/types';
import Link from "next/link";
import classes from './estimate-link.module.css';



interface Client {
    id_client: string;
    name: string;
    lastname: string;
}



export default function EstimateLink({ estimateId }: EstimateLinkProps) {
    const clientId = getClientIdByEstimateId(estimateId);
    const client: Client = getClient(clientId.id_client);
    const products: Product[] = getProductsDetailsByEstimateId(estimateId);

    let totalAmount = 0;
    let totalProducts = 0;

    for (let product of products) {
        totalAmount += product.price * product.quantity;
        totalProducts += product.quantity;
    }

    return (
        <tr className={classes.tableRow}>
            <td className={classes.tableCell}>
                <Link href={`/estimate/${estimateId}`} className={classes.link}>{client.name} {client.lastname}</Link>
            </td>
            <td className={classes.tableCell}>
                <Link href={`/estimate/${estimateId}`} className={classes.link}>{estimateId}</Link>
            </td>
            <td className={classes.tableCell}>
                <Link href={`/estimate/${estimateId}`} className={classes.link}>{totalProducts}</Link>
            </td>
            <td className={classes.tableCell}>
                <Link href={`/estimate/${estimateId}`} className={classes.link}>{totalAmount}</Link>
            </td>
        </tr>
    );
}
