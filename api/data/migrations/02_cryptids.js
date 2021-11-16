exports.up = async (knex) => {
    await knex.schema.createTable("cryptids", (cryptids) => {
        cryptids.increments("cryptids_id");
        cryptids.string("title", 200).notNullable();
        cryptids.string("descriptions", 200)
        cryptids.string("img_url", 200)
        cryptids.string("source_url", 200)
        cryptids.boolean("is_filled",1).defaultTo(0)
    });
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("cryptids");
};
