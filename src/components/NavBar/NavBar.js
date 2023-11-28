import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar" >
            <Link to="/">
            <h3>Tienda Online</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/graficas`} className={({ isActive}) => isActive ? "ActiveOption" : Option}>Graficas</NavLink>
                <NavLink to={`/category/monitores`} className={({ isActive}) => isActive ? "ActiveOption" : Option}>Monitores</NavLink>
                <NavLink to={`/category/teclados`} className={({ isActive}) => isActive ? "ActiveOption" : Option}>Teclados</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar