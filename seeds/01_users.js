/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      first_name: "Marty", 
      last_name: "McFly",
      work_email: 'thefuture@yahoo.com',
      personal_email: 'hello@me.com',
      phone_number: '315-444-2830', 
      username: "test", 
      hashed_password: "test",
      privilege_level: 0,
      sponsor_id: 2,
     },
     {
      first_name: "Jim", 
      last_name: "Halpert",
      work_email: 'jimmy.johns@gmail.com',
      personal_email: 'jimmyjohns@yahoo.com',
      phone_number: '123-123-1321', 
      username: "jimhalp", 
      hashed_password: "default",
      privilege_level: 1,
      sponsor_id: 0,
     },
     {
      first_name: "Kim", 
      last_name: "Larpy",
      work_email: 'kim.larmpy@gmail.com',
      personal_email: 'kim.larparparp@yahoo.com',
      phone_number: '843-342-2346', 
      username: "kimlarp", 
      hashed_password: "default",
      privilege_level: 2,
      sponsor_id: null,
     },
     
  ]);
};
