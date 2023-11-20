exports.up = function(knex) {
    return knex.schema.createTable('business_hours', (table) => {
        table.increments('id').primary();
        table
            .integer('restaurant_id')
            .unsigned()
            .references('restaurants.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('day').notNullable();
        table.time('open_time').notNullable();
        table.time('close_time').notNullable();
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('business_hours');
};
