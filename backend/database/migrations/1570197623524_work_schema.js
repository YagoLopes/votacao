'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkSchema extends Schema {
  up () {
    this.create('works', (table) => {
      table.increments()
      table.string('title').notNullable().unique()
      table.string('description',240).notNullable()
      table.string('owner').notNullable().unique()
      table.string('email').notNullable().unique()
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
