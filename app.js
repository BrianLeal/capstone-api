const dbConnection = require('./database/dbConnection');
const generateToken = require('./util/generateToken')

const knex = require("knex");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require('cors');


//getPasswordHash, getAll, getAllTasks, getPrivId, createUser, updateTask, postTask, getTaskById, removeTask, getAllTasks, updateUser, removeUser, addUser
//Page imports
const { getPasswordHash, getAll, getSpecificItem, addTask, deleteItem, updateTask } = require("./database/controllers");


//middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

//HASHING
const bcrypt = require ('bcryptjs');


  //CREATE (POST)
  // app.post("/users", function(req, res) {

  //   let {first_name, last_name, work_email, personal_email,
  //        phone_number, username, password, privilege_level, sponsor_id
  //       } = req.body;
    
  //   if(!first_name) res.status(401).send('first name required for signup')
  //   if(!last_name) res.status(401).send('last name required for signup')
  //   if(!username) res.status(401).send('username required for signup')
  //   if(!password) res.status(401).send('password required for signup')
 
  //     else {
  //       hash(password, saltRounds).then(hashedPassword=>{
  //         addUser(first_name, last_name, username, hashedPassword)
  //         .then(data=> res.status(201).json("USER CREATED SUCCESFULLY"))
  //         .catch(err => rescape.status(500).json(err));
  //         });
  //       }
  //   });

   // Register
    app.post('/users', async (req, res) => {
      try{
        const {username, password, first_name, last_name, work_email} = req.body;
        const user = req.body;
        const hashed_password = await bcrypt.hash(password, 12);
        await dbConnection.insert({username: username, hashed_password: hashed_password, first_name: first_name, last_name: last_name, work_email: work_email}).from('users');
        res.status(201).json({
          user: username,
          token:generateToken(username)
         });
      } catch(e) {
        console.log(e)
        res.status(500).send('Something Went Wrong');
      }
    });




  
      
  


    // login
    app.post('/users/login', async(req, res) => {

      try{
        const {username, password} = req.body;
        user = await dbConnection.select('*').where({username: username}).from('users')
        if (user.length){
          console.log(user)
          const validPass = await bcrypt.compare(password, user[0].password_hash);
          if(validPass) {
            res.status(201).json({
              user: username,
              token:generateToken(username)
             });
          }
          else{
            res.json('Wrong Password')
          }
        }
        else {
          res.status(404).json('User not found')
        }
        }
  
        catch(e) {
        console.log(e)
        res.status(500).send('Something Went Wrong');
        }
      });
    
  

    app.post("/tasks", (req, res) => {
      const u_id = req.body.user_id ? req.body.user_id : '';
      const newTask = req.body.task ? req.body.task : '';
      
      console.log('post log', req.body)
      
      addTask(u_id, newTask)
          .then((data) => 
              res.status(200).json({message: `The task was posted successfully`})
              )
          .catch((err) => 
              res.status(422).json({message: `Failure to post task. ERROR: ${err}`})
          )
  })

  // READ (GET)

  //Get by specific ID g2g

  app.get("/:table/:id", (req, res) => {
    getSpecificItem(req.params.table, req.params.id)
        .then((data) => res.send(data))
        .catch((err) => 
            res.status(404).json({message: `${req.params.table} does not exist.`})
        )
})

  // //getting specific user by ID
  // app.get('/posts/users/:user_id', function(req, res) {
  //   dbConnection
  //     getAllTasks(req.params.user_id)
  //     .then(data => res.status(200).json(data))
  //     .catch(err =>
  //       res.status(404).json({
  //         message:
  //           'The data you are looking for could not be found. Please try again'
  //       })
  //     );
  // });

  //   //get by id 
  // app.get('/:table/:id', function(req, res) {
  //   dbConnection
  //     .select('*')
  //     .from(req.params.table)
  //     .where({id: req.params.id})
  //     .then(data => res.status(200).json(data))
  //     .catch(err =>
  //       res.status(404).json({
  //         message:
  //           'The data you are looking for could not be found. Please try again'
  //       })
  //     );
  // });

  //UPDATE (PUT, PATCH)
  app.patch('/tasks/:id', function(req, res) {
    let {user_id, task} = req.body;
    // dbConnection
  // ('tasks').where({ id: req.params.id}).update({user_id: req.body.user_id, task: req.body.task})
  console.log(req.body)
  updateTask(req.params.id, req.params.body)
    .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Something is wrong." })
    })
  });
  


  //DELETE by ID g2g
  app.delete("/:table/:id", (req, res) => {
    deleteItem(req.params.table, req.params.id)
    .then((data) => 
        res.status(200).json({message: `Deleted successfully`})
    )
    .catch((err) =>
        res.status(404).json({message: `${req.params.table} does not exist.`})
        
    )   
})

  // LIST (GET) g2g

  app.get("/:table", (req, res) => {
    console.log('asdfasdf')
    getAll(req.params.table)
        .then((data) => res.send(data))
        .catch((err) =>
            // res.status(404).json({ message: `${req.params.table} does not exist.` })
            res.status(404).json({message: `Failure to post data. ERROR: ${err}`})       
            );
  });

module.exports = app;