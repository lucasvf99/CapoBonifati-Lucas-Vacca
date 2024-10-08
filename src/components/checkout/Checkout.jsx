import Formulario from '../fomulario/Formulario'
import CheckoutItems from '../checkoutItems/CheckoutItems'
import './checkout.css'
import { cartContext } from '../../context/cartContext'
import { useContext } from 'react'


function Checkout () {
  const {cart, getTotal} = useContext(cartContext)

    return ( 
        <div className='checkout'>
          <div>
          <div className='checkout__items'>
          {cart.map(el => <CheckoutItems el={el} key={el.id}/>)}
          </div>
          <div className='checkout__total'>
          <p>Total: {getTotal()}</p>
          </div>
          </div>
          <Formulario></Formulario>
        </div>
    )
}

export default Checkout