import './cardComponent.css';

const getPosters = (posterpath) => {
    return `https://image.tmdb.org/t/p/w500/${posterpath}`;
}

const CardComponent = ({id, name, image, rating, date}) => {
  return (
    <>
        <div className="card__container">
            <div id="card__details">
                <div id="card__avatar">
                      <img src={getPosters(image)} alt={name} />
                </div>
                <h4 id="card__id">Movie ID: {id}</h4>
                <h1 id="card__title">{name}</h1>
                <h4 id="card__rating">Rating: {rating}</h4>
                <h4 id="card__date">Release Date: {new Date(date).toDateString()}</h4>
            </div>
        </div>
    </>
  )
}

export default CardComponent