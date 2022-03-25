const knex = require("./dbConnection");

// function addUser(firstNameToAdd, lastNameToAdd, userName, hashedPassword) {
//     return knex('users').insert(
//         {
//         first_name: firstNameToAdd, last_name: lastNameToAdd, 
//         username: userName, password_encrypted: hashedPassword
//         })
// }

    // users
    function getAllUsers () {
        return knex.select('*').from('users');
    }

    function addUser (body) {
        return knex.insert(body).from('users');
      }


      function removeUser (param) {
        return knex.select('*').from('users').where({ id: param }).del();
    }

    
    function updateUser (param, body) {
        return knex.select('*').from('users').where({ id: param })
          .update(body);
      }

    // tasks

    function getAllTasks () {
        return knex.select('*').from('tasks');
    }

    function removeTask (param) {
        return knex.select('*').from('tasks').where({ id: param }).del();
      }

      function getTaskById (param) {
    return knex.select('*').from('tasks').where({ id: param });
    }

    function postTask (body) {
        return knex.insert(body).from('tasks');
    }

    function updateTask (param, body) {
        return knex.select('*').from('tasks').where({ id: param })
          .update(body);
      }


    // user accounts
function createUser (privilege_level, username, hashed_password) {
    return knex('users').insert({ privilege_level, username, hashed_password });
  }

  function getPasswordHash (userName) {
    return knex('users')
      .where({ username: userName })
      .select('hashed_password')
      .then((data) => data[0].hashed_password);
  }

  function getPrivId (userName) {
    return knex('users')
      .where({ username: userName })
      .select('privilege_level')
      .then((data) => data[0].privilege_level)
      .catch((err) => console.log(err))
  }


module.exports = {getPasswordHash}




// } 