exports.up = function(knex) {
    return knex.schema.createTable('dietary_restrictions', (table) => {
        table.increments('id').primary();
        table
            .integer('menu_item_id')
            .unsigned()
            .references('menu_items.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('restriction_name').notNullable();
        table.boolean('is_safe').notNullable();
        table.boolean('can_be_adjusted').notNullable();
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('dietary_restrictions');
};
