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