const express = require('express');
const app = express();
const port = 3000;
import {connection} from db.js

app.get('/', (req, res) => {
  res.json({
    'message':'success'
  });
});

app.get('/dev',(req,res)=>{
  res.json({
    'dev':'upkesha',
    'stack':'MERN'
  })
})

app.get('/dev',(req,res)=>{
  res.json({
    'dev':'upkesha',
    'stack':'MERN'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});