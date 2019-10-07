/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');



Route.post('/authenticate', "AuthController.authenticate" );
Route.get('/events', "EventController.index" );
Route.get('/events/:id', "EventController.show" );


Route.group(()=>{
Route.post('register', "AuthController.register" );
Route.resource('events', "EventController" ).apiOnly().except("get");
Route.resource('categories', 'CategoryController').apiOnly();
Route.resource('works', 'WorkController').apiOnly();
}).middleware('auth');
