'use strict'


const Category = use("App/Models/Category")

class CategoryController {

  async index () {
const category = await Category.all();
return category;
  }


  async store ({ request}) {
    const data = request.only(['description','event_id']);
    const category = await Category.create(data);
    return category;
  }


  async show ({ params }) {

    const category = await Category.findOrFail(params.id);
    return category;
  }



  async update ({ params, request, response }) {
  }

  async destroy ({ params}) {
    const category = await Category.findOrFail(params.id);
    await category.delete();
  }
}

module.exports = CategoryController
