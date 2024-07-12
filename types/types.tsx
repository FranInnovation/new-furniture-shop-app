import { ReactNode } from 'react';

export interface NavigationLayoutProps {
    children: ReactNode;
}

export interface ClientListItemProps {
    id: number;
    name: string;
    lastname: string;
    document: string;
    email: string;
    birthdate: string; 
}

export interface ClientsListProps {
    clients: ClientListItemProps[];
}

export interface Client {
    id: number;
    name: string;
    lastname: string;
    document: string;
    birthdate: string; 
    email: string;
}

export interface ClientUpdaterProps {
    client: Client;
}

export interface Estimate {
    id: string;
}

export interface EstimateListProps {
    estimates: Estimate[];
}

export interface EstimateLinkProps {
    estimateId: string;
}

export interface Product {
    price: number;
    quantity: number;
}