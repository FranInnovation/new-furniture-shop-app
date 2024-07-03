
import ClientListItem from "./client-list-item";
import { ClientsListProps } from "@/types/types";
import classes from './clients-list.module.css';

export default function ClientsList({ clients }: ClientsListProps) {
    return (
        <>
            <header className={classes.header}>
                <h2>Clients List</h2>
            </header>
            <div className={classes.tableContainer}>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <ClientListItem key={client.id} {...client} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
