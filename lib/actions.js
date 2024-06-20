'use server'

import { redirect } from "next/navigation";
import { saveClient } from "./clients"
import { saveProduct } from "./products";

export async function newClient(formData) {

    const client = {
        name: formData.get('name'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        document: formData.get('document'),
        birthdate: formData.get('birthdate')
    }

    await saveClient(client);
    redirect('/client')
}

export async function newProduct(formData) {

    const product = {
        description: formData.get('description'),
        price: formData.get('price')
    }

    await saveProduct(product);
    redirect('/product')
}