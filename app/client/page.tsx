import { getClients } from '../../lib/clients'
import ClientsList from "@/components/clients-list/clients-list";
import Link from "next/link";

export default function ClientPage() {

    const clients = getClients();

    return (
        <>
            <header className='header'>
                <h1>Clients Page</h1>

                <button><Link href='/client/new-client'>New Client</Link></button>
            </header>
            <main className='main'>
                <ClientsList clients={clients}/>
            </main>
            
        </>
    )
}