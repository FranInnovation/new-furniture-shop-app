import Link from "next/link";

export default function ClientListItem({ id, name, lastname, email, birthdate }) {
    return (
        <>
            <div>
                <p>{name}</p>
                <p>{lastname}</p>
                <p>{email}</p>
                <p>{birthdate}</p>
                <div>
                <Link href={`/client/${id}`}>Client Details</Link>
                </div>
            </div>
        </>
    )
}