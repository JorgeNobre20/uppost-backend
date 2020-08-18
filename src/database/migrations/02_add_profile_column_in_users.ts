import Knex from "knex";

export async function up(knex: Knex){
    return knex.schema.alterTable("users", table => {
        table.string("profile").notNullable().defaultTo("default_profile.svg");
    });
}

export async function down(knex: Knex){
    return knex.schema.alterTable("users", table => {
        table.dropColumn("profile");
    });
}