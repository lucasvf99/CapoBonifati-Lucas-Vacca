import Item from '../Item/Item'
import '../../App.css'
import './itemList.css'

function ItemList ({productos}){
    return(
       <>
        <h2 >Todos Nuestros Productos</h2>
        <section className='productos'>
        {productos.map(producto =>   <Item producto={producto} key={producto.id}/>)}
        </section>
       </>
    )
    
}

export default ItemList