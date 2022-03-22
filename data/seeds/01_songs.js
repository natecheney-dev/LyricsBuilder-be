/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex, Promise) {
  return knex('songs').insert([
    {
      id: 1,
      author: 'Nathan Cheney',
      songName: 'A testers song',
      totalTime: 144,
    },
  ]);
};
