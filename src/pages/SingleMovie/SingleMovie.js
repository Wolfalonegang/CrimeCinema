import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

import './SingleMovie.scss'

const SingleMovie = ({ match }) => {
  
  const [singleMovie, setSingleMovie] = useState({
    isFetched: false,
    data: {},
    error: null
  })

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
      params: {
        api_key: "a2a7da24dcc0311ab2440f05d2d45669"
      }
    })
      .then(function (response) {
        setSingleMovie({
          isFetched: true,
          data: response.data,
          error: false
        })
      })
      .catch(function (error) {
        setSingleMovie({
          isFetched: true,
          data: [],
          error: error
        })
      })
  }, [])

    const [SingleMovieRecommendations, setSingleMovieRecommendations] = useState({
      isFetched: false,
      data: {},
      error: null
    })

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/recommendations`, {
        params: {
          api_key: "a2a7da24dcc0311ab2440f05d2d45669"
        }
      })
        .then(function (response) {
          setSingleMovieRecommendations({
            isFetched: true,
            data: response.data,
            error: false
          })
        })
        .catch(function (error) {
          setSingleMovieRecommendations({
            isFetched: true,
            data: [],
            error: error
          })
        })
    }, [])


  console.log(SingleMovieRecommendations.data);


  const [singleMovieActors, setSingleMovieActors] = useState({
    isFetched: false,
    data: {},
    error: null
  })

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
      params: {
        api_key: "a2a7da24dcc0311ab2440f05d2d45669"
      }
    })
      .then(function (response) {
        setSingleMovieActors({
          isFetched: true,
          data: response.data,
          error: false
        })
      })
      .catch(function (error) {
        setSingleMovieActors({
          isFetched: true,
          data: [],
          error: error
        })
      })
  }, [])


  console.log(singleMovieActors.data);

  return(
    <>
      <div className="container">
        {
          singleMovie.isFetched ? (
            <div className="listOf">
              {
                <div className="single-card">
                  
                  <div className="left">
                    <img src={`https://image.tmdb.org/t/p/w500${singleMovie.data.poster_path}`} alt="" className="card-img" />
                    <span className="card-rating">{singleMovie.data.vote_average}</span>
                  </div>

                  <div className="right">
                    <h3 className="card-title">{singleMovie.data.title}</h3>
                    <h4 className="card-subtitle">{singleMovie.data.tagline}</h4>
                    
                    <p className="card-overview">{singleMovie.data.overview}</p>

                    <h5 className="votes">Vote: 10 / {singleMovie.data.vote_average}</h5>

                    <h5 className="time">Runtime: {singleMovie.data.runtime} min</h5>

                    <span className="title">genres:</span>

                      {
                        singleMovie.data.genres.map((prod, index) => (
                          <>
                              <span className="genre-title">{prod.name}</span>
                          </>
                        ))
                      }

                    <h5 className="card-date">{singleMovie.data.release_date}</h5>

                  </div>

                  </div>
}
              <h3 className="heading">Produced by:</h3>
              <div className="prod-companies">

                {
                  singleMovie.data.production_companies.map((prod, index) => (
                    <>
                      <div className="prodby">
                        <img src={`https://image.tmdb.org/t/p/w500${prod.logo_path}`} alt="" className="prod-img" />
                        <h3 className="prod-title">{prod.name}</h3>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>
          )
            : (
              <h1>Loading...</h1>
            )
              
        }
      </div>

      <div className="container">

        {
          singleMovieActors.isFetched ? (
              <div className="listOf">
                <h3 className="heading">Actors</h3>
                <div className="listOfActors">
                {
                  singleMovieActors.data.cast.map((actor, index) => (
                    <Link to={`/movie/${actor.id}`} className="actor">
                      <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" className="actor-img" />
                      <h3 className="original-name">{actor.name}</h3>
                      <h5 className="character">character: {actor.character}</h5>
                    </Link>
                  ))
                }
              </div>
              </div>
          )
            : (
              <h1>Loading...</h1>
            )

        }
        
      </div>

      <div className="container">
        {
          SingleMovieRecommendations.isFetched ? (
            <div className="listOf">
              <h2 className="heading">Recomendations</h2>
              <div className="listOfMovies">
              {
                SingleMovieRecommendations.data.results.map((movie, index) => (

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

export default SingleMovie;