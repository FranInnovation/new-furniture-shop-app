import Link from "next/link";
import { getEstimates } from "@/lib/estimates";
import EstimateList from "@/components/estimate-detail/estimate-list";
import classes from './page.module.css'

export default function EstimatePage() {
    const estimates = getEstimates();
    return (
        <>
        <header className={classes.header}>
            <h1>Estimate Page</h1>
            <button><Link href='/estimate/new-estimate'>New Estimate</Link></button>
        </header>
        <main className={classes.main}>
            <EstimateList estimates={estimates} />
        </main>

            
        </>
    )
}