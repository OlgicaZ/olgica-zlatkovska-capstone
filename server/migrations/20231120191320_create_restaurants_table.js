exports.up = function(knex) {
    return knex.schema.createTable('restaurants', (table) => {
        table.increments('id').primary();
        table.string('restaurant_name').notNullable();
        table.string('cuisine').notNullable();
        table.string('description').notNullable();
        table.string('about').notNullable();
        table.string('contact_phone').notNullable();
        table.string('contact_email').notNullable();
        table.string('image_url').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('restaurants');
};
