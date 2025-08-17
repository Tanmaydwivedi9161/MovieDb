import {useState, useEffect} from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import './index.css'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1) // pagination state
  const TOKEN = process.env.REACT_APP_TMDB_TOKEN

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=15909111386dbfc15ce4da84fd53981f&language=en-US&page=${page}`

    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setMovies(data.results || []))
      .catch(err => console.error('Error fetching movies:', err))
  }, [page]) // fetch again when page changes

  return (
    <div className="home-container">
      <h1>Popular Movies</h1>

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

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
        >
          Prev
        </button>
        <p>{page}</p>
        <button type="button" onClick={() => setPage(prev => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Home
