/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("tasks", (table) =>{
        table.increments("id").primary();
        table.integer("user_id").references("id").inTable("users").onDelete('cascade');
        table.string("task");
        table.timestamps(true, true);
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks");
};
