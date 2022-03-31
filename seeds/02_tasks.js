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
      due_date: '4/11/2022',
    },

    {
      user_id: 1,
      task: 'Check in with finance to fill out paperwork on your DITY move',  
      task_status: false,
      due_date: '4/27/2022',
    },

    {
      user_id: 1,
      task: 'Drop off your physical dental records at the dental office',  
      task_status: false,
      due_date: '4/31/2022',
    },

    {
      user_id: 4,
      task: 'Drop off your physical dental records at the dental office',  
      task_status: true,
      due_date: '4/14/2022',
    },
    {
      user_id: 6,
      task: 'Go to the Airman & Family Readiness Center to learn about resources that your new base offers',  
      task_status:false,
      due_date: '4/30/2022',
    },
    {
      user_id: 1,
      task: 'Check in at dorms',  
      task_status:false,
      due_date: '4/28/2022',
    },
    {
      user_id: 2,
      task: 'Teach Space Force Ideal. Innovation is people driven and requires the ability to connect and collaborate.', 
      task_status:false,
      due_date: '4/22/2022',
    },
    {
      user_id: 6,
      task: 'Go to the Airman & Family Readiness Center to learn about resources that your new base offers',
      task_status:false,
      due_date: '4/22/2022',
    },
    {
      user_id: 4,
      task: 'Check in with dorm managers for housing accomadations', 
      task_status:false,
      due_date: '4/18/2022',
    },
    {
      user_id: 2,
      task: 'Check in with dorm managers for housing accomadations',
      due_date: '4/6/2022',
    },
    {
      user_id: 4,
      task: 'Check in with TMO for moving status',
      task_status:false,
      due_date: '4/5/2022',
    },
  ])
};
