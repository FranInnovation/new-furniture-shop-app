
import ClientSelector from "@/components/clients-list/client-selector"
import EstimateBuilder from "@/components/estimate-builder/estimate-builder"
import { newEstimate } from "@/lib/actions"
import { getClients } from "@/lib/clients"
import { getProducts } from "@/lib/products"
import { useState } from "react"

export default function AddNewEstimate() {

    const clients = getClients()
    const products = getProducts()



    return (
        <>
        <header>
            <h1>New Estimate</h1>
        </header>
        <main>
            <form action={newEstimate}>
                <div>

                    <ClientSelector clients={clients}/>
                    <EstimateBuilder products={products} />

                    <button type="submit">Submit Estimate</button>
                </div>
            </form>   
        </main>
        </>
    )
}