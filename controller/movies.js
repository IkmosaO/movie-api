const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send({ movies })
}

const getMoviesByTitle = (request, response) => {
  const { title } = request.params
  const findTitle = movies.filter((movie) => {
    return movie.title.includes(String(title))
  })

  return response.send(findTitle)
}
console.log(movies.filter((movie) => movie.title.includes('Men')))

module.exports = {
  getAllMovies,
  getMoviesByTitle
}
