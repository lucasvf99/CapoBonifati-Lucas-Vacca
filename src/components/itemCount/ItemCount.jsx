import './ItemCount.css'
import { useState, useContext } from 'react'
import { cartContext } from '../../context/cartContext'


function ItemCount ({item}){

    const [count, setCount] = useState(1)

    const {agregarItem } = useContext(cartContext)

    const  agregar = ()=> count < item.stock && setCount( count +1 )

    const restar = ()=> {
       if(count > 1){
        setCount(count -1)
       }
    }

    const agregarAlCarrito = () =>{ 
        agregarItem({...item, cantidad: count} )
    }

    return(
            <div className='contenedor'>
                <div className='contenedor__botones' >
                <button onClick={restar} className='boton'>-</button>
                <p>{count}</p>
                <button onClick={agregar} className='boton'>+</button>
                </div>
                <div className='contenedor__botones' >
                <button onClick={agregarAlCarrito } className='boton'>agregar al carrito </button>
                </div>
            </div>
    )
}

export default ItemCount