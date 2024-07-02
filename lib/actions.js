'use server'

import { redirect } from "next/navigation";
import { saveClient } from "./clients"
import { saveProduct } from "./products";
import { deleteEstimate, saveClientEstimate, saveEstimate, saveProductEstimate } from './estimates'

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

export async function newEstimate(selectedClient, selectedProducts) {

    const estimate = {
        creationDate: new Date().toString()
    }

    const estimateId = await saveEstimate(estimate)

    const clientEstimate = {
        id_client: selectedClient,
        id_estimate: estimateId
    }

    await saveClientEstimate(clientEstimate)

    selectedProducts.forEach(async product => {
        const productEstimate = {
            id_product: product.id,
            id_estimate: estimateId,
            quantity: product.quantity
        }
        await saveProductEstimate(productEstimate)
    });

    redirect('/estimate')
}

export async function eliminateEstimate(estimateId) {
    deleteEstimate(estimateId)
    redirect('/estimate')
}