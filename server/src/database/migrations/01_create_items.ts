import Knex from 'knex';

//realiza alterações/criação de tabela no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();      
    });

} 

 //desfazer ou deletar 
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');

}