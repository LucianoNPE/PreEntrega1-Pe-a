import CartWidget from "../CartWidget/CartWidget";
import '../../Navbar.css'
const Navbar = ()=>{
    return(
        <nav>
            <h1>
                GoodStyle
            </h1>
            <div>
                <button>Stock</button>
                <button>Medios de Pago</button>
                <button>Envíos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;