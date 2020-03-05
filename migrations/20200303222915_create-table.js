exports.up = function(knex) {
    return knex.schema.createTable('Users', tbl => {
          tbl.increments('user_id');

          tbl
              .string('username', 128)
              .notNullable()
              .unique();
        
          tbl
              .string('email')
              .notNullable()
              .unique();
              

          tbl
              .string('password', 128)
              .notNullable();
    })
    .createTable('Strains', tbl => {
          tbl.increments('strain_id');

          tbl
              .string('strain_name')
              .notNullable()
              .unique();

          tbl
              .string('strain_type')
              .notNullable();

          tbl.integer('strain_rating');
          tbl.text('strain_description');
          tbl.string('strain_effects');
          tbl.string('strain_flavors');
    })
  .createTable('Saved_Strains', tbl => {
      tbl.increments('saved_strain_id');

      tbl
          .integer('user')
          .unsigned()
          .notNullable()
          .references('user_id')
          .inTable('Users');

      tbl
          .integer('strain')
          .unsigned()
          .notNullable()
          .references('strain_id')
          .inTable('Strains');
  })
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('Saved_Strains')
          .dropTableIfExists('Strains')
          .dropTableIfExists('Users')
  };
