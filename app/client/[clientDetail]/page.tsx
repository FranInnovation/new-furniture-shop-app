
import { getClient } from "@/lib/clients"
import { notFound } from "next/navigation"
import ClientUpdater from "@/components/clients-list/client-updater"
import classes from './page.module.css'

export default function ClientDetailPage({params}) {

    const client = getClient(params.clientDetail)

    if(!client) {
        notFound();
    }

    return (
        <>
            <header className={classes.header}>
                <h1>Client Detail Page</h1>
            </header>
            <main className={classes.main}>
                {/* <h1>{client.name}</h1>
                <p><a href={`mailto:${client.email}`}>{client.email}</a></p> */}
                <ClientUpdater client={client} />
            </main>
            
        </>
    )
}