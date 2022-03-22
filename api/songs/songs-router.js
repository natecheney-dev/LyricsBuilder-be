const express = require('express');
const router = express.Router();

const Songs = require('./songs-model')
const { validateId, validateBody } = require('./songs-middleware')

router.get('/', (req, res, next) => {
    
    Songs.getAll()
        .then(item => {
            console.log(item[0].lyrics);
            res.status(200).json(item)
        })
})

router.get('/:id', validateId, (req, res) => {
    res.status(200).json(req.songs)
})

router.post('/', validateBody, async (req, res, next) => {
    try {
        const song = await Songs.insert({
            id: req.id,
            author: req.author,
            songName: req.songName,
            totalTime: req.totalTime,
            lyrics: req.lyrics
        })
        res.status(201).json(song)
    }
    catch (err) {
        next(err)
    }
})

router.put('/:id', validateId, validateBody, (req, res, next) => {
    Songs.update(req.params.id, {
        id: req.id,
        author: req.author,
        songName: req.songName,
        totalTime: req.totalTime,
        lyrics: req.lyrics
    })
        .then(() => {
            return Songs.get(req.params.id)
        })
        .then(song => {
            res.json(song)
        })
        .catch(next)
})

router.delete('/:id', validateId, (req, res, next) => {
    User.remove(req.params.id)
        .then(() => {
            res.status(200).json(req.songs)
        })
        .catch(next);

});

module.exports = router;