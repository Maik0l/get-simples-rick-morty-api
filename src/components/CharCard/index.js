import './styles.css'

function CharCard( {name, gender, image, status} ) {
    return (
        <div className={(status === "Alive" && "green") || (status === "Dead" &&"red") || (status === "unknown" && "gray")}>
            <div>
                <img src={image} alt={name}></img>
            </div>
            <div className="name_container">
            <div className="name">{(name.length > 15) ? (name.slice(0, 15) + "...") : (name)}</div>
            <div className="gender">{gender}</div>
            </div>
        </div>
    )
}

export default CharCard