/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) =>{
        table.increments("id").primary();
        table.string("rank");
        table.string("first_name");
        table.string("last_name");
        table.string("work_email");
        table.string("personal_email");
        table.string("phone_number"); 
        table.string("username").unique().notNullable();
        table.string("hashed_password").notNullable();
        table.string("role");
        table.integer("sponsor_id");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
