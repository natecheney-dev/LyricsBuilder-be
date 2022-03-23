const db = require('../../data/dbConfig')

const getAll = async () => {
    return db('lyrics')
}

const getById = async (id) => {
    return db('lyrics').where('lyrics', id).first();
};

const add = async (lyrics_array) => {
    return db('lyrics').insert(lyrics_array.map(item => item)).returning('*');
};

const update = (id, lyrics_object) => {
    return db('lyrics')
        .where('lyrics_id', id)
        .update(lyrics_object)
        .returning('*')
}

module.exports = {
    getAll,
    getById,
    add,
    update
}