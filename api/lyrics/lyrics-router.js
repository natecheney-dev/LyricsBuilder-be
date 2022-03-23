const express = require('express');
const router = express.Router();

const Lyrics = require('./lyrics-model')


router.get('/', (req, res, next) => {
    Lyrics.getAll()
        .then(item => {
            res.status(200).json(item)
        })
})

router.get('/:id', (req, res) => {
    res.status(200).json('test')
})

router.post('/', async (req, res, next) => {
    try {
        const lyric = await Lyrics.add(req.body)
        res.status(201).json(req.body)
    }
    catch (err) {
        next(err)
    }
})





module.exports = router;