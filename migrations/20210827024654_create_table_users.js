
exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('idade').notNull()
    table.string('password').notNull().unique()
    table.integer('telphone').unique()


  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
