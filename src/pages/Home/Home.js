import {useState, useEffect} from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import './index.css'

const Home = () => {
  const [movies, setMovies] = useState([])

  const API_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=15909111386dbfc15ce4da84fd53981f&language=en-US&page=1'
  const TOKEN = process.env.REACT_APP_TMDB_TOKEN

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
      .catch(err => console.error('Error fetching movies:', err))
  }, [])
  console.log(movies)
  return (
    <div className="home-container">
      <h1>Popular</h1>
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

export default Home
