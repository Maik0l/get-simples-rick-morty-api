import { useEffect, useState } from 'react';
import './App.css';
import CharCard from './components/CharCard'
import Characters from './components/Characters';

function App() {

  const [characterList, setCharacterList] = useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((response) => setCharacterList(response.results))
    .catch((error) => console.log(error))
  }, []);

  console.log(characterList)
  return (
    <div className="App">
      <Characters characterList={characterList}/>
    </div>
  );
}

export default App;
