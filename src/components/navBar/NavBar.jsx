
import { Link } from "react-router-dom"
import '../../App.css' 
import './navBar.css'
import CartWidget from '../cartWidjet/CartWidget'

function NavBar (){
    return (
            
         <nav className='navBar'>
              <div className='navBar__logo'>
              <Link to="/">  <h1>Capo<span>Bonifati</span></h1></Link>
            </div>
            <div className="navBar__links ">
             <Link className="navBar__link" to="/">Home</Link>
             <Link className="navBar__link" to="/category/Tarrinas">Tarrinas</Link>
             <Link className="navBar__link" to="/category/Batidos">Batidos</Link>
             <Link className="navBar__link" to="/category/Tartas">Tartas</Link>
             <CartWidget/>
            </div>
         </nav>
           
    )
}

export default NavBar