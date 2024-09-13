import "./App.css";
import NavBar from "./components/NavBar";
//clases
// import Estado from '../clases/clase3/clase3'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:species" element={<ItemListContainer/>} />
          <Route path="/character/:id" element={<ItemDetailConteiner/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
