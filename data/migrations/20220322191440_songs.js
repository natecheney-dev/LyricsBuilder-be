/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('songs', function (songs) {
        songs.increments('id').primary;
        songs.string('author', 64).notNullable();
        songs.string('songName', 64).notNullable();
        songs.integer('totalTime').notNullable();
       
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("songs");
};
