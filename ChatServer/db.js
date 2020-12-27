const express = require('express')
const app = express()


var mysql = require('mysql');


require('dotenv').config()

console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS);

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});