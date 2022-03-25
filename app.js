const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require('cors');
// require("dotenv").config();
const dbConnection = require('./database/dbConnection');
const generateToken = require('./util/generateToken')


//middleware
app.use(morgan("tiny"));
app.use(express.json());
const db = require('../database/controllers');


//HASHING
const { hash, compare } = require("bcrypt");
const saltRounds = 12;


  //CREATE (POST)
  app.post("/users", function(req, res) {

    let {first_name, last_name, work_email, personal_email,
         phone_number, username, password, privilege_level, sponsor_id
        } = req.body;
    
    if(!first_name) res.status(401).send('first name required for signup')
    if(!last_name) res.status(401).send('last name required for signup')
    if(!username) res.status(401).send('username required for signup')
    if(!password) res.status(401).send('password required for signup')
 
      else {
        hash(password, saltRounds).then(hashedPassword=>{
          addUser(first_name, last_name, username, hashedPassword)
          .then(data=> res.status(201).json("USER CREATED SUCCESFULLY"))
          .catch(err => rescape.status(500).json(err));
          });
        }
    });

    //Register


    // login
    app.post("/users/login", (req,res)=> {
      //compare password to passwordHash
      let {username, password} = req.body;
      
      // if (!username) res.status(401).send("username required for login");
      // else if (!password) res.status(401).send("password required for login");
      if(!username) res.status(401).send('Username required for Login');
      else if (!password) res.status(401).send('Pasword required for Login');
      else {
        getPasswordHash(username)
          .then((hashedPassword) => {
          compare(password, hashedPassword)
            .then((isMatch) => {

              if (isMatch) {
                getIdForUser(username)
                .then(response => res.status(201).json(response))
                .catch(err => res.status(501).json(err))
                // console.log(err)
              }
              else
                res.status(401).json('Incorrect Username or password supplied');
            })
            .catch((err) => {
              res.status(502).json(err);
              // console.log(err)
            });
        })
        .catch((err) => {
          res.status(503).json(err);
          // console.log(err)
        });
      }
    });


  // READ (GET)

  //UPDATE (PUT, PATCH)

  //DELETE

  // LIST (GET)