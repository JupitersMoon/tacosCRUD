
exports.up = function(knex) {
  return knex.schema.createTable('tacos', (tbl) => {
    tbl.increments();
    tbl.string('name', 100).notNullable().defaultTo('Taco');
    tbl.string('picture').notNullable().defaultTo('https://pbs.twimg.com/profile_images/589302836309020672/EuJ_nEg-.jpg');
    tbl.text('description').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tacos');
};
