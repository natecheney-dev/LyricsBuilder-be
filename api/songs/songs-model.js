const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    get,
    insert,
    update,
    remove,
};


function getAll() {
    return db('songs')
}
function get(id) {
    return db('songs')
        .where({ id })
        .first();
}
function insert(song) {
    return db('songs')
        .insert(song)
        .then(([id]) => get(id));
}
function update(id, changes) {
    return db('songs')
        .where('id', id)
        .update(changes)
        .then((count) => (count > 0 ? get(id) : null));
}
function remove(id) {
    return db('actions').where('id', id).del();
}