'use client'
import { useState, useEffect } from 'react';
import { updateClientInfo } from "@/lib/actions"
import { ClientUpdaterProps, Client } from '@/types/types'
import ClientInfo from './client-info';
import classes from './client-updater.module.css'

export default function ClientUpdater({client}: ClientUpdaterProps) {

    console.log('CLIENT: ', client)

    const [formData, setFormData] = useState<Client | Partial<Client>>({});
    const [updateClient, setUpdateClient] = useState(false)

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
        {!updateClient && 
            <>
            <header className='header'>
                <button onClick={() => setUpdateClient(true)}>Update Client</button>
            </header>
            <main className='main'>
                <ClientInfo client={client} />
            </main>


            </>}

        {updateClient &&
        <main className='main'>
            <form action={updateClientInfo} className={classes.form}>
                <div>
                    <input type="number" id="id" name="id" value={formData.id} hidden />
                    <p>
                    <label htmlFor="name" className={classes.label}>Client name</label>
                    <input type="text" id="name" name="name" className={classes.input} value={formData.name} onChange={handleChange} required />
                    </p>
                    <p>
                    <label htmlFor="lastname" className={classes.label}>Client lastname</label>
                    <input type="text" id="lastname" name="lastname" className={classes.input} value={formData.lastname} onChange={handleChange} required />
                    </p>
                    <p>
                    <label htmlFor="email" className={classes.label}>Client email</label>
                    <input type="email" id="email" name="email" className={classes.input} value={formData.email} onChange={handleChange} required />
                    </p>
                    <p>
                    <label htmlFor="document" className={classes.label}>Client document</label>
                    <input type="text" id="document" name="document" className={classes.input} value={formData.document} onChange={handleChange} required />
                    </p>
                    <p>
                    <label htmlFor="birthdate" className={classes.label}>Client birthdate</label>
                    <input type="date" id="birthdate" name="birthdate" className={classes.input} value={formData.birthdate} onChange={handleChange} required />
                    </p>
    
                    <button className={classes.button} type="submit">Submit Update</button>
                </div>
            </form>
        </main>
        }
        </>
    )
}