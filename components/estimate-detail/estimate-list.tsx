
import Link from "next/link";
import EstimateLink from "./estimate-link";
import { EstimateListProps } from "@/types/types";
import classes from '../clients-list/clients-list.module.css'


export default function EstimateList({estimates}: EstimateListProps) {

    return (
        <>
            <header className={classes.header}>
                <h2>Estimates List</h2>
            </header>
            <div className={classes.tableContainer}>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>ID</th>
                            <th>Items</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        estimates.map(estimate => (
                            <EstimateLink key={estimate.id} estimateId={estimate.id} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}