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
      rank: 'Spc3',
      first_name: "Matt", 
      last_name: "Smith",
      work_email: 'matt.smith.31@spaceforce.mil',
      personal_email: 'hello@me.com',
      phone_number: '315-444-2830', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'inbound',
      sponsor_id: 2,
     },

     {
      rank: 'Sgt',
      first_name: "Jim", 
      last_name: "Hayes",
      work_email: 'jim.hayes@spaceforce.mil',
      personal_email: 'jimmy@ygmail.com',
      phone_number: '123-123-1321', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'sponsor',
      sponsor_id: null,
     },

     {
      // test pw
      rank: 'Spc4',
      first_name: "Stuart", 
      last_name: "McGiff",
      work_email: 'stuart.mcgiff.24@spaceforce.mil',
      personal_email: 'mcgiff@me.com',
      phone_number: '315-442-2830', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'inbound',
      sponsor_id: 2,
     },

     {
      // test pw
      rank: 'Spc4',
      first_name: "Emily", 
      last_name: "Nguyen",
      work_email: 'emily.nguyen@spaceforce.mil',
      personal_email: 'mchi@me.com',
      phone_number: '315-440-2833', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'inbound',
      sponsor_id: 2,
     },
     // test pw
     //test pw
     {
      rank: 'Major',
      first_name: "Kim", 
      last_name: "Larpy",
      work_email: 'kim.larpy@spaceforce.mil',
      personal_email: 'kim.larparparp@yahoo.com',
      phone_number: '843-342-2346', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'admin',
      sponsor_id: null,
     },
     
     {
      rank: 'Spc3',
      first_name: "Joe", 
      last_name: "Seinfeld",
      work_email: 'joe.seinfeld@spaceforce.mil',
      personal_email: 'joe.seinfeld@yahoo.com',
      phone_number: '843-342-2346', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'inbound',
      sponsor_id: null,
     },

 
     {
      rank: 'Spc4',
      first_name: "Mary", 
      last_name: "Kate",
      work_email: 'mary.kate@spaceforce.mil',
      personal_email: 'mary.kate@yahoo.com',
      phone_number: '855-362-3345', 
      hashed_password: "$2a$12$44qBZpZCQB/zxO34kGPV4uCp53eOoiCd9hBrkCa3E9LjclLLnb272",
      role: 'sponsor',
      sponsor_id: null,
     },
     
  ]);
};
