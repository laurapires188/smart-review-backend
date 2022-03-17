import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Subject from 'App/Models/Subject'

export default class SubjectsController {
  public async index() {
    const subject = await Subject.all()

    return subject
  }

public async store({ request }: HttpContextContract) {
    const title = request.input('title')
    const first_review = request.input('first_review')
    const second_review = request.input('second_review')
		const third_review = request.input('third_review')

    const subject = await Subject.create({
      title,
      first_review,
      second_review,
			third_review
    })

    return subject
  }

public async update({ params, request }) {

    const subject = await Subject.findOrFail(params.id)
    const data = request.only(['title', 'fist_review', 'second_review', 'third_review'])

    subject.merge(data)
    await subject.save()

    return subject
  }

public async destroy({ request }: HttpContextContract) {

    const id = request.param('id')
    if (!id) return

		const subject = await Subject.findOrFail(id)
    await subject.delete()

    return subject
  }

}
