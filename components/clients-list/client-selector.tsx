
export default function ClientSelector({clients, selectedClient, onClientChange}) {

    return (
        <p>
        <label htmlFor="client">Client</label>
        <select id="client" name="client" value={selectedClient} onChange={onClientChange} required>
            {clients.map(client => (
                <option key={client.id} value={client.id}>
                    {client.name}
                </option>
            ))}
        </select>
        </p>
    )
}