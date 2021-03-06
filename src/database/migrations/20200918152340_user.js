
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments();
        table.string('name');
        table.string('password');
        table.string('email');
        table.timestamp('created_at').defaultTo(knex.fn.now());
 })
}

exports.down = function(knex) {
    return knex.schema.dropTable('users');  
};
