import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  console.log(props)
  const {title, image, rating, id} = props
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
        className="movie-img"
      />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
        <Link to={`/movie/${id}`} className="link">
          <button className="details-btn" type="button">
            View Details
          </button>{' '}
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
