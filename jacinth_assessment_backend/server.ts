const express= require('express');
const book = require('./route/booksRoute');
const app = express();
const port = 4000;
const connect = require('./db/connect');
require('dotenv').config();

app.use(express.json())

app.get('/', (req:any, res:any) => {
  res.send('Hello World!');
});

app.use('/api', book);



const start = async () => {
  try {
    connect(process.env.MONG_URI);
   app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

  } catch (err) {
    console.log(err);
  }
};

start();
