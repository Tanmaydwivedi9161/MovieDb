import {useState, useEffect} from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'

const TopRated = () => {
  const [movies, setMovies] = useState([])

  const API_URL =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=15909111386dbfc15ce4da84fd53981f&language=en-US&page=1'
  const TOKEN = process.env.TMDB_TOKEN

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error('Error fetching movies:', err))
  }, [])

  return (
    <div className="home-container">
      <h1>Top Rated</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  )
}

export default TopRated
