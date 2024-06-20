// import { getClient } from "@/lib/clients"
// import { notFound } from "next/navigation"

import { getClient } from "@/lib/clients"
import { notFound } from "next/navigation"

// interface ClientDetailParams {
//     clientDetail: string;
// }

// interface ClientDetailPageProps {
//     params: ClientDetailParams;
// }

// const ClientDetailPage: React.FC<ClientDetailPageProps> = ({params}) => {

//     const client = getClient(params.clientDetail)

//     if(!client) {
//         notFound();
//     }

//     return (
//         <>
//         <h1>Client Detail Page</h1>
//         <h2>{client.name} {client.lastname}</h2>
//         </>
//     )
// }

// export default ClientDetailPage

export default function ClientDetailPage({params}) {

    const client = getClient(params.clientDetail)

    if(!client) {
        notFound();
    }

    return (
        <>
            <header>
                <h1>Client Detail Page</h1>
                <h1>{client.name}</h1>
                <p><a href={`mailto:${client.email}`}>{client.email}</a></p>
            </header>
            <main>

            </main>
            
        </>
    )
}