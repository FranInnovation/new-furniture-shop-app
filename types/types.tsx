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
    id: string;
    description: string;
    price: number;
    quantity: number;
}

export interface EstimateBuilderProps {
    products: Product[];
    clients: Client[];
}

export interface ClientDetailPageProps {
    params: {
        clientDetail: string;
    };
}

export interface ProductDetailPageProps {
    params: {
        productDetail: string;
    };
}