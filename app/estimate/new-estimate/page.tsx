

import EstimateBuilder from "@/components/estimate-builder/estimate-builder"
import { newEstimate } from "@/lib/actions"
import { getClients } from "@/lib/clients"
import { getEstimates } from "@/lib/estimates"
import { getProducts } from "@/lib/products"

export default function AddNewEstimate() {

    const clients = getClients()
    const products = getProducts()
    const estimates = getEstimates()

    return (
        <>
        <header className="header">
            <h1>New Estimate</h1>
        </header>
        <main className="main">
            <form action={newEstimate}>
                <div>
                    <EstimateBuilder products={products} clients={clients} />
                </div>
            </form>   
        </main>
        </>
    )
}