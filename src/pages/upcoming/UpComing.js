import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import '../../components/MovieCard/';

const UpComing = () => {

  const [upComing, setUpComing] = useState({
    isFetched: false,
    data: {},
    error: null
  })

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
      params: {
        api_key: "a2a7da24dcc0311ab2440f05d2d45669"
      }
    })
      .then(function (response) {
        setUpComing({
          isFetched: true,
          data: response.data,
          error: false
        })
      })
      .catch(function (error) {
        setUpComing({
          isFetched: true,
          data: [],
          error: error
        })
      })
  }, [])

  return (
    <>
      <div className="container">
        {
          upComing.isFetched ? (
            <div className="listOfMovies">
              {
                upComing.data.results.map((movie, index) => (

                  <Link to={`/movie/${movie.id}`} className="card">
                    <span className="card-rating">{movie.vote_average}</span>
                    <div className="img-holder">
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="card-img" />
                    </div>
                    <h3 className="card-title">{movie.title}</h3>
                    <h5 className="card-date">{movie.release_date}</h5>
                  </Link>

                ))
              }
            </div>
          )
            : (
              <h1>Loading...</h1>
            )

        }
      </div>
    </>
  )
}

export default UpComing;