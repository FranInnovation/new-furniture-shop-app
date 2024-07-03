
import { Client } from "@/types/types";
import Link from "next/link";
import classes from './clients-list.module.css';

const ClientListItem: React.FC<Client> = ({ id, name, lastname, email, document }) => {
    return (
        <tr className={classes.tableRow}>
            <td className={classes.tableCell}>
                <Link href={`/client/${id}`} className={classes.link}>{id}</Link>
            </td>
            <td className={classes.tableCell}>
                <Link href={`/client/${id}`} className={classes.link}>{name}</Link>
            </td>
            <td className={classes.tableCell}>
                <Link href={`/client/${id}`} className={classes.link}>{lastname}</Link>
            </td>
            <td className={classes.tableCell}>
                <Link href={`/client/${id}`} className={classes.link}>{email}</Link>
            </td>
        </tr>
    );
};

export default ClientListItem;


