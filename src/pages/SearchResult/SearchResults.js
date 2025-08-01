import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'
// import './index.css';

const TOKEN = process.env.TMDB_TOKEN

const SearchResults = () => {
  const [results, setResults] = useState([])
  const location = useLocation()

  const query = new URLSearchParams(location.search).get('q')

  useEffect(() => {
    if (!query) return

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=15909111386dbfc15ce4da84fd53981f&language=en-US&query=${query}&page=1`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          accept: 'application/json',
        },
      },
    )
      .then(res => res.json())
      .then(data => setResults(data.results || []))
      .catch(err => console.error('Search error:', err))
  }, [query])

  return (
    <div className="search-results-container">
      <h2>Search Results for: {query}</h2>
      {results.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="movies-grid">
          {results.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.poster_path}
              rating={movie.vote_average}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults
