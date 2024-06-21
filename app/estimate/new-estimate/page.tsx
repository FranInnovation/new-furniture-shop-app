

import EstimateBuilder from "@/components/estimate-builder/estimate-builder"
import { newEstimate } from "@/lib/actions"
import { getClients } from "@/lib/clients"
import { getProducts } from "@/lib/products"

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

                    <EstimateBuilder products={products} clients={clients} />

                </div>
            </form>   
        </main>
        </>
    )
}