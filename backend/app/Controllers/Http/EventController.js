'use strict'

const Event = use("App/Models/Event")

class EventController {

  async index () {
    const events = await Event.all();
    return events;
  }

  async store ({ request}) {
    const data = request.only(['name', 'start', 'end']);
const event = await Event.create(data);
return event;
  }

  async show ({ params }) {

    const event = await Event.findOrFail(params.id);
    return event;
  }


  async update ({ request}) {
    const data = request.only(['name', 'start', 'end']);
    const event = await Event.update(data)
    await event.save()
return event;
  }


  async destroy ({ params}) {
    const event = await Event.findOrFail(params.id);
    await event.delete();
  }
}

module.exports = EventController
