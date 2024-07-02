import Link from "next/link";
import NavLink from './nav-link'
import logoImg from '@/assets/logo_muebles.png'
import classes from './navigation-header.module.css'
import Image from "next/image";
import MainHeaderBackground from './main-header-background'

const NavigationHeader: React.FC = () => {

    return (
        <>
        <MainHeaderBackground />
            <header className={classes.header}>
                <Link href='/' className={classes.logo}>
                <div className={classes.image_logo_container}>
                    <Image src={logoImg} alt="furniture-logo" priority/>
                </div>
                    
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink href='/client'>Clients</NavLink></li>
                        <li><NavLink href='/product'>Products</NavLink></li>
                        <li><NavLink href='/estimate'>Estimates</NavLink></li>
                        <li><NavLink href='/user'>User</NavLink></li>
                        <button>Log out</button>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavigationHeader