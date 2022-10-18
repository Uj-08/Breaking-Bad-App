const CharacterItem = ({item}) => {
  const {name, img, portrayed, category, appearance, status} = item
  console.log(item)

  return (<div className="card">
    <div className="card-inner">
      <div className="card-image">
        <img src={img} alt={name} onError={(e) => {
          e.target.src = 'https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623'
        }}/>
        <div className="card-text">
          <h1>{name}</h1>
          <ul>
            <li><strong>Actor: </strong> {portrayed} </li>
            <li><strong>Show: </strong> {category} </li>
            <li><strong>Appearance: </strong> {appearance.map( (appear, index) => {
              return (<>{appear}{index < appearance.length-1 ? "," : " "}  </>)
            } )} </li>
            <li><strong>Status: </strong> {status} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>);
}

export default CharacterItem;
