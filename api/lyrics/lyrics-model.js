const db = require('../../data/dbConfig')

const getAll = async () => {
    return db('lyrics')
}

const getById = async (id) => {
    return db('lyrics').where('lyrics_id', id).first();
};


const addReturn = async (stuff) => {
    console.log(stuff)
    return db('lyrics')
        .insert(stuff)
        .then(([lyrics_id]) => getById(lyrics_id));
}


const add = async (lyrics_array) => {
    console.log(lyrics_array)
    for (let i = 0; i < lyrics_array.length; i++) {
        addReturn(lyrics_array[i])
    }

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