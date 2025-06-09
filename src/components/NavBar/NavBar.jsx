import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <nav style={{ display: "flex", justifyContent: "center", backgroundColor: "bisque" , padding: 15 }}>
            
            <a>
                <img src="/assets/atajo1.png" width="25" height="25" alt="logo moto" />
            </a>

            <ul style={{ display: "flex",  gap: "1rem", listStyle: "none" }}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget cantidad={2} />
        </nav>
    );
};

export default NavBar;


/*  justifyContent: "space-around" */