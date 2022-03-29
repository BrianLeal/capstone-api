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
      task_status: false,
      due_date: '7/31/2022',
    },
    {
      user_id: 1,
      task: 'Check in with finance',  
      task_status: false,
      due_date: '7/31/2022',
    },
    {
      user_id: 2,
      task: 'find info on new inbound',  
      task_status: true,
      due_date: '7/14/2022',
    },
    {
      user_id: 5,
      task: 'assign sponsors',  
      task_status:false,
      due_date: '6/5/2022',
    },
  ])
};
