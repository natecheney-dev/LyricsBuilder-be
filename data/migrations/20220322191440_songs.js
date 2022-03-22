// exports.up = function (knex) {
//     return knex.schema
    
//         .createTable('songs', function (songs) {
//             songs.increments('id');
//             songs.string('author', 64).notNullable();
//             songs.string('songName', 64).notNullable();
//             songs.integer('totalTime').notNullable();
            

//         })
//         .createTable('lyrics', function (lyrics) {
//             lyrics.integer('lineNumber').notNullable();
//             lyrics.string('words', 144).notNullable();
//             lyrics
//                 .integer('song_id')
//                 .unsigned()
//                 .notNullable()
//                 .references('id')
//                 .inTable('songs')
//                 .onDelete('CASCADE')
//                 .onUpdate('CASCADE');
//         })
// };


// exports.down = function (knex) {
//     return knex.schema
//         .dropTableIfExists("lyrics")
//         .dropTableIfExists("songs");
        
        
// };

exports.up = function(knex) {
    return knex.schema
      .createTable('songs', function(songs) {
        songs.increments('id');
            songs.string('author', 64).notNullable();
            songs.string('songName', 64).notNullable();
            songs.integer('totalTime').notNullable();
            
      })
      .createTable('lyrics', function(lyrics) {
        lyrics.increments('lyrics_id');
        lyrics.integer('lineNumber').notNullable();
        lyrics.text('words', 256).notNullable();
        lyrics
          .integer('song_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('songs')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lyrics').dropTableIfExists('songs');
  };
