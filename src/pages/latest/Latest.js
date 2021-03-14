import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Latest = () => {

  const [ latestMovie, setLatestMovie ] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/latest`, {
      params: {
        api_key: "a2a7da24dcc0311ab2440f05d2d45669"
      }
    })
      .then(function (response) {
        console.log(response)
        setLatestMovie({
          isFetched: true,
          data: response.data,
          error: false
        })
      })
      .catch(function (error) {
        setLatestMovie({
          isFetched: true,
          data: [],
          error: error
        })
      })
  }, [] )

  console.log(latestMovie.data);

  return(
    <>

      <div className="container">
        {
          latestMovie.isFetched ? (
            <div className="listOfMovies">
              {
                  <Link to={`/movie/+${latestMovie.data.id}`} className="card">
                  <span className="card-rating">{latestMovie.data.vote_average}</span>
                    <div className="img-holder">
                    <img src={`https://image.tmdb.org/t/p/w500${latestMovie.data.poster_path}`} alt="" className="card-img" />
                    </div>
                  <h3 className="card-title">{latestMovie.data.name}</h3>
                  <h5 className="card-date">{latestMovie.data.release_date}</h5>
                  </Link>
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

export default Latest;