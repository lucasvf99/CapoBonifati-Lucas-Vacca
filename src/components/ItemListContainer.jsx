import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

let urlRick = "https://rickandmortyapi.com/api/character";

function ItemListContainer() {
  const [characters, setCharacters] = useState([]);
  const { species } = useParams();

  useEffect(() => {
    fetch(urlRick)
      .then((res) => res.json())
      .then((res) => {
        if (!species) {
          setCharacters(res.results);
        } else {
          fetch(`https://rickandmortyapi.com/api/character/?species=${species}`)
            .then((res) => res.json())
            .then((res) => setCharacters(res.results));
        }
      });
  }, [species]);

  console.log(characters);

  return <ItemList characters={characters} />;
}

export default ItemListContainer;
