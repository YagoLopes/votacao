'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriesSchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('description').notNullable();
      table.integer('event_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('events')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategoriesSchema
