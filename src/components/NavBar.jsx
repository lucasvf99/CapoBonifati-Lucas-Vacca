import CartWidget from "./CartWidget"
import './../App.css'


function NavBar (){
    return (
            <div className="NavBar">
                <h2>Capo Bonifati</h2>
                <ul>
                    <li>Tarrinas</li>
                    <li>Batidos</li>
                    <li>Cafe</li>
                </ul>
                <CartWidget/>
            </div>
           
    )
}

export default NavBar