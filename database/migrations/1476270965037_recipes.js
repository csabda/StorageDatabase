'use strict'

const Schema = use('Schema')

class RecipesSchema extends Schema {

  up () {
    this.create('recipes', (table) => {
      table.increments()
      table.string('name')
      table.string('unit_size')
      table.integer('quantity')
      table.timestamps()
    })
  }

  down () {
    this.drop('recipes')
  }

}

module.exports = RecipesSchema