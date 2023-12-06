import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const [poke, isLoading] = useFetch('https://pokeapi.co/api/v2/pokemon/');

  const Cards = () => {
    return (
      <div className='cards-list'>
        {
          (isLoading && poke == null) ? <h2>Loading Pokemons...</h2> : (
            poke.map((item) => (
              <div className='card'>
                <p>
                  {item.name}
                </p>
              </div>
            ))
          )
        }
      </div>
    )
  }

  return (
    <div className="App">
        <h1>React hooks</h1>

        <Cards />

        {console.log(poke)}
    </div>
  );
}

export default App;
