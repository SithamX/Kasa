// import Logo from "../../assets/LOGO.png"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header