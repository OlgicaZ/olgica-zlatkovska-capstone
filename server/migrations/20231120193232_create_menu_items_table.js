exports.up = function(knex) {
    return knex.schema.createTable('menu_items', (table) => {
        table.increments('id').primary();
        table
            .integer('restaurant_id')
            .unsigned()
            .references('restaurants.id')
            .onUpdate('CAS  CADE')
            .onDelete('CASCADE');
        table.string('menu_item_name').notNullable();
        table.string('description').notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.string('category').notNullable();
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('menu_items');
};
