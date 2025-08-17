import './index.css'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const history = useHistory()

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleSearch = () => {
    if (query.trim() !== '') {
      history.push(`/search/${query.trim()}`)
      setQuery('')
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="navbar">
      <div className="leftside">
        <Link to="/" className="link">
          <h1 className="logo">MovieDB</h1>
        </Link>
      </div>

      <div className={`rightside ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="link-items">
          <Link to="/" className="link">
            <li>Popular</li>
          </Link>
          <Link to="/top-rated" className="link">
            <li>Top Rated</li>
          </Link>
          <Link to="/upcoming" className="link">
            <li>Upcoming</li>
          </Link>
        </ul>
        <div className="searchbox">
          <input
            type="search"
            className="search"
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
          <button className="searchbtn" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <button className="mobile-toggle" type="button" onClick={toggleMenu}>
        {mobileMenuOpen ? <p>Times</p> : <p>Bars</p>}
      </button>
    </div>
  )
}

export default Navbar
