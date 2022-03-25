/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      user_id: 1,
      task: 'PCS here',  
    },
    {
      user_id: 2,
      task: 'find info on new inbound',  
    },
    {
      user_id: 3,
      task: 'assign sponsors',  
    },
  ])
};
