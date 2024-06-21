import { getClients } from '../../lib/clients'
import ClientsList from "@/components/clients-list/clients-list";
import Link from "next/link";

export default function ClientPage() {

    const clients = getClients();

    return (
        <>
            <header>
                <h1>Clients Page</h1>

                <p><Link href='/client/new-client'>New Client</Link></p>
            </header>
            <main>
                <ClientsList clients={clients}/>
            </main>
            
        </>
    )
}