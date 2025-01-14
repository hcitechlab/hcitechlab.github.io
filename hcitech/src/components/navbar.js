import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return (
        <div className = "container">
            <nav className = "navbar navbar-expand-lg navbar-light px-3">
                <Link href = '/' className = 'navbar-brand'>
                    <Image alt = "logo" src = "/main_logo.png" width = {300} height = {50} className = "d-none d-sm-block"/>
                </Link>
                <div>
                    <ul className = "navbar-nav me-auto">
                        <li className = "nav-item"> <Link href="/publications" className = "nav-link"> Publications </Link> </li>
                        <li className = "nav-item"> <Link href="/team" className = "nav-link"> Team </Link> </li>
                        <li className = "nav-item"> <Link href="/courses" className = "nav-link"> Courses </Link> </li>
                        <li className = "nav-item"> <Link href="/gallery" className = "nav-link"> Gallery </Link> </li>
                        <li className = "nav-item"> <Link href="/contact" className = "nav-link"> Contact </Link> </li>
                        <li className = "nav-item"> <Link href="/news" className = "nav-link"> News </Link> </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;