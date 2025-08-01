import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './index.css'

const API_KEY = process.env.TMDB_API_KEY
console.log(API_KEY)

const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    // Fetch movie details
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=15909111386dbfc15ce4da84fd53981f&language=en-US`,
    )
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error('Movie details fetch error:', err))

    // Fetch cast
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=15909111386dbfc15ce4da84fd53981f&language=en-US`,
    )
      .then(res => res.json())
      .then(data => setCast(data.cast))
      .catch(err => console.error('Cast fetch error:', err))
  }, [id])

  if (!movie) return <div className="loading">Loading...</div>

  return (
    <div className="movie-details-page">
      <div className="movie-info">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-text">
          <h2>{movie.title}</h2>
          <p>
            <strong>Rating:</strong> {movie.vote_average} ⭐
          </p>
          <p>
            <strong>Duration:</strong> {movie.runtime} mins
          </p>
          <p>
            <strong>Genre:</strong> {movie.genres.map(g => g.name).join(', ')}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
      </div>

      <h3>Cast</h3>
      <div className="cast-grid">
        {cast.slice(0, 12).map(member => (
          <div key={member.id} className="cast-card">
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                  : 'https://via.placeholder.com/185x278?text=No+Image'
              }
              alt={member.name}
              className="cast-image"
            />
            <p className="cast-name">{member.name}</p>
            <p className="cast-character">as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
