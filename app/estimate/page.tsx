import Link from "next/link";
import { getEstimates } from "@/lib/estimates";
import EstimateList from "@/components/estimate-detail/estimate-list";

export default function EstimatePage() {
    const estimates = getEstimates();
    return (
        <>
        <header>
            <h1>Estimate Page</h1>
            <p><Link href='/estimate/new-estimate'>New Estimate</Link></p>
        </header>
        <main>
            <EstimateList estimates={estimates} />
        </main>

            
        </>
    )
}