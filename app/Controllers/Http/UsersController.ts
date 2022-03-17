import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const user = await User.all()

    return user
  }

  public async store({ request }: HttpContextContract) {
    const name = request.input('name')
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.create({
      name,
      email,
      password,
    })

    return user
  }

  public async update({ params, request }) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['name', 'email', 'password'])

    user.merge(data)
    await user.save()

    return user
  }

  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return

    const user = await User.findOrFail(id)
    await user.delete()

    return user
  }
}
