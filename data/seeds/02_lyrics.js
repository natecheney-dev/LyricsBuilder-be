// exports.seed = function (knex) {
//   return knex('lyrics').insert([
//     {
//       song_id: 1,
//       lineNumber: 1,
//       words: 'text about the song 123'
//     },
//     {
//       song_id: 2,
//       lineNumber: 2,
//       words: 'text about the song 123'
//     },
//     {
//       song_id: 3,
//       lineNumber: 3,
//       words: 'text about the song 123'
//     },
//   ]);
// };
const lyrics = [
  {
    song_id: 1,
    words: 'I wish the ring had never come to me. I wish none of this had happened.',
    lineNumber: 1
  },
  {
    song_id: 1,
    words: 'I think we should get off the road. Get off the road! Quick!',
    lineNumber: 2
  },
  {
    song_id: 2,
    words: 'Our business is our own.',
    lineNumber: 1
  },
  {
    song_id: 3,
    words: 'Can you protect me from yourself?',
    lineNumber: 1
  },
  
];

exports.lyrics = lyrics;

exports.seed = function (knex) {
  return knex('lyrics').insert(lyrics);
};