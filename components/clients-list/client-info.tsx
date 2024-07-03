'use client'
import React from 'react';
import { Client } from '@/types/types';
import classes from './client-info.module.css'


interface ClientInfoProps {
    client: Client;
}

const ClientInfo: React.FC<ClientInfoProps> = ({ client }) => {
    return (
        <div className={classes.info_container}>
            <div className={classes.client_info}>
                <p>Client Id: {client.id}</p>
                <p>Name: {client.name} {client.lastname}</p>
                <p>Document: {client.document}</p>
                <p>Birth Date: {client.birthdate}</p>
                <p>Mail: <a href={`mailto:${client.email}`}>{client.email}</a></p>
            </div>
        </div>
    );
};

export default ClientInfo;

