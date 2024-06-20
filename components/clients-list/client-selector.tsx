'use client'

import { useState } from "react";


export default function ClientSelector({clients}) {
    
    const [selectedClient, setSelectedClient] = useState<string>("");
    
    const handleClientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedClient(event.target.value);
    };

    return (
        <p>
        <label htmlFor="client">Client</label>
        <select id="client" name="client" value={selectedClient} onChange={handleClientChange} required>
            {clients.map(client => (
                <option key={client.id} value={client.id}>
                    {client.name}
                </option>
            ))}
        </select>
        </p>
    )
}