/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      // test pw
      rank: 'spc3',
      first_name: "Marty", 
      last_name: "McFly",
      work_email: 'thefuture@yahoo.com',
      personal_email: 'hello@me.com',
      phone_number: '315-444-2830', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'inbound',
      sponsor_id: 2,
     },

     {
      rank: 'Sgt',
      first_name: "Jim", 
      last_name: "Halpert",
      work_email: 'jimmy.johns@gmail.com',
      personal_email: 'jimmyjohns@yahoo.com',
      phone_number: '123-123-1321', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'sponsor',
      sponsor_id: 0,
     },

     {
      // test pw
      rank: 'spc4',
      first_name: "Smarty", 
      last_name: "McGuy",
      work_email: 'smarty@yahoo.com',
      personal_email: 'mcguy@me.com',
      phone_number: '315-442-2830', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'inbound',
      sponsor_id: 2,
     },

     {
      // test pw
      rank: 'spc4',
      first_name: "Hearty", 
      last_name: "McHi",
      work_email: 'hearty@yahoo.com',
      personal_email: 'mchi@me.com',
      phone_number: '315-440-2833', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'inbound',
      sponsor_id: 2,
     },
     // test pw
     //test pw
     {
      rank: 'Colonel',
      first_name: "Kim", 
      last_name: "Larpy",
      work_email: 'kim.larmpy@gmail.com',
      personal_email: 'kim.larparparp@yahoo.com',
      phone_number: '843-342-2346', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'admin',
      sponsor_id: null,
     },
     
  ]);
};
