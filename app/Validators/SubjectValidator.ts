import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class SubjectValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }),
    user_id: schema.string({ trim: true }),
    first_review: schema.boolean(),
    second_review: schema.boolean(),
    third_review: schema.boolean(),
  })

  public messages = {
    required: '{{ field }} is required',
    boolean: '{{ field }} must be a boolean',
    string: '{{ field }} must be a string',
  }
}
export class SubjectValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string.optional({ trim: true }),
    first_review: schema.boolean.optional(),
    second_review: schema.boolean.optional(),
    third_review: schema.boolean.optional(),
  })

  public messages = {
    boolean: '{{ field }} must be a boolean',
    string: '{{ field }} must be a string',
  }
}
