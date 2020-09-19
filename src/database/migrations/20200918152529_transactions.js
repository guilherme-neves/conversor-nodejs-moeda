
exports.up = function(knex) {
    return knex.schema.createTable('transactions', function(table){
        table.increments();
        table.int('userId');
        table.string('originCurrency');
        table.string('destinyCurrency');
        table.decimal('originValue',10,2);
        table.decimal('targetValue',10, 2);
        table.string('conversionRate');
        table.timestamp('created_at').defaultTo(knex.fn.now());
 })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('transactions');  
};
