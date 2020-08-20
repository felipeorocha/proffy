import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();
    table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamp('created_at')
      .defaultTo(knex.raw('now()'))
      .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
