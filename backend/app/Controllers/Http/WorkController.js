'use strict';
const Work = use('App/Models/Work');
class WorkController {
  async index() {
    const works = await Work.all();
    return works;
  }

  async store({ request }) {
    const data = request.only([
      'title',
      'description',
      'owner',
      'email',
      'categories_id',
    ]);
    const work = await Work.create(data);
    return work;
  }

  async show({ params }) {
    const works = await Work.query()
      .where('categories_id', '=', params.id)
      .fetch();
    if (works) {
      return works;
    }
  }

  async update({ params, request }) {
    const data = request.only([
      'title',
      'description',
      'owner',
      'email',
      'categories_id',
    ]);

    const work = await Work.find(params.id);

    work.merge(data);

    await work.save();
    return work;
  }

  async destroy({ params }) {
    const work = await Work.findOrFail(params.id);
    await work.delete();
  }
}

module.exports = WorkController;
