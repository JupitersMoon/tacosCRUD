exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
          username: 'guy',
          hashed_password: '$2a$10$Jn6CQzMwGPffDWdbXhzkuej4yHlZE/nneX.NZvNPwWduufeNr7M4e'
        },
        {
          username: 'fieri',
          hashed_password: '$2a$10$rDDgJ3plMgqP2xdB4/z5QuOB8ZKAjVGh4j9RTC5xaELj4yaeiZu6m'
        },
        {
          username: 'rowValue3',
          hashed_password: '$2a$10$pyKijgPk/j8h3oa/UPzoEOIXir4nlYmgjAzazgdPoYD6Q1mZApz.2'
        }
      ]);
    });
};
