
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();

      tbl.text('name', 128)
         .notNullable()
         .unique();

      tbl.text('password', 128)
        .notNullable();

      tbl.text('email', 128)
         .notNullable()
         .unique();
  })
    .createTable('clients', tbl => {
      tbl.increments();
      
      tbl.text('name', 128)
         .notNullable()
         .unique();

      tbl.text('village', 128);

      tbl.integer('user_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

    tbl.text('goal', 512);

    tbl.text('harvest', 512);

  })
    .createTable('loans', tbl => {
      tbl.increments();
    
      tbl.integer('client_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('clients')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

      tbl.float('loan_amt')
         .unsigned()
         .notNullable();
    
     tbl.text('init_date', 10);
        
     tbl.text('due_date', 10);
     
        
  })
   .createTable('payments', tbl => {
      tbl.increments();

      tbl.integer('loan_id')
      .unsigned()
         .notNullable()
         .references('id')
         .inTable('clients')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

      tbl.text('payment_date');

      tbl.float('loan_amt')
         .unsigned()
         .notNullable();

  })
};

exports.down = function(knex) {
  
};
