import ClientListItem from "./client-list-item";

export default function ClientsList({clients}) {
    return (
        <ul>
            {clients.map(client => <li key={client.id}><ClientListItem {...client} /></li>)}
        </ul>
    )
}