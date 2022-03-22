
// exports.seed = function (knex) {
//     return knex('songs').insert([
//       {
//         id: 1,
//         author: 'Nathan Cheney',
//         songName: 'A testers song',
//         totalTime: 144,
//       },
//       {

//         author: 'Kelsey Cheney',
//         songName: 'A testers song',
//         totalTime: 144,
//       },
//       {

//         author: 'Andrew Cheney',
//         songName: 'A testers song',
//         totalTime: 144,
//       },
//       {

//         author: 'Chase Cheney',
//         songName: 'A testers song',
//         totalTime: 144,
//       },
//     ]);
//   };
const songs = [
  {
    author: 'Nathan Cheney',
    songName: 'A testers song',
    totalTime: 144,
  },
  {
    author: 'Andrew Cheney',
    songName: 'A testers song',
    totalTime: 144,
  },
  {
    author: 'Kelsey Cheney',
    songName: 'A testers song',
    totalTime: 144,
  },
  {
    author: 'Chase Cheney',
    songName: 'A testers song',
    totalTime: 144,
  },
  
];

exports.songs = songs;

exports.seed = function (knex) {
  return knex('songs').insert(songs);
};