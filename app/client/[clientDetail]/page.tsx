
import { getClient } from "@/lib/clients"
import { notFound } from "next/navigation"
import ClientUpdater from "@/components/clients-list/client-updater"
import { ClientDetailPageProps } from "@/types/types";

export default function ClientDetailPage({params}: ClientDetailPageProps) {

    const client = getClient(params.clientDetail)

    if(!client) {
        notFound();
    }

    return (
        <>
            <header className='header'>
                <h1>Client Detail Page</h1>
            </header>
            <main className='main'>
                <ClientUpdater client={client} />
            </main>
            
        </>
    )
}


