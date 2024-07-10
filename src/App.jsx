import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Index";
import Main from "./components/Main/Index";
export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [initialCount, setInitialCount] = useState(1);
  const [finalCount, setFinalCount] = useState(10)
  async function getPokemons() {
    try {
      const listaData = [];

      for (let i = initialCount; i <= finalCount; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        listaData.push(data);
      }
      console.log(listaData);
      setPokeList((state) =>[...state, ...listaData])
    } catch (error) {
      console.error(error);
    }
  }

  function hadleGetPokemonClick() {
    setInitialCount(finalCount + 1);
    setFinalCount((finalCount) => finalCount + 10)
  }

  useEffect(() => {
    getPokemons();
  }, [initialCount, finalCount]);

  return (
    <>
      <Header />
      <Main list={pokeList} />
      <button onClick={hadleGetPokemonClick} className="ver-mais">
        Ver mais...
      </button>
      <footer>
        <p>&copy; Todos os direitos reservados</p>
      </footer>
    </>
  );
}
