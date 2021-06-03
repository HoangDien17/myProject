const express = require ('express');
const bodyParser = require ('body-parser');
const db = require ('./config/db');
const route = require ('./src/routes/index');
require('dotenv').config();

const app = express();


//connect database
db.Connect();

app.use(express.json());

// route
route(app);

app.listen(3000, () => {
  console.log("Server is running on port: 3000 !");
})