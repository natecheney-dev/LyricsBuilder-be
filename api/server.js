const express = require('express');
const server = express();

const songsRouter = require('./songs/songs-router')


server.use(express.json());
server.use('/api/songs', songsRouter)


server.get('/', (req, res) => {
    res.send(`<h2>Test Line</h2>`);
  });

module.exports = server;