import { Link } from 'react-router-dom'
import './MovieCard.scss'

const MovieCard = ( id, title, imgLink, rating, releaseDate ) => {
  return(
    <>
      <Link to={`/movie/${id}`} className="card">
        <span className="card-rating">{rating}</span>
        <img src={imgLink} alt="" className="card-img"/>
        <h2 className="card-title">{title}</h2>
        <h5 className="card-date">{releaseDate}</h5>
      </Link>
    </>
  )
}

export default MovieCard;