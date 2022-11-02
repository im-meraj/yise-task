import './cardComponent.css';

const getPosters = (posterpath) => {
    return `https://image.tmdb.org/t/p/w500/${posterpath}`;
}

const CardComponent = ({id, name, image, rating}) => {
  return (
    <>
        <div id="card__container">
            <div id="card__details">
                <h3 id="card__id">Movie ID: {id}</h3>
                <h1 id="card__title">{name}</h1>
                <div id="card__avatar">
                      <img src={getPosters(image)} alt={name} />
                </div>
                <h4 id="card__type">Rating: {rating}</h4>
            </div>
        </div>
    </>
  )
}

export default CardComponent