import './checkoutItems.css'


function CheckoutItems ({el}) {
    // console.log(cart)
    return(
         <div className="item">
           <p>{el.name}</p>
           <p>x {el.cantidad}</p>
           <p>€ {el.price}</p>
        </div>

    )
}

export default CheckoutItems