import Knex from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable("posts", table => {
        table.increments("id").primary();
        table.string("description");

        table.integer("user_id")
             .references("id")
             .inTable("users")
             .notNullable()
             .onDelete("CASCADE")
             .onUpdate("CASCADE");
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable("posts");
}