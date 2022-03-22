const Songs = require('./songs-model')

async function validateId(req, res, next) {
    try {
        const { id } = req.params
        const songs = await Songs.get(id)
        if (!songs) {
            next({ status: 404, message: 'Song not found' })
        }
        else {
            req.songs = songs
            next()
        }
    }
    catch (err) {
        res.status(500).json({
            message: 'Song not found',
        })
    }
}

async function validateBody(req, res, next) {
    try {
        const { id, author, songName, lyrics, totalTime } = req.body
        if (!id, author, songName, lyrics, totalTime) {
            res.status(400).json({
                message: 'Missing information...'
            })
        }
        else{
            req.id = id,
            req.author = author,
            req.songName = songName,
            req.totalTime = totalTime,
            req.lyrics = lyrics
            next();
        }
    }
    catch (err) {
        res.status(500).json({
            message: 'Body not found'
        })
    }
}
module.exports = {
    validateBody,
    validateId
}