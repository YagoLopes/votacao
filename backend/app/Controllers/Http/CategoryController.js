'use strict';

const Category = use('App/Models/Category');

class CategoryController {
  async index() {
    const categories = await Category.all();
    return categories;
  }

  async store({ request }) {
    const data = request.only(['description', 'event_id']);
    const category = await Category.create(data);
    return category;
  }

  async show({ params }) {
    const categories = await Category.query()
      .where('event_id', '=', params.id)
      .fetch();
    if (categories) {
      return categories;
    }
  }

  async update({ params, request }) {
    const data = request.only(['description']);

    const category = await Category.find(params.id);

    category.merge(data);

    await category.save();
    return category;
  }

  async destroy({ params }) {
    const category = await Category.findOrFail(params.id);
    await category.delete();
  }
}

module.exports = CategoryController;
