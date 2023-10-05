import { useState } from "react"

export  const SearchMovie = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '7cbd98ecfd9cea6be03052630f6c76ba'

const [search, setSearch] = useState('')
const [movies, setMovies] = useState([])

const handleInputChange = (e) => {
    setSearch(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    fetchMovies()
}

const fetchMovies= async () => {
    try{
     const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`)
     const data = await response.json()
     setMovies(data.results)
    } catch(error) {
        console.error('Error', error)
    }
}

  return (
    <div className="container">
        <h1 className="title">
            SearchMovie
            </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={search} onChange={handleInputChange}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            ))}

        </div>


    </div>
  )
}
