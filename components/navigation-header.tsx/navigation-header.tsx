import Link from "next/link";

import classes from './navigation-header.module.css'
import { redirect } from "next/navigation";

const NavigationHeader: React.FC = () => {

    return (
        <>
            <header className={classes.header}>
                <Link href='/'>LOGO</Link>

                <nav>
                    <ul>
                        <Link href='/client'>Clients</Link>
                        <Link href='/product'>Products</Link>
                        <Link href='/estimation'>Estimations</Link>
                        <Link href='/user'>User</Link>
                        <button>Log out</button>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavigationHeader