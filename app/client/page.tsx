import { getClients } from '../../lib/clients'
import ClientsList from "@/components/clients-list/clients-list";
import Link from "next/link";
import classes from './page.module.css'

export default function ClientPage() {

    const clients = getClients();

    return (
        <>
            <header className={classes.header}>
                <h1>Clients Page</h1>

                <button><Link href='/client/new-client'>New Client</Link></button>
            </header>
            <main className={classes.main}>
                <ClientsList clients={clients}/>
            </main>
            
        </>
    )
}