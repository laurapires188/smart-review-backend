import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Subject from 'App/Models/Subject'
import { SubjectValidatorStore, SubjectValidatorUpdate } from 'App/Validators/SubjectValidator'
import { limpaCamposNulosDeObjeto } from 'App/Utils/Utils'

export default class SubjectsController {
  public async index() {
    const subject = await Subject.all()

    return subject
  }

  public async store({ request }: HttpContextContract) {
    const validateData = await request.validate(SubjectValidatorStore)

    const { title, first_review, second_review, third_review, user_id } = validateData

    const subject = await Subject.create({
      title,
      first_review,
      second_review,
      third_review,
      user_id,
    })
    return subject
  }

  public async update({ request }) {
    const id = request.param('id')
    if (!id) return
    const validateData = await request.validate(SubjectValidatorUpdate)

    const subject = await Subject.findOrFail(id)
    subject.merge(limpaCamposNulosDeObjeto(validateData))
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
