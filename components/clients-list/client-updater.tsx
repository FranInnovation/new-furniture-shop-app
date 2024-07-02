'use client'
import { useState, useEffect } from 'react';
import { updateClientInfo } from "@/lib/actions"
import { ClientUpdaterProps, Client } from '@/types/types'

export default function ClientUpdater({client}: ClientUpdaterProps) {

    console.log('CLIENT: ', client)

    const [formData, setFormData] = useState<Client | Partial<Client>>({});

    useEffect(() => {
        if (client) {
            setFormData(client);
        }
    }, [client]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
        <form action={updateClientInfo}>
            <div>
                <input type="number" id="id" name="id" value={formData.id} hidden />
                <p>
                <label htmlFor="name">Client name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </p>
                <p>
                <label htmlFor="lastname">Client lastname</label>
                <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
                </p>
                <p>
                <label htmlFor="email">Client email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </p>
                <p>
                <label htmlFor="document">Client document</label>
                <input type="text" id="document" name="document" value={formData.document} onChange={handleChange} required />
                </p>
                <p>
                <label htmlFor="birthdate">Client birthdate</label>
                <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
                </p>

                <button type="submit">Update Client</button>
            </div>
        </form>
        </>
    )
}