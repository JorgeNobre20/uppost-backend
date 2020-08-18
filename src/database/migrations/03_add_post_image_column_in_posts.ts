import Knex from "knex";

export async function up(knex: Knex){
    return knex.schema.alterTable("posts", (table) => {
        table.string("post_image");
    })
}

export async function down(knex: Knex){
    return knex.schema.alterTable("posts", (table) => {
        table.dropColumn("post_image");
    });
}