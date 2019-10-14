'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PollSchema extends Schema {
  up() {
    this.create('polls', table => {
      table.increments();
      table
        .integer('work_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('works')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('descretion_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('descretion')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('note').notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('polls');
  }
}

module.exports = PollSchema;
