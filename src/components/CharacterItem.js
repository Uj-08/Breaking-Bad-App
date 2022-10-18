
const CharacterItem = ({item}) => {

  console.log(item)

  return (<div className="card">
    <div className="card-inner">
      <div className="card-image">
        <img src={item.img} alt={item.name}></img>
        <div className="card-text">
          <h1>{item.name}</h1>
          <ul>
            <li><strong>Actor Name: </strong> {item.portrayed} </li>
            <li><strong>Appearance: </strong> {item.appearance.map( (appear, index) => {
              return (<>{appear}{index < item.appearance.length-1 ? "," : " "}  </>)
            } )} </li>
            <li><strong>Status: </strong> {item.status} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>);
}

export default CharacterItem;
