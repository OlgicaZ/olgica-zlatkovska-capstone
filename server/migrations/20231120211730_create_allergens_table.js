exports.up = function(knex) {
    return knex.schema.createTable('allergens', (table) => {
        table.increments('id').primary();
        table
            .integer('menu_item_id')
            .unsigned()
            .references('menu_items.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('allergen_name').notNullable();
        table.boolean('is_contained').notNullable();
        table.boolean('can_be_omitted').notNullable();
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('allergens');
};
