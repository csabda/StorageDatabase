'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {

  recipes () {
    return this.hasMany('App/Model/Product')
  }
}

module.exports = Category