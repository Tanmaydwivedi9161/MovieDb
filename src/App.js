import './App.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import TopRated from './pages/TopRated/TopRated'
import Upcoming from './pages/Upcoming/Upcoming'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import SearchResults from './pages/SearchResult/SearchResults'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/search" component={SearchResults} />
      </Switch>
    </>
  )
}

export default App
