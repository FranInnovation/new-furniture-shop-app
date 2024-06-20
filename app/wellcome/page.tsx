// import MainHeader from "@/components/main-header/main-header"

import Link from "next/link"

const WellcomePage: React.FC = () => {
    return (
        <>
        <h1>Wellcome Page</h1>
        <p><Link href='/client'>Clients</Link></p>
        <p><Link href='/product'>Product</Link></p>
        <p><Link href='/estimation'>Estimation</Link></p>
        <p><Link href='/user'>User</Link></p>
        </>
    )
}

export default WellcomePage