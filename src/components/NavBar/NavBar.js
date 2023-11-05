import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda Online</h3>
            <div>
                <button>Graficas</button>
                <button>Monitores</button>
                <button>Teclados</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar