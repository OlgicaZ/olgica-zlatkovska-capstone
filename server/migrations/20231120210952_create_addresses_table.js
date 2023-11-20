exports.up = function(knex) {
    return knex.schema.createTable('addresses', (table) => {
        table.increments('id').primary();
        table
            .integer('restaurant_id')
            .unsigned()
            .references('restaurants.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('street_address').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('postal_code').notNullable();
        table.string('country').notNullable();
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('addresses');
};
