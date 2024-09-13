import Item from "./Item.jsx"
import '../App.css'

function ItemList ({characters}){
    return(
        <section className='cont__productos'>
        {characters.map(character =>   <Item character={character} key={character.id}/>)}
        </section>
    )
    
}

export default ItemList