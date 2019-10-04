'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('name').notNullable(),
      table.datetime('start',['yyyy-MM-dd HH:ii:ss']).notNullable(),
      table.datetime('end',['yyyy-MM-dd HH:ii:ss']).notNullable(),
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
