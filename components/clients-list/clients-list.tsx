import ClientListItem from "./client-list-item";
import { ClientsListProps } from "@/types/types";
import classes from './clients-list.module.css'

export default function ClientsList({clients}: ClientsListProps) {
    return (
        <>
            <header className={classes.header}>
                <h2>Clients List</h2>
            </header>
            <div className={classes.main}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <div className={classes.div}>
                            <p>ID</p>
                            <p>Name</p>
                            <p>Lastname</p>
                            <p>Email</p>
                        </div>
                    </li>
                    {clients.map(client => (
                        <li key={client.id}>
                            <ClientListItem {...client} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}