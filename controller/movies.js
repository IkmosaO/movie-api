const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send({ movies })
}

const getMoviesByTitle = (request, response) => {
  const { title } = request.params
  const findTitle = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(String(title))
  })

  return response.send(findTitle)
}

const getMoviesByDirector = (request, response) => {
  const { director } = request.params
  const findDirector = movies.filter((movie) => {
    return movie.directors.join(' ').toLowerCase().includes(String(director))
  })

  return response.send(findDirector)
}

const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('A field is missing')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

// console.log(movies.filter((movie) => movie.directors.join(' ').toLowerCase().includes('joseph')))

module.exports = {
  getAllMovies,
  getMoviesByTitle,
  getMoviesByDirector,
  saveNewMovie
}
