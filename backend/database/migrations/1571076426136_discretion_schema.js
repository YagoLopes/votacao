'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class DiscretionSchema extends Schema {
  up() {
    this.create('discretions', table => {
      table.increments();
      table
        .string('name')
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop('discretions');
  }
}

module.exports = DiscretionSchema;
