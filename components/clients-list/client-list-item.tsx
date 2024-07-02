import Link from "next/link";
import { ClientListItemProps } from "@/types/types";
import classes from './client-list-item.module.css'

export default function ClientListItem({ id, name, lastname, email, birthdate }: ClientListItemProps) {
    return (
        <>
        <div>
        <Link href={`/client/${id}`} className={classes.link}>

                <p>{id}</p>
                <p>{name}</p>
                <p>{lastname}</p>
                <p>{email}</p>
        </Link>
        </div>
    </>
    )
}