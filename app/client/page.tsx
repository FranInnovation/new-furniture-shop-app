// import { getClients } from '../../lib/clients'
// import Link from "next/link";

// interface Client {
//     id: number;
//     name: string,
//     lastname: string
// }

// const ClientPage: React.FC = () => {

//     const clients: Client[] = getClients();

//     console.log('CLIENTS: ', clients)

//     return (
//         <>
//             <h1>Client Page</h1>
//             <Link href='/client/new-client'>New Client</Link>
//             <ul>
//                 {clients && clients.map(client => (<li key={client.id}><Link href={`/client/${client.id}`} key={client.id}>{client.name}</Link></li>))}
//             </ul>
//         </>
//     )
// }

// export default ClientPage

export default function ClientPage() {
    return (
        <>
            <h1>Clients Page</h1>
        </>
    )
}