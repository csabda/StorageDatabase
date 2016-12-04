'use strict'
const Category = use('App/Model/Category')
const Product = use('App/Model/Product')
const Validator = use('Validator')
const Database = use('Database')

class StorageController {

    * create(req, res) {

        yield res.sendView('create');
    }

    * createNew(req, res) {
        var post = req.post();
        var userData={
            name:post.name,
            unit_size:post.unit_size,
            quantity:parseInt(post.quantity)
        };
        //console.log(userData.name, userData.unit_size, userData.quantity);
        const validation = yield Validator.validateAll(userData, Product.rules)

         if (validation.fails()) {
             yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()
                console.log("nem sikerült");
            res.redirect('back')
            return
         }

        var find_by_name = yield Database.from('Products').where('name',userData.name);

        if (find_by_name.length !== 0) {
            var temp = parseInt(find_by_name[0].quantity);
            temp += parseInt(userData.quantity);
            //console.log(temp);
            const rowsaffected = yield Database.table('Products').where('name',userData.name).update('quantity', temp);
            //console.log(rowsaffected);
            /*var find = yield Database.from('Products').where('name',userData.name);
            console.log(find[0].quantity);*/
        } else {
            console.log("ilyen még nincs");
            var product = yield Product.create(userData);
            yield product.save();
        }

        res.redirect('/show')
    }

    * show(req, res) {

        var products = yield Product.all();

        yield res.sendView('main', {
            products: products.toJSON()
        });
    }

    * edit(req, res) {

        var product=yield Product.findBy('id', req.param('id'));

        yield res.sendView('edit', {
            product: product.toJSON()
        });
    }


    * editSubmit(req, res) {
        var post = req.post();
        var product=yield Product.findBy('id', req.param('id'));

            product.name=post.name;
            product.unit_size=post.unit_size;
            product.quantity=parseInt(post.quantity);

        const validation = yield Validator.validateAll(product, Product.rules)
        if(validation.fails()){
            yield req.withAll().andWith({ errors: validation.messages() }).flash()
            res.redirect('back');
        } else {

            yield product.save();
            res.redirect('/show');
        }
    }

    * search(req, res) {
        var query = req.input('q') || '';
        var page = req.input('page') || 1;
        
        var products = yield Product.query()
            .where(function () {
                if(query!==''){
                    this.where('name','LIKE', '%'+query+'%')
                }
            })
            .paginate(page, 2)
        
            console.log(products.toJSON());

        yield res.sendView('search', {
            products: products.toJSON()
        });
    }

    * delete(req, res) {
        var product=yield Product.findBy('id', req.param('id'));
        
        yield product.delete();

        res.redirect('/');
    }
}

module.exports = StorageController