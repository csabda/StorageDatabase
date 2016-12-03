'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {
    static get rules () {
        return {
            name: 'required',
            unit_size: 'required',
            quantity: 'required|integer|above:-1',
        }        
    }/*     
    category () {
        return this.belongsTo('App/Model/Category')
    }*/
}

module.exports = Product