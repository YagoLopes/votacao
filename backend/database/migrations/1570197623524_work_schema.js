'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkSchema extends Schema {
  up () {
    this.create('works', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description',240).notNullable()
      table.string('owner').notNullable()
      table.string('email').notNullable()
      table.integer('categories_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('works')
  }
}

module.exports = WorkSchema
