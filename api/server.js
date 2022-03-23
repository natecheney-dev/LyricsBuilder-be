const express = require('express');
const server = express();

const songsRouter = require('./songs/songs-router')
const lyricsRouter = require('./lyrics/lyrics-router')


server.use(express.json());
server.use('/api/songs', songsRouter)
server.use('/api/lyrics', lyricsRouter)


server.get('/', (req, res) => {
    res.send(`<h2>Test Line</h2>`);
  });

module.exports = server;