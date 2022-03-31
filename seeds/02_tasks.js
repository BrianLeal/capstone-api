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
      task: 'Arrive to new duty station no later than 22 Apr 22',  
      task_status: false,
      due_date: '4/22/2022',
    },
    {
      user_id: 1,
      task: 'Check in with finance to fill out paperwork on your DITY move',  
      task_status: false,
      due_date: '7/31/2022',
    },
    {
      user_id: 2,
      task: 'Drop off your physical dental records at the dental office',  
      task_status: true,
      due_date: '7/14/2022',
    },
    {
      user_id: 5,
      task: 'Go to the Airman & Family Readiness Center to learn about resources that your new base offers',  
      task_status:false,
      due_date: '6/5/2022',
    },
    {
      user_id: 1,
      task: 'Check in at dorms',  
      task_status:false,
      due_date: '6/5/2022',
    },
    {
      user_id: 2,
      task: 'Teach Space Force Ideal. Innovation is people driven and requires the ability to connect and collaborate.', 
      task_status:false,
      due_date: '6/5/2022',
    },
  ])
};
