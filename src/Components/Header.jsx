import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <h1>Yatoutpartout</h1>

            <button
                id="menu-toggle"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "fermer le menu" : "ouvrir le menu"}
            >
                {!isMenuOpen ? "menu" : "x"}
            </button>

            <nav id="menu" className={isMenuOpen ? "active" : ""}>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/nos-produits">Produits</NavLink>
                <NavLink to="/authentification">Connexion</NavLink>
            </nav>
        </header>
    );
}

export default Header;
