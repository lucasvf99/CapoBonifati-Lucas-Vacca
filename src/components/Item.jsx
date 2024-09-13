import { Link } from "react-router-dom";
import "./App.css"

function Item({ character }) {
  return (
    <div className="cont__rick"   >
      <img src={character.image} alt="" className="cont__rick__img" />
      <div className="cont__rick__info">
        <p>{character.name}</p> 
        <p>{character.species}</p> 
        <p>{character.status}</p>  
        <Link to={`/character/${character.id}`} ><button>Ver mas</button> </Link> {/**ruta dinamica */}
      </div>
    </div>
  );
}

export default Item;
