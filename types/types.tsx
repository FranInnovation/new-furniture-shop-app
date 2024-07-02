import React, { ReactNode } from 'react';

export interface NavigationLayoutProps {
    children: ReactNode;
}

export interface ClientListItemProps {
    id: string;
    name: string;
    lastname: string;
    email: string;
    birthdate: string; // Puedes cambiar esto a `Date` si el tipo de `birthdate` es una instancia de Date
}

export interface ClientsListProps {
    clients: ClientListItemProps[];
}

export interface Client {
    id: number;
    name: string;
    lastname: string;
    document: string;
    birthdate: string; // o Date si prefieres manejarlo como un objeto Date
    email: string;
}

export interface ClientUpdaterProps {
    client: Client;
}