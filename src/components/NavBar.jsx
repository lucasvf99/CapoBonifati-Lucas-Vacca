import './../App.css'
import { Link } from "react-router-dom"
import '../App.css' 
import CartWidget from "./CartWidget"

function NavBar (){
    return (
            
         <nav className='navBar'>
              <div className='navBar__logo'>
              <Link to="/">  <h1>Api <span>Rick</span></h1></Link>
            </div>
            <div className="navBar__links ">
             <Link className="navBar__link" to="/">Home</Link>
             <Link className="navBar__link" to="/category/Human">Human</Link>
             <Link className="navBar__link" to="/category/Alien">Alien</Link>
             <Link className="navBar__link" to="/category/Robot">Robot</Link>
             <Link className="navBar__link" to="/productos">Productos</Link>
             <CartWidget/>
            </div>
         </nav>
           
    )
}

export default NavBar