import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subjects extends BaseSchema {
  protected tableName = 'subjects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary()
      table.string('user_id').references('id').inTable('users')
      table.string('title').notNullable()
      table.boolean('first_review').notNullable()
      table.boolean('second_review').notNullable()
			table.boolean('third_review').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
