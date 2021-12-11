/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')
const app = express()
const { getAllMovies, getMoviesByTitle } = require('./controller/movies')

app.get('/movies', getAllMovies)

app.get('/movies/:title', getMoviesByTitle)

app.listen(1337, () => {
  console.log('listening on port 1331')
})
