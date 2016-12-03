'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  up () {
    this.create('Products', (table) => {
      table.increments()
      table.string('name')
      table.string('unit_size')
      table.integer('quantity')
      table.timestamps()
    })
  }

  down () {
    this.drop('Products')
  }

}

module.exports = ProductsTableSchema
