
import Link from "next/link";
import EstimateLink from "./estimate-link";

interface Estimate {
    id: string;
}

interface EstimateListProps {
    estimates: Estimate[];
}

export default function EstimateList({estimates}: EstimateListProps) {

    estimates.forEach(element => {
    });
    return (
    <ul>
        {estimates.map(estimate => <Link href={`/estimate/${estimate.id}`} key={estimate.id}><EstimateLink estimateId={estimate.id}/></Link>)}
    </ul>
    )
}