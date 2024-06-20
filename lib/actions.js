'use server'

import { saveClient } from "./clients"

export async function newClient(formData) {

    const client = {
        name: formData.get('name'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        document: formData.get('document'),
        birthdate: formData.get('birthdate')
    }

    await saveClient(client);
}