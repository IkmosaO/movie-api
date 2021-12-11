/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')
const app = express()
const { getAllMovies, getMoviesByTitle, getMoviesByDirector, saveNewMovie } = require('./controller/movies')

app.get('/movies', getAllMovies)

app.get('/movies/:title', getMoviesByTitle)

app.get('/movies/directors/:director', getMoviesByDirector)

app.post('/movies', bodyParser.json(), saveNewMovie)

app.listen(1337, () => {
  console.log('listening on port 1337')
})
