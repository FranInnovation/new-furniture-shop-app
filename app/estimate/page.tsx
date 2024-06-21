import Link from "next/link";
import EstimateDetail from '../../components/estimate-detail/estimate-detail'

export default function EstimatePage() {
    return (
        <>
            <h1>Estimate Page</h1>
            <p><Link href='/estimate/new-estimate'>New Estimate</Link></p>
            <EstimateDetail estimateId='8' />
        </>
    )
}