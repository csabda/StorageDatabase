'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
//Route.on('/').render('main')

Route.on('/').render('welcome');
Route.get('/show', 'StorageController.show');
Route.get('/create', 'StorageController.create');
Route.post('/create', 'StorageController.createNew');
Route.get('/product/:id', 'StorageController.show');
Route.get('/product/:id/edit', 'StorageController.edit');
Route.post('/product/:id/edit', 'StorageController.editSubmit');
Route.get('/product/:id/delete', 'StorageController.delete');

Route.get('/register', 'UserController.register');
Route.post('/register', 'UserController.registerSubmit');
Route.get('/login', 'UserController.login');
Route.post('/login', 'UserController.loginSubmit');
Route.get('/logout', 'UserController.logout');

Route.get('/search', 'StorageController.search');