exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 17).notNullable().unique();
    tbl.string('make', 120).notNullable();
    tbl.string('model', 120).notNullable();
    tbl.numeric('mileage').unsigned().notNullable();
    tbl.string('title', 120);
    tbl.string('transmission', 120);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
