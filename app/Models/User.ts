import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Subject from './Subject'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static async createUUID (model:User){
    model.id = uuid()
  }

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Subject, {
    foreignKey: 'user_id'
  })
  public subject: HasMany<typeof Subject>

}
