import CharCard from "../CharCard"
import './styles.css'


function Characters( { characterList } ) {
    return (
        <div>
            <h1>Meus personagens</h1>
            <div className="container-char"> 
            {characterList.map((item) => <CharCard
            name={item.name}
            gender={item.gender}
            image={item.image}
            status={item.status}
            />)}
            </div>
        </div>
    )
}

export default Characters